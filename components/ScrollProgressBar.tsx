"use client"
import React, { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Jarak scroll dari atas
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // Tinggi dokumen
      const scrollPercentage = (scrollTop / docHeight) * 100; // Persentase scroll
      setScrollWidth(scrollPercentage);
    };

    // Tambahkan event listener scroll
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="progress-bar"
      style={{
        width: `${scrollWidth}%`,
      }}
      className="fixed z-20 top-0 left-0 h-[3px] bg-green-300 transition-all"
    ></div>
  );
};

export default ScrollProgressBar;
