import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vince Medence - Magiline Specialista",
  description: "Közel 10 éves szakértői múlt a Magiline medencék karbantartásában.",
};

export default function RootLayout({
  children,
}: Readxlony<{ children: React.ReactNode; }>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
