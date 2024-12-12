import React, { useEffect } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

const contactDetails = [
  {
    icon: <FaEnvelope size={30} />,
    label: "Email",
    value: "maniofficial52@gmail.com",
    link: "mailto:maniofficial52@gmail.com",
  },
  {
    icon: <FaPhone size={30} />,
    label: "Phone",
    value: "+91 9342759772",
    link: "tel:+919342759772",
  },
  {
    icon: <FaGithub size={30} />,
    label: "GitHub",
    value: "github.com/themanikandang",
    link: "https://github.com/themanikandang",
  },
  {
    icon: <FaLinkedin size={30} />,
    label: "LinkedIn",
    value: "linkedin.com/themanikandang",
    link: "https://linkedin.com/in/themanikandang",
  },
];

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2
          className="text-3xl font-bold text-[#836FFF] dark:text-[#15F5BA] mb-8"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <p
          className="text-lg text-[#211951] dark:text-[#F0F3FF] mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Feel free to reach out to me through any of the platforms below. I’d
          love to connect with you!
        </p>
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {contactDetails.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-500 ease-in-out flex flex-col items-center bg-white dark:bg-[#211951] shadow-lg rounded-lg p-6 text-indigo-700 dark:text-white"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div className="mb-4">{contact.icon}</div>
              <h4 className="text-lg font-semibold">{contact.label}</h4>
              <p className="text-sm break-words">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
