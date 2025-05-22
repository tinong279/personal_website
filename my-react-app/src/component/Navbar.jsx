// src/components/Navbar.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* 左側 LOGO 與文字 */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">
          Charonyu's <br />
          <span className="text-sm font-normal">Portfolio</span>
        </h1>
      </div>

      {/* 中間導覽列 */}
      <div className="hidden md:flex space-x-10 text-gray-700 text-lg">
        <a href="#about" className="hover:text-blue-500">
          About Me
        </a>
        <a href="#projects" className="hover:text-blue-500">
          Projects
        </a>
        <a href="#blog" className="hover:text-blue-500">
          Blog
        </a>
      </div>

      {/* 右側社群圖示 */}
      <div className="flex space-x-5 text-xl text-gray-600">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:someone@example.com">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
