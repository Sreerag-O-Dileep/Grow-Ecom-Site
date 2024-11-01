import Link from "next/link"

export default function Banner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5.5rem)] text-white font-bold text-center">
            <h5 className="text-xl md:text-2xl">
                The Boutique Store For Plants!
            </h5>
            <h1 className="p-8 w-full md:w-2/3 text-4xl md:text-8xl leading-[1.4em]">
                Everything Is Better With Plants
            </h1>
            <Link href='/shopping/plants' className="bg-green-600 hover:bg-green-700 py-2 md:py-3 px-5 md:px-7">
                Shop Now
            </Link>
        </div >
    )
}