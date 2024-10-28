import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/shared/header";
import { primary_font } from "./ui/shared/fonts";

export const metadata: Metadata = {
  title: "Grow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={primary_font.className}
        style={{
          backgroundImage: `url('/bg-image.jpg')`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
        }}
      >
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
