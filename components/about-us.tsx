import Image from "next/image";
import PascasarjanaUndip from "@/public/images/pascasarjana-undip.png";
import FotoAbout from "@/public/images/about-us.jpg";

export default function AboutUs(){
    return(
        <section className="shadow-2xl  py-5 mt-16 flex font-poppins flex-col mx-4 bg-isi/60 rounded-md lg:mx-20 lg:py-10 "> 
        <div className="mx-2 lg:flex lg:items-center lg:space-x-20 lg:mx-14">
            <Image src={FotoAbout} alt="About Us" className="h-24 w-36 float-right ml-2 mt-2 rounded-md lg:h-60 lg:w-96 lg:float-none lg:ml-0 lg:mt-0" />
            <h2 className="font-bold text-xl mx-auto ml-1 text-background lg:font-bold lg:text-3xl">About Us
                <p className="text-xs font-semibold mt-3 text-black text-justify lg:text-base lg:font-semibold lg:mt-2 lg:text-black lg:text-left">Perpustakaan Pascasarjana Universitas Diponegoro merupakan salah satu fasilitas yang dirancang untuk mendukung kebutuhan akademik mahasiswa pascasarjana. Perpustakaan ini menyediakan berbagai koleksi literatur ilmiah yang mencakup 6 program studi yaitu Magister & Doktor Ilmu Lingkungan, Magister & Doktor Sistem Informasi, dan Magister Energi.</p>
            </h2>
        </div>
        <div className="mx-2 mt-14 lg:grid lg:grid-cols-2 lg:mt-20 lg:mx-10">
            <Image src={PascasarjanaUndip} alt="Pascasarjana Undip" className="rounded-md h-32 mx-auto lg:hidden" />
            <div className=" font-bold mt-4 inline-block text-base text-background">
                <h2 className="ml-1 lg:font-bold lg:text-2xl">Visi Sekolah Pascasarjana UNDIP:</h2>
                <p className="text-xs leading-5 text-justify font-bold mt-1 text-black lg:text-base lg:font-bold lg:mt-3 lg:mb-11">"Menjadi Sekolah Pascasarjana bertaraf internasional yang unggul dan terkemuka dengan mengintegrasikan bidang keilmuan multidisiplin."</p>
                <h2 className="font-bold text-lg mt-5 text-background lg:font-bold lg:text-2xl">Misi Sekolah Pascasarjana UNDIP:</h2>
                <ul className="text-xs font-semibold mt-3 text-black space-y-2 list-disc list-inside lg:text-base">
                    <li>Menyelenggarakan pendidikan pascasarjana multidisiplin berkualitas yang menghasilkan lulusan unggul, kompetitif, dan berkontribusi pada pengembangan ilmu pengetahuan, teknologi, dan seni.</li>
                    <li>Meningkatkan penelitian dan publikasi berbasis multidisiplin yang mengedepankan budaya dan sumber daya lokal.</li>
                    <li>Mengembangkan pengabdian kepada masyarakat melalui penerapan ilmu pengetahuan, teknologi, dan seni berbasis pendekatan multidisiplin.</li>
                    <li>Mengelola pendidikan pascasarjana dengan profesionalitas, akuntabilitas, tata kelola yang baik, dan kemandirian berkelanjutan.</li>
                </ul>
            </div>
            <Image src={PascasarjanaUndip} alt="Pascasarjana UNDIP" className="hidden rounded-md my-auto ml-7 lg:block" />
        </div>
        </section>
          )
}