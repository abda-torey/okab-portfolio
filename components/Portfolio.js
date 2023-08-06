import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div className="p-4 h-100vh bg-gray-100 mt-10" id="#portfolio">
      <div className="flex flex-col items-center">
        <span className="text-orange-500 underline relative pb-2 font-bold text-xl">
          <span className="absolute left-[-32px] top-[-10px] font-bold text-3xl">...</span>
          Portfolio
          <span className="absolute right-[-32px] top-[-10px] font-bold text-3xl">...</span>
        </span>
        <h1 className="text-3xl font-bold text-center mt-4 mb-3">  
          Discover Our Latest Projects
        </h1>
      </div>

      <section className="container mx-auto p-6 grid gap-8 grid-cols-1 md:grid-cols-3">
        <ProjectCard title="PlugPoint Electronics" image="/multiple.jpg" />
        <ProjectCard title="Okash Portfolio" image="/ipad.png" />
        <ProjectCard title="Trentz Ecommerce" image="iphone.jpg" />
      </section>
    </div>
  );
};
export default Portfolio;
