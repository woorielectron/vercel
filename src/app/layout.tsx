import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "주사위 놀이",
  description: "수업시간",
};

export default function RootLayout({ children }: { children: React.ReactNode })
{
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
