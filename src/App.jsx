import { useState } from "react";
import {
  FaGithub,
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaAws,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiExpress, SiMongodb, SiLeetcode } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Modern Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <div className="text-3xl md:text-xl lg:text-3xl font-bold tracking-wider text-gray-800">
              Rathod Umang
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-12">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-lg lg:text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
              <div className="px-4 py-4 space-y-4">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="relative">
            <img
              src="/portfolio.png"
              alt="Rathod Umang"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-serif tracking-wider mb-4">
            Hello, I am
          </div>
          <div className="font-bold text-4xl sm:text-5xl lg:text-5xl tracking-wider mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Rathod Umang
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 tracking-wider mb-8">
            MERN Stack Developer
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8">
            <a
              className="bg-white border-2 border-gray-800 text-gray-800 py-3 px-8 rounded-full text-xl font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              href="https://drive.google.com/file/d/1PoA6RWtw_gUWGRUegyoUYU92vrvFBYxh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
            <a
              href="#Contact"
              className="bg-gray-800 border-2 border-gray-800 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-transparent hover:text-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/UMANG797"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <FaGithub
                size={50}
                className="text-gray-700 hover:text-green-500 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/umang-rathod-a63bab255/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <CiLinkedin
                size={50}
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
              />
            </a>
            <a
              href="https://x.com/umangrathod797"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <FaTwitter
                size={50}
                className="text-gray-700 hover:text-blue-400 transition-colors duration-300"
              />
            </a>
            <a
              href="https://leetcode.com/u/ur797/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <SiLeetcode
                size={50}
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="About" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl text-gray-600 tracking-wider font-sans mb-4">
              Get to Know More about Me
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-wider text-gray-800">
              About Me
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/3">
              <img
                src="/photo1.jpg"
                alt="Umang"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl mx-auto"
              />
            </div>

            <div className="w-full lg:w-2/3 text-lg lg:text-xl text-gray-700 space-y-6">
              <p className="leading-relaxed">
                Hey there! Rathod Umang, 20-year-old B.Tech Computer Engineering
                student based in Rajkot with a relentless passion for technology
                and software development. As an aspiring tech enthusiast, I am
                constantly seeking new challenges and opportunities to broaden
                my knowledge and skills in the ever-evolving tech landscape.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h4 className="font-bold text-xl mb-4 text-gray-800">
                  Education:
                </h4>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold">
                      Bachelor's of Engineering from:
                    </span>
                    <span>V.V.P Engineering College, Rajkot</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold">Result:</span>
                    <span className="text-green-600 font-semibold">
                      8.57 CGPA
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold">Higher Education:</span>
                    <span>Gangotri School, Gondal</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold">Result:</span>
                    <span className="text-green-600 font-semibold">75 PR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        id="Skills"
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold tracking-wider text-gray-700 mb-4">
              Explore My
            </h2>
            <h3 className="text-4xl lg:text-5xl tracking-wider font-sans text-gray-600">
              Tech Skills
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: <FaReact size={120} className="text-blue-400" />,
                name: "React",
              },
              {
                icon: <FaNodeJs size={120} className="text-green-600" />,
                name: "Node.js",
              },
              {
                icon: <SiExpress size={120} className="text-gray-800" />,
                name: "Express.js",
              },
              {
                icon: <SiMongodb size={120} className="text-green-500" />,
                name: "MongoDB",
              },
              {
                icon: (
                  <RiTailwindCssFill size={120} className="text-blue-500" />
                ),
                name: "Tailwind CSS",
              },
              {
                icon: <GrMysql size={120} className="text-blue-600" />,
                name: "MySQL",
              },
              {
                icon: (
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/artificial-intelligence-1-2/128/Bynary-Tree-Hierarchy-Data-Structure-Nodes-512.png"
                    className="w-28 h-28"
                    alt="Data Structures"
                  />
                ),
                name: "Data Structures",
              },
              {
                icon: <FaAws size={120} className="text-orange-500" />,
                name: "AWS (Learning)",
              },
            ].map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="font-semibold text-lg lg:text-xl text-gray-800">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="Projects" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl tracking-wider font-serif text-gray-700 mb-4">
              Check My
            </h2>
            <h3 className="text-5xl lg:text-6xl tracking-widest font-serif text-green-600 underline decoration-wavy">
              Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                title: "Digi-Locker",
                description: "Digital document management system",
                link: "https://github.com/UMANG797/Digi-Locker",
              },
              {
                img: "https://media.hudle.in/photos/49940",
                title: "Box-Cricket",
                description: "Cricket management application",
                link: "https://github.com/UMANG797/Box-Cricket",
              },
              {
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
                title: "Health-AI",
                description: "AI-powered diet recommendation system",
                link: "https://github.com/UMANG797/Health-AI",
              },
              {
                img: "https://tse4.mm.bing.net/th/id/OIP.EKfiBMRiyQwf4nyQ8c_W9AHaHa?pid=Api&P=0&h=180",
                title: "Daily Notes",
                description: "writing a daily notes ",
                link: "https://github.com/UMANG797/note-app",
              },
              {
                img: "https://i.pinimg.com/originals/d0/0b/d5/d00bd5d615a005646c0b98a43e8c152b.jpg",
                title: "JwelKart",
                description: "Online Jwellery Shop",
                link: "https://github.com/UMANG797/jweller_shop",
              },
              {
                img: "https://tse4.mm.bing.net/th/id/OIP.lBGginzbDsWXHCuLocwAUgHaHa?pid=Api&P=0&h=180",
                title: "personal",
                description: "My portfolio",
                link: "https://github.com/UMANG797/portfolio_website",
              },
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={project.img}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-bold text-2xl text-center mb-4 text-gray-800">
                    {project.title}
                  </h4>
                  <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <a href={project.link}>Github</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="Contact"
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl text-gray-600 tracking-wider font-sans mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl lg:text-5xl tracking-widest font-bold text-gray-800">
              Contact Me
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 max-w-4xl w-full">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
                <div className="flex items-center gap-4 group">
                  <CgMail
                    size={40}
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  />
                  <a
                    className="text-lg lg:text-xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    href="mailto:umangrathod797@gmail.com"
                  >
                    umangrathod797@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <CiLinkedin
                    size={40}
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  />
                  <a
                    className="text-lg lg:text-xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    href="https://www.linkedin.com/in/umang-rathod-a63bab255/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <FaPhone
                    size={25}
                    className="text-green-600 group-hover:scale-110 transition-transform duration-300"
                  />
                  <a
                    className="text-lg lg:text-xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    href="https://www.linkedin.com/in/umang-rathod-a63bab255/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 98249 94197
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl lg:text-3xl font-bold tracking-wider mb-4 md:mb-0">
              Rathod Umang
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 lg:gap-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/UMANG797"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/umang-rathod-a63bab255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <CiLinkedin size={24} />
            </a>
            <a
              href="https://x.com/umangrathod797"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://leetcode.com/u/ur797/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <SiLeetcode size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400">
              <p className="text-sm lg:text-base">
                © 2024 Rathod Umang. All rights reserved. Built with React &
                Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
