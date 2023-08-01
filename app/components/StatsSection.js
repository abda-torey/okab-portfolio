"use client";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatCard = ({ end, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-orange-100 rounded-xl shadow-sm overflow-hidden md:max-w-2xl m-4 p-6">
      <div className="text-blue-600 text-5xl mb-2 text-center">
        <CountUp end={end} redraw={true} suffix="+">
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className="text-xl mb-2 text-center">{title}</div>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-start">
      <StatCard
        end={20} 
        title="Satisfied Clients"
        description="We have helped over 20 clients in setting up websites for their business and enhancing their social media presence."
      />
      <StatCard
        end={40}
        title="Finished Projects"
        description="We have worked on over 40+ projects, ranging from web design to app development."
      />
      <StatCard
        end={10}
        title="Years in Business"
        description="We have been in the business for over a decade, providing top-notch services to our clients."
      />
    </div>
  );
}
