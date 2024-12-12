import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-[#836FFF] dark:bg-[#211951] text-[#F0F3FF] py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Contact Section */}
        <p className="mb-4 text-lg">
          Connect with me on social media:
        </p>
        <div
          className="flex justify-center space-x-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/themanikandang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#15F5BA] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/themanikandang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#15F5BA] transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/TheManikandanG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#15F5BA] transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          {/* Email */}
          <a
            href="mailto:maniofficial52@gmail.com"
            className="text-2xl hover:text-[#15F5BA] transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Links (Optional) */}
        <div className="mt-6">
          <nav className="text-sm text-[#F0F3FF] flex justify-center space-x-4">
            <a
              href="/about"
              className="hover:text-[#15F5BA] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/skills"
              className="hover:text-[#15F5BA] transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="/projects"
              className="hover:text-[#15F5BA] transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="hover:text-[#15F5BA] transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-[#F0F3FF]">
          &copy; {new Date().getFullYear()} Manikandan G. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
