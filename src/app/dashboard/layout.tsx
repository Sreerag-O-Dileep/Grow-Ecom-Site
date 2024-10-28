import Navbar from "../ui/shared/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="bg-slate-50 text-black p-8">
                {children}
            </div>
        </>
    );
}