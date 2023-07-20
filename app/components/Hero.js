import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
          src="/hero.png" 
          alt="" 
          fill style={{ objectFit: "cover" }} />
          {/* <Image
            src="/path-to-your-hero-image.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          /> */}
        </div>
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
      <div className="relative flex pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pb-32">
        <div className="max-w-md justify-center mx-auto pl-4 pr-2 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-5xl lg:text-4xl text-white">
            We do web designs for businesses
          </h2>
          <p className="mt-4 text-xl text-gray-300">We help them grow</p>
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
