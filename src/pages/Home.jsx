import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myPic from "../assets/my_pic.png";
import { useNavigate } from "react-router-dom";
import resume from "../assets/resume.pdf";

const Home = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const navigate = useNavigate();

  const titles = ["MERN Stack Developer","Frontend Developer", "Web Developer", "Software Developer"];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });

    const titleChangeInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);

    return () => clearInterval(titleChangeInterval);
  }, [0]);

  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center bg-[#F0F3FF] dark:bg-gray-900 dark:text-[#F0F3FF] text-center md:text-left px-6 py-12">
      {/* Left side - Professional Info */}
      <div className="md:w-1/2 md:pl-10 text-center md:text-left text-[#211951] dark:text-[#F0F3FF] mb-10 md:mb-0">
        <h1
          className="text-4xl sm:text-4xl font-extrabold mb-4"
          data-aos="fade-up">
          Hello, I'm{" "}
          <span className="text-[#211951] dark:text-[#F0F3FF]">
            MANIKANDAN G
          </span>
        </h1>
        <h2
          className="text-3xl sm:text-4xl font-semibold text-[#15F5BA] mb-6 typing-effect"
          data-aos="fade-up"
          data-aos-delay="200">
          {titles[currentTitleIndex]}
        </h2>
        <p
          className="text-lg sm:text-xl text-[#211951] dark:text-[#F0F3FF] mb-8"
          data-aos="fade-up"
          data-aos-delay="400">
          A MERN stack developer with expertise in frontend and backend
          technologies, holding a Master's degree in Computer Application. I
          love building interactive and responsive web applications.{" "}
        </p>

        {/* Hire Me Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            data-aos="fade-left"
            data-aos-delay="200"
            className="bg-[#836FFF] hover:bg-[#7564e2] md:w-fit text-white py-2 px-6 w-[50%] rounded-lg shadow-lg transition duration-300">
            Hire Me!
          </button>

          <div data-aos="fade-right" data-aos-delay="200">
            <a
              href={resume}
              download="Manikandan_Resume.pdf"
              aria-label="Download Manikandan's Resume"
              className="inline-block bg-[#15F5BA] hover:bg-[#13cfa3] text-[#211951] font-medium py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Profile Picture */}
      <div
        className="md:w-1/2 mt-4 md:mt-0 flex justify-center"
        data-aos="fade-left"
        data-aos-delay="200">
        <img
          src={myPic}
          alt="Manikandan"
          className="w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg dark:shadow-gray-700 border-4 border-[#836FFF] transform hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Home;
