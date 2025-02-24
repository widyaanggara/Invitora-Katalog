import React from "react";

const benefitsData = [
  {
    id: 1,
    title: "Desain Eksklusif",
    description: "Beragam pilihan desain yang elegan dan modern sesuai kebutuhan Anda.",
    image: "/images/benefit1.png", // Ganti dengan path gambar
  },
  {
    id: 2,
    title: "Mudah Dibagikan",
    description: "Undangan digital bisa langsung dikirim via WhatsApp, email, atau media sosial lainnya.",
    image: "/images/benefit2.png", // Ganti dengan path gambar
  },
  {
    id: 3,
    title: "Harga Terjangkau",
    description: "Nikmati harga terbaik dengan fitur lengkap dan kemudahan akses.",
    image: "/images/benefit3.png", // Ganti dengan path gambar
  },
  {
    id: 4,
    title: "Fitur Interaktif",
    description: "Tambahkan galeri foto, peta lokasi, countdown, dan fitur menarik lainnya.",
    image: "/images/benefit4.png", // Ganti dengan path gambar
  },
];

const Benefits = () => {
  return (
    <section id="about" className="h-full w-screen py-32 bg-white">
      <div className="container mx-auto w-[90%] lg:w-[85%] 2xl:w-[70%]">
        {/* Judul */}
        <div className="font-bold text-3xl text-center mb-10 lg:mb-24">
          Mengapa Harus Undang
          <span className="text-[#C0993A]">in</span>?
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:gap-8">
          {benefitsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg p-8 gap-4 items-start sm:items-center hover:shadow-md transition duration-300 hover:scale-[1.02]"
            >
              {/* Gambar di kiri */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md select-none"
                draggable="false"
              />
              {/* Teks di kanan */}
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
