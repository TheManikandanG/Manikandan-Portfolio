import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import crud from "../assets/crud.png";
import currencyconverter from "../assets/currencyconverter.png";
import ecom from "../assets/e-com.png";
import TODO from "../assets/TODO.png";
import weather from "../assets/weather.png";
import spotify from "../assets/spotify.png";
import bookstore from "../assets/book-store.png";
import recipefinderapp from "../assets/recipefinderapp.png";

const projects = [
  {
    name: "Book Store",
    description:
      "A full-stack MERN project for managing books with CRUD operations, and responsive design.",
    link: "https://gmani-bookstore.netlify.app/",
    img: bookstore,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "E-Commerce Project",
    description: "A responsive e-commerce platform built with MERN stack.",
    link: "https://gmani-clothify.netlify.app/",
    img: ecom,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Recipe Finder App",
    description: "A React-based app to search and filter recipes using an API.",
    link: "https://gmani-recipefinderapp.netlify.app/",
    img: recipefinderapp,
    technologies: ["React", "Tailwind CSS", "API"],
  },
  {
    name: "Spotify Clone",
    description:
      "A frontend replica of Spotify with responsive design, playlists, and music player UI using React and Tailwind CSS.",
    link: "https://gmani-spotifyapp.netlify.app/",
    img: spotify,
    technologies: ["React", "Tailwind CSS"],
  },
  {
    name: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    link: "https://gmani-weatherapp.netlify.app/",
    img: weather,
    technologies: ["JavaScript", "API", "CSS"],
  },
  {
    name: "To-Do List App",
    description:
      "A simple and interactive to-do list application with CRUD functionalities.",
    link: "https://gmani-todolistapp.netlify.app/",
    img: TODO,
    technologies: ["HTML", "JavaScript", "CSS"],
  },
  {
    name: "CRUD App",
    description:
      "A React-based CRUD app to manage tasks with a dynamic user interface.",
    link: "https://gmani-crudapp.netlify.app/",
    img: crud,
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    name: "Currency Converter App",
    description:
      "A currency converter app built with React, featuring real-time exchange rates.",
    link: "https://gmani-currencyconverter.netlify.app/",
    img: currencyconverter,
    technologies: ["JavaScript", "HTML", "API", "CSS"],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="projects" className="py-16 bg-indigo-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-[#836FFF] dark:text-[#15F5BA]">
          Projects
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg mt-4 text-[#211951] dark:text-[#F0F3FF]">
          Here are some of my featured projects. Click on a card to explore
          more!
        </p>

        <div
          className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer bg-white dark:bg-[#211951] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-40 object-cover"
              />
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-indigo-700 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Technologies Used:
                  </h4>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="text-sm bg-indigo-200 dark:bg-indigo-700 text-indigo-900 dark:text-white px-2 py-1 rounded-md">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-700 dark:bg-[#15F5BA] hover:dark:bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold px-4 py-2 rounded-md border border-white hover:bg-white hover:text-indigo-700 dark:hover:text-gray-900 transition-all duration-300">
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
