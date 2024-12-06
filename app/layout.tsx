import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '300', '400', '500','600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Perpustakaan Sekolah Pascasarjana Undip",
  description: "Website Sederhana Profil Perpustakaan Sekolah Pascasarjana Universitas Diponegoro",
  keywords: "perpusspsundip, perpustakaanpascasarjanaundip, Perpustakaan Sekolah Pascasarjana Universitas Diponegoro",
  verification: {
    google: "wxFcJObeUVmWHJaj1OFiL1RDcD3dV-HbKydoHaxsu8I", // Tambahkan kode verifikasi Google di sini
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={poppins.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
