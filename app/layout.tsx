import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artizaho",
  description:
    "We're showcasing Malagasy craftsmen and reviving their culture and know-how through a series of workshops open to the public.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-manrope relative text-black-default bg-white text-base ">
        {children}
      </body>
    </html>
  );
}
