import profileImage from "../media/profile.jpg";
import { Download, Coffee, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Coffee, label: "Projects Completed", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "10+" },
  { icon: Heart, label: "Years Experience", value: "5+" },
];

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Mafu Mbangeni"
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a full stack web developer and software engineer with a passion for creating
              beautiful and functional web applications with over 5 years of experience.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, creating new open-source 
              projects, or sharing my knowledge through mentoring. I believe in the power of 
              technology to solve real-world problems and improve people's lives.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <stat.icon className="mx-auto mb-2 text-purple-600" size={24} />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
