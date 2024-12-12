import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myPic from "../assets/my_pic.png";
import css from "../assets/css.jpg";
import hrcss from "../assets/hrcss.png";
import html from "../assets/html.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react.jpg";

const Card = ({ imageSrc, title, description, additionalText }) => (
  <div
    className="bg-[#eef1ff] dark:bg-[#211951] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl"
    data-aos="zoom-in"
    data-aos-duration="1000">
    {imageSrc && (
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-58 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
      />
    )}
    <div className="p-6">
      <h4 className="text-xl font-semibold text-[#836FFF] dark:text-[#836FFF]">
        {title}
      </h4>
      <p className="text-[#211951] dark:text-[#F0F3FF]">{description}</p>
      {additionalText && (
        <p className="text-[#211951] dark:text-[#F0F3FF]">{additionalText}</p>
      )}
    </div>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="bg-[#F0F3FF] dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto text-center md:text-left">
        {/* Section Heading */}
        <h2
          className="text-4xl text-center font-extrabold text-[#836FFF] dark:text-[#15F5BA] mb-6"
          data-aos="fade-down"
          data-aos-duration="1000">
          About Me
        </h2>

        {/* About Me and Profile Picture Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center md:space-x-10"
          data-aos="fade-up"
          data-aos-duration="1000">
          <div className="w-40 flex-[0.6] h-40 sm:w-64 sm:h-64 md:w-72 md:h-full mb-8 md:mb-0">
            <img
              src={myPic}
              alt="Manikandan"
              className="w-full h-full rounded-full object-cover shadow-lg dark:shadow-gray-700 border-4 border-indigo-500 transform hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* About Content */}
          <div className="flex-1 text-lg leading-relaxed space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Hi, I'm{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  Manikandan
                </span>
                , a passionate full-stack web developer specializing in the{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  MERN stack
                </span>
                (MongoDB, Express, React, Node.js). I love building dynamic,
                user-friendly web applications and turning complex ideas into
                scalable solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                With expertise in both front-end and back-end development, I
                design responsive, interactive websites and apps that perform
                seamlessly across devices and browsers. I’m always eager to
                learn and tackle new challenges in this ever-evolving field.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                My Skills:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                    Frontend
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    React, Redux, HTML5, CSS3, JavaScript, Bootstrap, Tailwind
                    CSS
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                    Backend
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Node.js, Express.js, RESTful APIs
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                    Database
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    MongoDB, SQL (MySQL)
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                    Version Control
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Git, GitHub
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                    Deployment
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Netlify, Render
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12 mt-10">
          <h3
            className="text-4xl text-center font-semibold text-[#836FFF] dark:text-[#15F5BA] mb-4"
            data-aos="fade-up"
            data-aos-duration="1000">
            Education
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2"
            data-aos="fade-left"
            data-aos-duration="1000">
            <Card
              title="Master's in Computer Applications"
              description="H.H. The Rajah's College, Bharathidasan University"
              additionalText="CGPA: 8.73 (2024)"
            />
            <Card
              title="Bachelor's in Computer Science"
              description="H.H. The Rajah's College, Bharathidasan University"
              additionalText="CGPA: 8.76 (2021)"
            />
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-12 mt-10">
          <h3
            className="text-4xl text-center font-semibold text-[#836FFF] dark:text-[#15F5BA] mb-4"
            data-aos="fade-up"
            data-aos-duration="1000">
            Certifications
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-7 p-2"
            data-aos="fade-right"
            data-aos-duration="1000">
            <Card
              imageSrc={html}
              title="Front End Development HTML"
              description="Great Learning Academy"
              additionalText="Completed: August 2024"
            />
            <Card
              imageSrc={css}
              title="Front End Development CSS"
              description="Great Learning Academy"
              additionalText="Completed: August 2024"
            />
            <Card
              imageSrc={js}
              title="Front End Development JavaScript"
              description="Great Learning Academy"
              additionalText="Completed: September 2024"
            />
            <Card
              imageSrc={react}
              title="Front End Development React"
              description="Great Learning Academy"
              additionalText="Completed: November 2024"
            />
            <Card
              imageSrc={hrcss}
              title="CSS (Basic) Certification"
              description="HackerRank"
              additionalText="Completed: November 2024"
            />
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12 mt-10">
          <h3
            className="text-4xl text-center font-semibold text-[#836FFF] dark:text-[#15F5BA] mb-4"
            data-aos="fade-up"
            data-aos-duration="1000">
            Achievements
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2"
            data-aos="fade-left"
            data-aos-duration="1000">
            <Card
              title="2nd Prize in Web Design Competition"
              description="Awarded for exceptional design and creativity in a competitive web design contest."
            />
            <Card
              title="15th Rank in Bharathidasan University Exam"
              description="Ranked 15th in the Bharathidasan University exam as a top achiever in my batch."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
