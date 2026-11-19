import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAKAMURA AIRE | Climatización, instalación y servicio técnico",
  description: "NAKAMURA AIRE: instalación, mantenimiento, limpieza y reparación de aire acondicionado. Soluciones de climatización y atención técnica en Guayaquil, Ecuador.",
  keywords: ["aire acondicionado", "climatización", "mantenimiento", "reparación", "instalación", "Guayaquil", "Nakamura Aire"],
  openGraph: {
    title: "NAKAMURA AIRE | Confort y servicio técnico",
    description: "Soluciones profesionales en climatización, instalación, mantenimiento y reparación.",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
