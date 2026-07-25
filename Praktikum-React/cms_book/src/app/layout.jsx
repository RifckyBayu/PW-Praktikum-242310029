export const metadata = {
  title: "CMS Book Management",
  description: "Praktikum Pemrograman Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}