"use client";

import { FormEvent, useEffect, useState } from "react";

import { apiClient } from "@/lib/api-client";
import type { EntityRecord, FieldDef } from "@/components/crud/types";

interface EntityManagerProps {
  title: string;
  resourcePath: string;
  fields: FieldDef[];
}

function emptyForm(fields: FieldDef[]): Record<string, string | boolean> {
  const values: Record<string, string | boolean> = {};
  for (const field of fields) {
    values[field.name] = field.type === "checkbox" ? false : "";
  }
  return values;
}

function toDisplayValue(value: unknown, type: FieldDef["type"]): string | boolean {
  if (type === "checkbox") return Boolean(value);
  if (type === "list" && Array.isArray(value)) return value.join(", ");
  if (value === null || value === undefined) return "";
  return String(value);
}

function buildPayload(fields: FieldDef[], values: Record<string, string | boolean>) {
  const payload: Record<string, unknown> = {};
  for (const field of fields) {
    const raw = values[field.name];
    if (field.type === "number") {
      payload[field.name] = raw === "" ? null : Number(raw);
    } else if (field.type === "checkbox") {
      payload[field.name] = Boolean(raw);
    } else if (field.type === "list") {
      payload[field.name] = String(raw)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    } else {
      payload[field.name] = raw;
    }
  }
  return payload;
}

export function EntityManager({ title, resourcePath, fields }: EntityManagerProps) {
  const [items, setItems] = useState<EntityRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState(emptyForm(fields));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function loadItems() {
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.get<EntityRecord[]>(resourcePath);
      setItems(data);
    } catch {
      setError(`Could not load ${title.toLowerCase()}. Is the API gateway running?`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourcePath]);

  function updateField(name: string, value: string | boolean) {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function startEdit(item: EntityRecord) {
    const values: Record<string, string | boolean> = {};
    for (const field of fields) {
      values[field.name] = toDisplayValue(item[field.name], field.type);
    }
    setFormValues(values);
    setEditingId(item.id);
  }

  function cancelEdit() {
    setFormValues(emptyForm(fields));
    setEditingId(null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const payload = buildPayload(fields, formValues);
    try {
      if (editingId) {
        await apiClient.put(`${resourcePath}/${editingId}`, payload);
      } else {
        await apiClient.post(resourcePath, payload);
      }
      cancelEdit();
      await loadItems();
    } catch {
      setError("Save failed. Check the fields and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    setError(null);
    try {
      await apiClient.del(`${resourcePath}/${id}`);
      if (editingId === id) cancelEdit();
      await loadItems();
    } catch {
      setError("Delete failed.");
    }
  }

  return (
    <section className="crud-section">
      <h2>{title}</h2>

      <form className="crud-form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <label key={field.name} className="crud-field">
            <span>{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                value={formValues[field.name] as string}
                required={field.required}
                onChange={(e) => updateField(field.name, e.target.value)}
              />
            ) : field.type === "checkbox" ? (
              <input
                type="checkbox"
                checked={formValues[field.name] as boolean}
                onChange={(e) => updateField(field.name, e.target.checked)}
              />
            ) : (
              <input
                type={field.type === "number" ? "number" : "text"}
                value={formValues[field.name] as string}
                required={field.required}
                onChange={(e) => updateField(field.name, e.target.value)}
              />
            )}
          </label>
        ))}

        <div className="crud-actions">
          <button type="submit" disabled={submitting}>
            {editingId ? "Update" : "Create"}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} disabled={submitting}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {error && <p className="crud-error">{error}</p>}

      {loading ? (
        <p>Loading…</p>
      ) : items.length === 0 ? (
        <p>No records yet.</p>
      ) : (
        <table className="crud-table">
          <thead>
            <tr>
              {fields.map((field) => (
                <th key={field.name}>{field.label}</th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {fields.map((field) => (
                  <td key={field.name}>
                    {String(toDisplayValue(item[field.name], field.type))}
                  </td>
                ))}
                <td className="crud-row-actions">
                  <button type="button" onClick={() => startEdit(item)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
