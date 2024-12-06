import Image from "next/image";
import GambarDiskusi from "@/public/images/r-diskusi.jpg";
import GambarBaca from "@/public/images/p-r-baca.jpg";
import GambarTesis from "@/public/images/k-tesis.jpg";
import Gambarbuku from "@/public/images/k-buku.jpg";

export default function FacilitySection() {
    return (
        <section className="mt-16 mx-2 lg:mx-20">
        <h1 className=" shadow-2xl font-bold text-2xl rounded bg-judul text-background py-1 pl-2 lg:text-3xl lg:pl-5">Fasilitas</h1>
        <div className="mx-4 justify-center font-poppins lg:mx-8 lg:grid lg:grid-cols-2 lg:gap-x-72">
            <div className="mt-14"><h2 className="text-xl font-semibold inline bg-isi/60 pt-1 pb-3 px-2 rounded-t-lg text-background lg:pb-4 lg:px-3 lg:text-2xl">Ruang Diskusi</h2>
                <Image src={GambarDiskusi} alt="Gambar R. Diskusi" className="rounded-md h-48 mt-1" />
            </div>
            <div className="shadow-2xl mt-14"><h2 className="text-xl font-semibold inline bg-isi/60 pt-1 pb-3 px-2 rounded-t-lg text-background lg:pb-4 lg:px-3 lg:text-2xl">Ruang Baca</h2>
                <Image src={GambarBaca} alt="Gambar R. Baca" className="rounded-md h-48 mt-1" />
            </div>
            <div className="mt-14"><h2 className="text-xl font-semibold inline bg-isi/60 pt-1 pb-3 px-2 rounded-t-lg text-nowrap text-background lg:pb-4 lg:px-3 lg:text-2xl">Koleksi Tesis</h2>
                <Image src={GambarTesis} alt="Gambar Tesis" className="rounded-md h-48 mt-1" />
            </div>
            <div className="shadow-2xl mt-14"><h2 className="text-xl font-semibold inline bg-isi/60 pt-1 pb-3 px-2 rounded-t-lg text-background lg:pb-4 lg:px-3 lg:text-2xl">Koleksi Buku</h2>
                <Image src={Gambarbuku} alt="Gambar Buku" className="rounded-md h-48 mt-1" />
            </div>
        </div>
    </section>
    )
  }