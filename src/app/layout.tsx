import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";
import { primary_font } from "@/public/fonts";
import Header from "@/components/header";
import { CartProvider } from "@/context/cart-context";


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
        <CartProvider>
          <Header />
          <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeButton={true} />
          <div>{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
