'use client'
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <Navbar />
            <div className="bg-slate-50 text-black p-8">
                {children}
            </div>
        </Provider>
    );
}