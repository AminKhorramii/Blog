import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amin Khorrami - Blog",
  description:
    "Software engineer. Working on web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
