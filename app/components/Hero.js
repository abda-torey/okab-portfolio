import Image from "next/legacy/image";
import styles from './hero.module.css'
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen grid md:grid-cols-2 mt-20 space-x-20 sm:grid-cols-1 px-10 transition-all duration-75 ">
    
        <div className={` ${styles.heroText} flex flex-col justify-start mt-1 ml-6 order-2`}>
          <h2 className="text-xl font-semibold tracking-tight md:mt-10  lg:text-4xl text-gray-900 mb-3 ">
            We do web designs for businesses
          </h2>
          <p className="text-xl mb-4">We help them grow</p>
         
          <div>
            <Link
                href="#"
                className=" inline-flex items-center justify-center px-5 py-3  text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
              >
                <button className="border border-transparent"> Talk to us </button> 
              </Link>
          </div>
        </div>
    
      <div className="overflow-hidden order order-1">
          <Image
            src="/hero4.svg"
            alt="Hero Image"
            width={700}
            height={500}
            className="filter bg-gray-50"
          />
        </div>
    </div>
  );
};

export default Hero;
