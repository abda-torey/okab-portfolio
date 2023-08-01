// components/ProjectCard.js
export default function ProjectCard({ title, image }) {
    return (
      <div className="relative border-0  flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
          <h2 className=" text-white font-semibold text-2xl">{title}</h2>
        </div>
      </div>
    );
  }
  