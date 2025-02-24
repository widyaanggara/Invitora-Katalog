import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen w-screen flex justify-center items-center bg-[url('/images/homebg.webp')] bg-cover bg-center"
    >
      {/* Grid Kotak-Kotak Border dengan Efek Memudar */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(182, 141, 64, 0.2) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(182, 141, 64, 0.2) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
          opacity: 0.8, 
        }}
      ></div>

      {/* Konten Hero */}
      <div className="relative max-w-[89vw] md:max-w-3xl xl:max-w-[60vw] flex flex-col items-center justify-center text-black h-full pt-10 sm:pt-0">
        <p className="text-sm text-center lg:text-lg">
          Undangan Masa Kini, Tanpa Cetak
        </p>
        <div className="font-bold text-center text-[28px] md:text-[50px] lg:text-[56px] my-2">
          Rayakan Momenmu <br className="hidden md:block" /> dengan{" "}
          <span className="text-[#C0993A]">Undangan Digital</span>
        </div>
        <div className="text-center mb-8 text-sm md:text-lg lg:text-xl">
          Pilih, sesuaikan, dan bagikan undangan digital dalam hitungan menit.
        </div>
        <Button id="order-sekarang" title="Order Sekarang" />
      </div>
    </section>
  );
};

export default Hero;
