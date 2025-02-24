import "./globals.css";

export const metadata = {
  title: "Viajes por el mundo",
  description: "Viajes por el mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
