import Image from "next/image";
import LogoPerpus from "@/public/images/logo-perpus.png";

export default function Header(){
    return(
        <div className="bg-backgrounds max-h-full">
        <div className="flex py-2 border-b-4 border-black">  
        <Image src={LogoPerpus} alt="Logo Perpus" height={48} width={500} className="ml-3 lg:h-20" />
        </div>      
    </div>
    )
}