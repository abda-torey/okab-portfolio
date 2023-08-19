"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Popup from "./Popup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [shouldStick, setShouldStick] = useState(false);

 
  useEffect(() => {
    function handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      

      // if (window.scrollY > 0) {
      //   nav.classList.add('border-opacity-100','bg-orange-100/90');
      // } else {
      //   nav.classList.remove('border-opacity-100', 'bg-orange-100/90');
      // }
      // Check if user is scrolling up
      if (currentScrollTop < lastScrollTop) {
        setShouldStick(true);
      } else {
        setShouldStick(false);

      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[lastScrollTop]);


  const onSubmit = data => {
    console.log(data);
  };

  return (

    // <nav className="sticky top-0 z-50  flex items-center bg-orange/80 text-dark justify-between flex-wrap p-4 border-b-2 border-gray-200 border-opacity-0 transition-opacity duration-300">

      <nav className={`flex items-center bg-white/90 text-dark justify-between flex-wrap p-6 border-b-2 border-gray-200 border-opacity-0 transition-opacity duration-300 ${shouldStick ? 'sticky top-0 z-50' : ''}`}>

        <div className="flex items-center flex-shrink-0 text-dark mr-6 lg:mr-72">
        
          <Image
            src="/logo.svg"
            width={100}
            height={100}
          />
          {/* <span className="font-mono font-semibold md:text-xl  ml-3">IceCube</span> */}
        </div>

        <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
       className={`w-full block pl-9   lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} lg:justify-end`}
      >
     <div className="font-helvetica font-semibold lg:flex-grow lg:items-center ">
       <Link href="/" className="block  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        Home
       </Link>
       <Link href="/services" scroll={false} className="block  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        Services
       </Link>
      {/* <ScrollLink to="#services" smooth={true} duration={500} href=""  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        Services  
      </ScrollLink> */}
      <ScrollLink to="#portfolio" smooth={true} duration={500} href=""  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        Portfolio
      </ScrollLink>
      <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        About Us
      </Link>
    </div>
    <div>
        <Link href="/contactUs" className="font-semibold inline-flex items-center rounded bg-orange-500 border-0 my-4 py-2 px-4 text-white">

          Talk to Us
      </Link>

        </div>
      </div>
      <Popup isOpen={isModalOpen} setIsOpen={setIsModalOpen} onSubmit={onSubmit} />
  {/* </nav>  */}
 </nav>
  );
};

export default Navbar;
