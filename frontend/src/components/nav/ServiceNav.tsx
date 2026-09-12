import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/users", label: "Users" },
  { href: "/chats", label: "Chats" },
  { href: "/messages", label: "Messages" },
  { href: "/notifications", label: "Notifications" },
  { href: "/payments", label: "Payments" },
  { href: "/orders", label: "Orders" },
  { href: "/products", label: "Products" },
];

export function ServiceNav() {
  return (
    <nav className="crud-nav">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
