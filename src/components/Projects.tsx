import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const images = {
  LP: new URL("../media/p_LP.jpg", import.meta.url).href,
  roi: new URL("../media/p_roi.jpg", import.meta.url).href,
  opencv2pics: new URL("../media/p_opencv2pics.jpg", import.meta.url).href,
}

const projects = [
  {
    id: 1,
    title: "Profit Optimization Platform",
    description: "A platform for businesses to optimize for profitability, using linear programming to discover the best combination of products to sell to maximize profit, given a set of constraints.",
    image: images.LP,
    tags: ["Flask", "AI", "Linear Programming"],
    category: "AI/ML",
    year: "2024",
    github: "https://github.com/MafuMQ/ex2-LO",
    demo: "https://ex2-lo.vercel.app/"
  },
  {
    id: 2,
    title: "Return on Investment/Break-Even Calculator",
    description: "A web application that calculates the break-even point for various business scenarios, helping entrepreneurs make informed financial decisions.",
    image: images.roi,
    tags: ["Flask", "Numpy"],
    category: "Full Stack",
    year: "2024",
    github: "https://github.com/MafuMQ/breakeven-py-web",
    demo: "https://breakeven-py-web.vercel.app/"
  },
  {
    id: 3,
    title: "Facial Recognition",
    description: "A web application that uses facial recognition technology to compare 2 images and determine if they are of the same person, leveraging advanced machine learning algorithms.",
    image: images.opencv2pics,
    tags: ["OpenCV", "Python"],
    category: "AI/ML",
    year: "2023",
    github: "https://github.com/MafuMQ/Facial-Recognition",
    demo: "https://github.com/MafuMQ/Facial-Recognition"
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="bg-white text-black hover:bg-gray-100">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
