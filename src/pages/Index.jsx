import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "https://images.unsplash.com/photo-1667709525632-ca0ce065951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzE0NjIxNTg3fDA&ixlib=rb-4.0.3&q=80&w=1080",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      image: "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMiUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzE0NjIxNTg4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      githubLink: "https://github.com/yourusername/project2",
    },
    // Add more projects as needed
  ];

  const workExperience = [
    {
      company: "Company 1",
      position: "Position",
      duration: "Jan 2020 - Present",
      description: "A brief description of your role and responsibilities",
    },
    {
      company: "Company 2",
      position: "Position",
      duration: "Jun 2018 - Dec 2019",
      description: "A brief description of your role and responsibilities",
    },
    // Add more work experience as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-gray-800">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-gray-800">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <section id="about" className="py-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">A brief introduction about yourself goes here.</p>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="border-l-2 border-gray-200 ml-4">
            {workExperience.map((experience, index) => (
              <div key={index} className="mb-8 pl-8 relative">
                <div className="absolute top-0 left-0 -ml-4 w-4 h-4 bg-gray-200 rounded-full"></div>
                <h3 className="text-xl font-bold mb-1">{experience.company}</h3>
                <p className="text-gray-600 mb-1">{experience.position}</p>
                <p className="text-gray-500 text-sm mb-2">{experience.duration}</p>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaLinkedin size={32} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
