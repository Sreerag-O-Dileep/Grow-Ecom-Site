import Navbar from "@/components/navbar";
import { Suspense } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense>
            <Navbar />
            <div className="bg-slate-50 text-black p-8">
                {children}
            </div>
        </Suspense>
    );
}