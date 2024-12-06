import Image from "next/image";
import GambarImam from "@/public/images/pak-imam.png";
import GambarEka from "@/public/images/bu-ekana.png";

export default function StaffSection() {
    return (
        <section className="mt-16 mx-2 lg:mx-40">
        <h1 className="shadow-2xl font-bold text-2xl bg-judul text-background pl-2 py-1 rounded lg:text-3xl lg:pl-5">Staff</h1>
        <div className="justify-center font-p grid mt-6 lg:grid-cols-2 lg:mx-auto lg:w-fit lg:space-x-40 ">
            <div className="border-2 border-isi/60 text-black px-2 py-3 rounded lg:w-[187.45px] lg:h-[180px]">
                <Image src={GambarEka} alt="Gambar Imam" className="h-20 w-20 border-[1px] border-black rounded-full mx-auto" />
                <span className="my-auto ml-4 font-semibold mx-auto text-center"><h3 className="font-bold">Ekana Listianawati</h3><p className="font-semibold text-nowrap">Sebagai: Pustakawan</p></span>
            </div>
            <div className="border-2 border-isi/60 text-black px-2 py-3 rounded mt-6 lg:mt-0 lg: lg:h-[180px]">
                <Image src={GambarImam} alt="Gambar Eka" className="h-20 w-20 rounded-full mx-auto object-fill border-black border-[1px]" />
                <span className="my-auto ml-4 font-semibold text-center"><h3 className="font-bold">Imam Surono</h3><p className="font-semibold">Sebagai: Administrasi</p></span>
            </div>
        </div>
    </section>
    )
 }