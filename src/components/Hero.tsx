import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mafu Q. Mbangeni
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="typing-animation">Full Stack Developer, UI/UX Designer & Software Developer</span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build websites and applications that are not only functional but also visually stunning.
            With a passion for clean code and user-centric design, I strive to create remarkable digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#projects">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Get In Touch
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/MafuMQ" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mafu-qhama-mbangeni/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mafumq@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
