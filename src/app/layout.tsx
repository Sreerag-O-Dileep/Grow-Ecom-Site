import type { Metadata } from "next";
import "@/styles/globals.css";
import { primary_font } from "@/components/fonts";
import Header from "@/components/header";


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
