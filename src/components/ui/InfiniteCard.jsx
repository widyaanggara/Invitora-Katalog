import React, { useEffect, useRef, useState } from 'react';
import { cn } from './utils'; 
const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true, 
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplikasi item untuk efek infinite scroll
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
    }
  };

  const getSpeed = () => {
    let duration;
    if (speed === 'fast') {
      duration = '20s';
    } else if (speed === 'normal') {
      duration = '40s';
    } else {
      duration = '80s';
    }
    if (containerRef.current) {
      containerRef.current.style.setProperty('--animation-duration', duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap',
          start && 'animate-scroll', 
          pauseOnHover && 'hover-pause' 
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 p-5 md:px-14 md:py-12 md:w-[50vw] bg-white shadow-md"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-black font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3 ">
                  <img src={item.images} alt="profile" className='w-16 rounded-full'/>
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-semibold leading-[1.6] text-black">
                    {item.name}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
