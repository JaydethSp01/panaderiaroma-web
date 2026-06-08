export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/cocina", label: "Cocina" }, { href: "/men", label: "Menú" }, { href: "/mesas", label: "Mesas" }, { href: "/pedidos", label: "Pedidos" }, { href: "/pos", label: "Pos" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Panaderia Aroma", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Panaderia Aroma">{children}</ProtectedShell>
      </body>
    </html>
  );
}
