import { useState, useEffect } from "react";
import { ArrowLeft, Search, Filter, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Project images
const images = {
  cyberQuest: new URL("../media/p_cyberQuest.jpg", import.meta.url).href,
  LP: new URL("../media/p_LP.jpg", import.meta.url).href,
  solarBE: new URL("../media/p_solarBE.jpg", import.meta.url).href,
  foodDonation: new URL("../media/p_foodDonation.jpg", import.meta.url).href,
  roi: new URL("../media/p_roi.jpg", import.meta.url).href,
  opencv2pics: new URL("../media/p_opencv2pics.jpg", import.meta.url).href,
  pythonChatApp: new URL("../media/p_ex1-python-chat-app.jpg", import.meta.url).href,
  jsChatApp: new URL("../media/p_ex1-js-chat-app.jpg", import.meta.url).href,
  tic_tac_toe: new URL("../media/p_tic-tac-toe.png", import.meta.url).href,
  label: new URL("../media/p_label.jpg", import.meta.url).href,
  apparel: new URL("../media/p_apparel.png", import.meta.url).href,
  art: new URL("../media/p_art.jpg", import.meta.url).href
} as const;

const allProjects = [
    {
    id: 1,
    title: "Cyber Quest",
    description: "A team project about educating children about basic cyber security, and how to stay safe online.",
    image: images.cyberQuest,
    tags: ["React", "Node.js", "Firebase"],
    category: "Full Stack",
    year: "2025",
    github: "https://github.com/Cwengii/GK-AH-CwengzStars",
    demo: "https://gk-ah-cwengz-stars.vercel.app/"
  },
  {
    id: 2,
    title: "Profit Optimization Platform",
    description: "A platform for businesses to optimize for profitability, using linear programming to discover the best combination of products to sell to maximize profit, given a set of constraints.",
    image: images.LP,
    tags: ["Flask", "AI", "Linear Programming"],
    category: "AI/ML",
    year: "2025",
    github: "https://github.com/MafuMQ/ex2-LO",
    demo: "https://ex2-lo.vercel.app/"
  },
    {
    id: 3,
    title: "Solar Break-Even Calculator",
    description: "Calculates the break-even point for solar panel installations, helping homeowners and businesses make informed decisions about investing in solar energy.",
    image: images.solarBE,
    tags: ["Flask", "Numpy"],
    category: "Full Stack",
    year: "2025",
    github: "https://github.com/MafuMQ/solar-break-even",
    demo: "https://solar-break-even.vercel.app/"
  },
    {
    id: 4,
    title: "Food Donation Platform",
    description: "A platform for businesses to donate excess food to local charities, helping to reduce food waste and support those in need.",
    image: images.foodDonation,
    tags: ["Flask", "AI", "Linear Programming"],
    category: "AI/ML",
    year: "2024",
    github: "https://github.com/MafuMQ/parcel-donation",
    demo: "https://mafuqhama.pythonanywhere.com/"
  },
  {
    id: 5,
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
    id: 6,
    title: "Facial Recognition",
    description: "A web application that uses facial recognition technology to compare 2 images and determine if they are of the same person, leveraging advanced machine learning algorithms.",
    image: images.opencv2pics,
    tags: ["OpenCV", "Python"],
    category: "AI/ML",
    year: "2023",
    github: "https://github.com/MafuMQ/Facial-Recognition",
    demo: "https://github.com/MafuMQ/Facial-Recognition"
  },
  {
    id: 7,
    title: "React Chat App with Authentication",
    description: "A full stack chat application built with React, Node.js, Next.js, and Firebase, featuring user authentication, real-time messaging, and a modern UI.",
    image: images.jsChatApp,
    tags: ["React", "Node.js", "Next.js", "Firebase"],
    category: "Full Stack",
    year: "2025",
    github: "https://github.com/MafuMQ/ex1-JSChatApp",
    demo: "https://ex1-js-chat-app.vercel.app/"
  },
  {
    id: 8,
    title: "Facial Detection",
    description: "A web application that detects faces in images using OpenCV and Python, providing real-time facial detection and recognition capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    tags: ["Python", "OpenCV", "AI"],
    category: "AI/ML",
    year: "2023",
    github: "https://github.com/MafuMQ/Facial-Detection",
    demo: "https://facial-detection-ecru.vercel.app/"
  },
  {
    id: 9,
    title: "Group Chat App",
    description: "A group chat app that uses restful APIs to allow users to create chat rooms, send messages, and manage user accounts, built with Python.",
    image: images.pythonChatApp,
    tags: ["Python", "Flask", "RESTful API"],
    category: "Full Stack",
    year: "2023",
    github: "https://github.com/MafuMQ/ex1-PythonChatApp",
    demo: "https://ex1-python-chat-app.vercel.app/"
  },
  {
    id: 10,
    title: "Tic-Tac-Toe",
    description: "A classic tic-tac-toe game built with HTML, CSS, and JavaScript, featuring a clean UI and responsive design. Play with a friend.",
    image: images.tic_tac_toe,
    tags: ["Javascript", "HTML", "CSS"],
    category: "Full Stack",
    year: "2023",
    github: "https://github.com/MafuMQ/Tic-Tac-Toe",
    demo: "https://tic-tac-toe-sigma-orcin-21.vercel.app/"
  },
  {
    id: 11,
    title: "Label Creation & Visualizations",
    description: "Created Logo and it's visualization as a label for various products.",
    image: images.label,
    tags: [],
    category: "Graphic Design",
    year: "2023",
    github: "",
    demo: "https://mafumbangeni.blogspot.com/2024/07/label-visualizations.html"
  },
  {
    id: 12,
    title: "Apparel Visualizations",
    description: "Visualizations based on logo for apparel products, showcasing the logo in various styles and contexts.",
    image: images.apparel,
    tags: [],
    category: "Graphic Design",
    year: "2023",
    github: "",
    demo: "https://mafumbangeni.blogspot.com/2024/07/apparel-visualizations-based-on-logo.html"
  },
  {
    id: 13,
    title: "Graphical Art",
    description: "A collection of graphical art pieces created using various design tools, showcasing creativity and design skills.",
    image: images.art,
    tags: [],
    category: "Graphic Design",
    year: "2023",
    github: "",
    demo: "https://yonkerface.wixsite.com/main"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI/ML"];
const PROJECTS_PER_PAGE = 6;

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Explore my complete portfolio of web applications, mobile apps, and innovative solutions.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {currentProjects.length} of {filteredProjects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="bg-white text-black hover:bg-gray-300">
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-purple-600 font-medium">{project.category}</span>
                  </div>
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
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProjects;
