import React from 'react'

const Catalog = () => {
  return (
    <section id='catalog' className='relative h-full w-screen py-24 bg-white'>
      <div className="container mx-auto w-[90%] lg:w-[85%] 2xl:w-[70%] z-20 relative">
        <div className='text-center text-3xl font-semibold'>
          Katalog 
          <span className="font-bold"> Undang</span>
          <span className="text-[#C0993A] font-bold">in</span>
        </div>
        <div className='text-base text-gray-700 text-center mt-3 max-w-md mx-auto'>
          Beberapa jenis tema Undanganku
        </div>
      </div>
    </section>
  )
}

export default Catalog