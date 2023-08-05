"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Popup from "./Popup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  useEffect(()=>{
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('nav');
      
      if (window.scrollY > 0) {
        navbar.classList.add('border-opacity-100');
      } else {
        navbar.classList.remove('border-opacity-100');
      }
    });
  })


  const onSubmit = data => {
    console.log(data);
  };

  return (
    <nav className="sticky top-0 z-50  flex items-center bg-white/90 text-dark justify-between flex-wrap p-6 border-b-2 border-gray-200 border-opacity-0 transition-opacity duration-300">
      <div className="flex items-center flex-shrink-0 text-dark mr-6 lg:mr-72">
        {/* a puzzle piece svg from heroIcons*/}
        {/* <svg
          className="w-6 h-6 md:w-10 md:h-10 text-blue-300"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
          ></path>
        </svg> */}
        <Image
          src="/logo.svg"
          width={75}
          height={75}
        />
        <span className="font-mono font-semibold md:text-xl  ml-3">IceCube</span>
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
    <ScrollLink to="#services" smooth={true} duration={500} href=""  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
      Services  
    </ScrollLink>
    <ScrollLink to="#portfolio" smooth={true} duration={500} href=""  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
      Portfolio
    </ScrollLink>
    <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
      About Us
    </Link>
  </div>
  <div>
    <button className="font-semibold inline-flex items-center rounded  bg-amber-500 border-0 my-2 py-2 px-4 text-white"
    onClick={() => setIsModalOpen(true)}
    >
      Talk to Us
    </button>
  </div>
</div>
<Popup isOpen={isModalOpen} setIsOpen={setIsModalOpen} onSubmit={onSubmit} />
    </nav>
  );
};

export default Navbar;
