import Image from "next/image";
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 overflow-hidden">
          {/* <Image 
          src="/hero.png" 
          alt="" 
          fill style={{ objectFit: "cover" }} /> */}
          <Image
            src="/hero.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            
          />
        </div>
        <div
          className="absolute inset-0 bg-white opacity-80"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
      <div className="relative flex justify-end pt-12 md:mr-10  pb-16 sm:pt-16 sm:pb-24 lg:pb-32">
        <div className={` ${styles.heroText} max-w-md  pr-2 sm:max-w-3xl pl-6 md:mt-10 lg:px-8 lg:max-w-7xl`}>
          <h2 className="text-xl font-semibold tracking-tight md:mt-10  lg:text-4xl text-white ">
            We do web designs for businesses
          </h2>
          <p className="mt-4 text-xl text-gray-200">We help them grow</p>
          <div className="mt-10">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
