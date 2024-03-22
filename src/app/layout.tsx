import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: "Test Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-Qencode"}>
        <main className={"flex min-h-screen w-full items-center justify-center"}>{children}</main>
      </body>
    </html>
  );
}
