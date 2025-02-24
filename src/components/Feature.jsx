import { RiContactsBook3Fill } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoTime } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    icon :  <RiContactsBook3Fill />,
    title: "Nama Tamu",
    description: "Kustomisasi nama tamu undangan sesuai keinginan, tanpa batasan jumlah.",
  },
  {
    id: 2,
    icon :  <RiContactsBook2Fill />,
    title: "Buku Tamu",
    description: "Tamu dapat langsung mengonfirmasi kehadiran melalui undangan digital.",
  },
  {
    id: 3,
    icon :  <IoTime />,
    title: "Countdown Timer",
    description: "Menampilkan hitung mundur otomatis menuju hari acara untuk mengingatkan tamu.",
  },
  {
    id: 4,
    icon :  <FaMapMarkedAlt />,
    title: "Google Maps",
    description: "Memudahkan tamu menemukan lokasi acara dengan navigasi Google Maps.",
  },
  {
    id: 5,
    icon :  <FaMusic />,
    title: "Background Music",
    description: "Menambahkan musik latar yang sesuai dengan tema acara untuk pengalaman lebih berkesan.",
  },
  {
    id: 6,
    icon :  <FaCamera />,
    title: "Video & Gallery",
    description: "Undangan bisa menampilkan video atau galeri foto untuk berbagi momen spesial.",
  },
  {
    id: 7,
    icon :  <FaCommentDots />,
    title: "Ucapan Digital",
    description: "Tamu bisa menuliskan ucapan dan doa langsung di undangan secara online.",
  },
  {
    id: 8,
    icon :  <FaLink />,
    title: "Custom Domain",
    description: "Link domain website custom sesuai keinginan agar mudah dibagikan.",
  },
]

const Feature = () => {
  return (
    <section id='features' className='h-full py-24 w-screen bg-gray-100 relative'>
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <img src="/images/ornament.png" alt="ornament" className=" sm:w-1/2 lg:w-1/3 h-auto select-none" draggable="false"/>
      </div>

      <div className="container mx-auto w-[90%] lg:w-[85%] 2xl:w-[70%] z-20 relative">
        <div className='text-center text-3xl font-bold'>
          Fitur Unggulan
        </div>
        <div className='text-base text-gray-700 text-center mt-3 max-w-md mx-auto'>
          Kami menghadirkan fitur unggulan agar undangan online-mu lebih berkesan dan mudah dibagikan.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8 mt-10 lg:mt-16">
          {featuresData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-white border rounded-md p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <div className="text-white bg-gradient-to-br from-[#dbb659] to-[#C0993A] rounded-full p-4 text-lg mb-2">
                {item.icon}
              </div>

              <div className="font-semibold text-base text-black text-center mb-1">
                {item.title}
              </div>

              <div className="text-sm text-center text-gray-700">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature