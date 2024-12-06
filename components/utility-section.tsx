import Image from "next/image";
import IconTurnitin from "@/public/images/file-text.svg";
import IconELib from "@/public/images/book.svg";
import IconGrammarly from "@/public/images/g-solid.svg";
import IconEPrints from "@/public/images/folder.svg";
import IconPustaka from "@/public/images/book-open.svg";
import IconAktivasi from "@/public/images/user-check.svg";

export default function UtilitySection() {
    return (
        <section className="shadow-2xl font-poppins bg-isi/60 h-60 mt-16 mx-2 flex rounded-md lg:h-44 lg:mx-20 lg:py-11">
        <div className="grid grid-cols-3 gap-x-16 mx-auto mt-8 lg:flex lg:mt-0 lg:space-x-16  lg:flex-nowrap lg:mx-auto">
            <a href="https://bit.ly/ujiturnitinspsundip" target="_blank" rel="noopener noreferrer" className="utility">
                <Image src={IconTurnitin} alt="Icon Turnitin" className="h-6 lg:h-12 lg:w-12" />
                <p className="absolute text-sm font-semibold -bottom-6 text-nowrap">Uji Turnitin</p>
            </a>
            <a href="https://lib.undip.ac.id/" target="_blank" rel="noopener noreferrer" className="utility">
                <Image src={IconELib} alt="Icon E-Lib" className="h-6 lg:h-12 lg:w-12" />
                <p className="absolute font-semibold text-sm -bottom-6 text-nowrap">E-Library</p>
            </a>
            <a href="https://bit.ly/ujigrammarlyspsundip" target="_blank" rel="noopener noreferrer" className="utility">
                <Image src={IconGrammarly} alt="Icon Grammarly" className="h-6 lg:h-12" />
                <p className="absolute font-semibold text-sm -bottom-6 text-nowrap">Uji Grammarly</p>
            </a>
            <a href="https://eprints2.undip.ac.id/" target="_blank" rel="noopener noreferrer" className="utility">
                <Image src={IconEPrints} alt="Icon E-Print" className="h-6 lg:h-12 lg:w-12" />
                <p className="absolute font-semibold text-sm -bottom-6 text-nowrap">E-Prints</p>
            </a>
            <a href="https://bit.ly/bebaspustakaspsundip" target="_blank" rel="noopener noreferrer" className="utility">
                <Image src={IconPustaka} alt="Icon Bebas Pustaka" className="h-6 lg:h-12 lg:w-12" />
                <p className="absolute font-semibold text-sm -bottom-6 text-nowrap">Bebas Pustaka</p>
            </a>
            <a href="https://bit.ly/aktivasianggotaspsundip" target="_blank" rel="noopener noreferrer" className="utility">
                <Image src={IconAktivasi} alt="Icon Aktivasi Anggota" className="h-6 lg:h-12 lg:w-12" />
                <p className="absolute font-semibold text-sm -bottom-11 lg:-bottom-6 lg:text-nowrap">Aktivasi Anggota</p>
            </a>
        </div>
    </section>
    )
  }
  