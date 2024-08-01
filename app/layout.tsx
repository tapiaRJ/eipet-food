import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justiiano JTR",
  description: "inicio by JTR",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="font-arialRounded bg-[#4d3c9c]">
        {children}
      </body>
    </html>
  );
}
