import React from 'react';
import { testimonials } from '../data/testimonialsData'; 
import InfiniteMovingCards from './ui/InfiniteCard';

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-24 pb-20">
      <div className=" text-3xl text-center font-bold">
          Our{" "}
          <span className="text-[#C0993A]">Testimonials</span>
      </div>
      <div className='text-base text-gray-700 text-center mt-3 mb-4 lg:mb-0 max-w-md mx-auto'>
          Apa yang client bicarakan tentang kami.
        </div>
      <div className="flex flex-col items-center">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
