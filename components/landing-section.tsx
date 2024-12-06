import Image from "next/image";
import GambarPerpus from "@/public/images/gambar-perpus.jpg";

export default function LandingSection () {
    return(
    <section className="relative mt-4 lg:mx-5 overflow-hidden">
        <div className="animate-slideInFromLeft text-black bg-[#F4F6F5]/60 z-10 font-medium rounded py-4 px-2 text-xs w-32 ml-1 mt-8 shadow-lg absolute lg:font-bold lg:text-4xl lg:w-[430px] lg:px-11 lg:py-20 lg:bottom-20 lg:shadow-2xl">Selamat Datang di Perpustakaan Pascasarjana UNDIP</div>
        <Image src={GambarPerpus} alt="Gambar Perpus" className="animate-slideInFromLeft h-36 w-80 mx-auto place-items-center  rounded lg:h-[510px] lg:w-11/12 lg:place-self-end" />
    </section>
    )
}