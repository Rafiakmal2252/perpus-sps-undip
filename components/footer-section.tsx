import Image from "next/image";
import GambarFooter from "@/public/images/Logo-Footer-Undip.png";
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { link } from "fs";

export default function FooterSection() {
    return (
<footer className="relative bg-footer text-white pt-8 pb-5 px-5 mt-16 lg:flex lg:flex-row">
        <div className="flex">
            <Image alt="Universitas Diponegoro logo" className="h-60 mx-auto" src={GambarFooter} />
        </div>

        <div className="lg:space-x-5 contents font-poppins">
            <div className="flex flex-col mt-4">
                <h2 className="text-xl font-bold mb-1 text-link lg:mb-4">Jam Pelayanan</h2>
                <p><span className="font-bold">Senin - Kamis :</span> 08:00 - 16:00 WIB</p>
                <p><span className="font-bold">Jumat :</span> 08:00 - 16:30 WIB</p>
                <p><span className="font-bold">Monday - Thursday :</span> 08:00 AM - 4:00 PM</p>
                <p><span className="font-bold">Friday :</span> 08:00 AM - 16:30 PM</p>
            </div>
            <div className="flex flex-col mt-4">
                <h2 className="text-xl font-bold mb-1 text-link lg:mb-4">Lainnya</h2>
                <p><a className="hover:text-link" href="https://www.undip.ac.id/" target="_blank">Universitas Diponegoro</a></p>
                <p><a className="hover:text-link" href="https://digilib.undip.ac.id/" target="_blank">Perpustakaan UNDIP Pusat</a></p>
                <p><a className="hover:text-link" href="http://pasca.undip.ac.id/" target="_blank">Sekolah Pascasarjana UNDIP</a></p>
            </div>
            <div className="flex-1 mt-4">
                <h2 className="text-xl font-bold mb-1 text-link lg:mb-4">Kontak</h2>
                <div className="mb-2 ml-2 items-center space-x-1 flex ">
                    <MapPin size={42} color="#2EA3F2" />
                    <a className="hover:text-link" href="https://maps.app.goo.gl/EBzt7tN4TynFB5Z57">
                    <span className="flex items-start h-full">Gedung Pascasarjana B Lt 1, Jl. Imam Bardjo, SH No. 3-5 Semarang 50241</span>
                    </a>
                        
                </div>
                <div className="mb-2 ml-2 items-center space-x-1 flex">
                <Phone size={22} color="#2EA3F2" />
                    <a className="hover:text-link" href="https://wa.me/6282135192661" target="_blank">
                    <span>082135192661</span>
                    </a>      
                </div>
                <div className="mb-2 ml-2 items-center space-x-1 flex ">
                <Mail size={22} color="#2EA3F2"/>
                    <a className="hover:text-link" href="https://mail.google.com" target="_blank">
                    <span>perpustakaanspsundip@gmail.com</span></a>
                </div>
                <div className="ml-2 items-center space-x-1 flex text-nowrap">
                    <Instagram size={22} color="#2EA3F2" />
                    <a className="hover:text-link" href="https://www.instagram.com/perpus.spsundip/" target="_blank">   
                    <span>@perpus.spsundip</span>
                    </a>
                </div>
            </div>
        </div>
        <p className="text-center right-3 bottom-1 mt-5 text-xs font-bold text-background/80 lg:mt-56 lg:text-nowrap">
            Dibuat Oleh
        <br/>    
            Siswa PKL SMKN 8 Semarang | 2024
        </p>
    </footer>
    )
  }