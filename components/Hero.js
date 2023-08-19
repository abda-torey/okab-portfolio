import Image from "next/legacy/image";
import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] lg:h-[90vh]">
      {" "}
      {/* Adjusted height */}
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/light2.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
        />
      </div>
      <div className="absolute inset-0 bg-gray-200 opacity-25"></div>{" "}
      {/* Optional overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p className="mb-8  font-extrabold text-2xl text-center text-gray-800 dark:text-gray-400 md:text-2xl lg:text-3xl xl:text-5xl">
          {/* Adjusted text size for the first paragraph */}
          Empowering businesses.
        </p>
        <p className="mb-8  font-semibold text-xl  text-center text-rose-700 dark:text-gray-400 md:text-2xl lg:text-3xl xl:text-4xl">
          {/* Adjusted text size for the first paragraph */}
         Through tailored web design solutions.
        </p>
        <p className="mb-8 font-medium  text-blue-900 dark:text-gray-400 md:text-lg lg:text-lg xl:text-lg">
          {/* Adjusted text size for the second paragraph */}
          We set them for unprecedented growth.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          {/* Adjusted button color */}
          Talk to Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
