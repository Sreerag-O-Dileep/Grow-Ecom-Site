import Link from "next/link";
import Button from "@/components/button";
import TextSection from "@/components/texts";

export default function Banner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5.5rem)] text-white font-bold text-center">
            <TextSection className="text-white" textType='heading' textContent="The Boutique Store For Plants!" />
            <h1 className="p-8 w-full md:w-2/3 text-4xl md:text-8xl leading-[1.4em]">
                Everything Is Better With Plants
            </h1>
            <Link href='/shopping/plants'>
                <Button type='primary' label={"Shop Now"} />
            </Link>
        </div >
    )
}