export const metadata = {
  title: "Vince Medence - Magiline Specialista",
  description: "Közel 10 éves szakértői múlt a Magiline medencék karbantartásában.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
