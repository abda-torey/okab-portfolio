import React from "react";
import { FaLaptopCode, FaSearch, FaRegLightbulb } from "react-icons/fa";

function ServicesPage() {
  return (
    <section className="flex items-center bg-gray-100 h-screen ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto md:px-6 mb-8">
        <h2 className="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-400">
          Our Features
        </h2>
        <div className="w-20 mx-auto mb-8 border-b border-red-700 dark:border-gray-400"></div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-2 mb-6 md:w-1/2 lg:w-1/3">
            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50 dark:bg-gray-900">
              <div className="inline-flex items-center justify-center">
                <FaLaptopCode className="h-12 w-12 mx-auto mb-3 text-indigo-400" />
              </div>
              <h2 className="font-bold text-xl mb-2">Web App Development</h2>
              <p className="text-gray-700 text-base">
                We craft bespoke web applications to elevate your business using
                advanced technology like React, also behind platforms such as
                Facebook. Our team excels in React and the Next.js framework,
                ensuring top-tier customization. Opt for our services for a
                tailored, high-performance web solution.
              </p>
            </div>
          </div>

          <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50 dark:bg-gray-900">
              <div className="inline-flex items-center justify-center">
                <FaSearch className="h-12 w-12 mx-auto mb-3 text-green-400" />
              </div>
              <h2 className="font-bold text-xl mb-2">SEO Optimization</h2>
              <p className="text-gray-700 text-base">
                Through our specialized SEO strategies, we endeavor to enhance
                your digital footprint in a natural way. By avoiding paid
                shortcuts, we focus on sustainable methods to amplify your
                visibility online, ensuring your brand receives genuine
                engagement and trust from users.
              </p>
            </div>
          </div>

          <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
            <div className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50 dark:bg-gray-900">
              <div className="inline-flex items-center justify-center">
                <FaRegLightbulb className="h-12 w-12 mx-auto mb-3 text-yellow-600" />
              </div>
              <h2 className="font-bold text-xl mb-2">Branding</h2>
              <p className="text-gray-700 text-base">
                At our company, we pride ourselves on crafting brands that leave
                a lasting impression. By understanding the core values and
                aspirations of your business, we create brand identities that
                truly resonate with your desired audience, ensuring that your
                brand not only stands out but also aligns perfectly with their
                expectations and interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
