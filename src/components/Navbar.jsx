import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["Home", "Catalog", "Testimonials", "Pricing", "FAQ"];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
      setIsMobileMenuOpen(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    setHasBackground(currentScrollY > 0);
  }, [currentScrollY]);

  return (
    <div
      ref={navContainerRef}
      className={`navbar ${
        hasBackground ? "scrolled shadow-sm" : "default"
      }`}
    >
      <header className="w-[90%] lg:w-[85%] 2xl:w-[70%] mx-auto h-full flex items-center justify-between">
        <img src="/images/logo.png" alt="logo" className="w-40 sm:w-52" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="nav-hover-btn"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-gray-50 flex flex-col transition-transform duration-500 shadow-sm ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" w-[90%] lg:w-[85%] 2xl:w-[70%] mx-auto flex items-center justify-between border-b h-20 ">
          <img src="/images/logo.png" alt="logo" className="w-40 sm:w-52" />
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FiX size={24} className="hover:text-[#C0993A]" />
          </button>
        </div>
        <nav className="flex flex-col items-center p-4 gap-6 my-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="nav-hover-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
