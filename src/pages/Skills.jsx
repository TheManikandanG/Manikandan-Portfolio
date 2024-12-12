import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={50} />, color: "bg-orange-600" },
  { name: "CSS3", icon: <FaCss3Alt size={50} />, color: "bg-blue-600" },
  { name: "Tailwind CSS", icon: <FaCss3Alt size={50} />, color: "bg-teal-500" },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={50} />,
    color: "bg-yellow-500",
  },
  { name: "React", icon: <FaReact size={50} />, color: "bg-blue-500" },
  { name: "Node.js", icon: <FaNodeJs size={50} />, color: "bg-green-600" },
  { name: "Express.js", icon: <FaServer size={50} />, color: "bg-gray-800" },
  { name: "MongoDB", icon: <FaDatabase size={50} />, color: "bg-green-700" },
  { name: "Git", icon: <FaGitAlt size={50} />, color: "bg-orange-500" },
  { name: "GitHub", icon: <FaGithub size={50} />, color: "bg-violet-600" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
      <section
        id="skills"
        className="py-16 bg-indigo-50 dark:bg-gray-900 text-center">
        <h2
          className="text-3xl font-bold text-[#836FFF] dark:text-[#15F5BA]"
          data-aos="fade-up">
          Skills
        </h2>
        <p
          className="text-lg mt-4 text-[#211951] dark:text-gray-300 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200">
          These are the technologies I’m proficient in. I’m always learning and
          improving my skills.
        </p>
        <div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg ${skill.color} text-white dark:shadow-none transition-transform duration-500 ease-in-out transform hover:scale-110 hover:bg-opacity-90 hover:shadow-2xl`}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}>
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Skills;
