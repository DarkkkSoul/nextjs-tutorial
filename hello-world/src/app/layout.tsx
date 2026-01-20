import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kiouni's Websites",
    template: "%s yoooo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          Page Header
        </header>
        {children}
        <footer style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
          Page Header
        </footer>
      </body>
    </html>
  );
}
