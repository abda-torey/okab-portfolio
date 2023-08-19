
import { FaLaptopCode, FaSearch, FaRegLightbulb } from "react-icons/fa";

const Services = () => (
  <div className="p-8 mb-8  bg-gray-100" id = "#services">
    <h1 className=" font-extralight text-center mt-6 mb-6">
      <span className="rounded-2xl text-xs bg-green-100 font-helvetica text-green-500 px-3 py-1 inline-block">What We Do</span>
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Web App Development Card */}
      <div className="rounded overflow-hidden p-6 text-center">
        <FaLaptopCode className="h-12 w-12 mx-auto mb-3 text-indigo-400" />
        <div className="font-bold text-xl mb-2">Web App Development</div>
        <p className="text-gray-700 text-base">
          We develop tailored web apps to help your business grow.
          We utilize React, a cutting-edge technology library that also powers platforms like Facebook. 
        </p>
      </div>

      {/* SEO Optimization Card */}
      <div className="rounded overflow-hidden  p-6 text-center">
        <FaSearch className="h-12 w-12 mx-auto mb-3 text-green-400" />
        <div className="font-bold text-xl mb-2">SEO Optimization</div>
        <p className="text-gray-700 text-base">
          Our SEO services aim to increase your online presence organically.
        </p>
      </div>

      {/* Branding Card */}
      <div className="rounded overflow-hidden p-6 text-center">
        <FaRegLightbulb className="h-12 w-12 mx-auto mb-3 text-yellow-600" />
        <div className="font-bold text-xl mb-2">Branding</div>
        <p className="text-gray-700 text-base">
          We build memorable brands that resonate with your target audience.
        </p>
      </div>
    </div>
  </div>
);

export default Services;