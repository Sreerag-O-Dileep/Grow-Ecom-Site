export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="bg-slate-50 text-black p-8">
                {children}
            </div>
        </>
    );
}