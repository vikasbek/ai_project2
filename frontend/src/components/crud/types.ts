export type FieldType = "text" | "number" | "textarea" | "checkbox" | "list";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
}

export type EntityRecord = Record<string, unknown> & { id: string };
