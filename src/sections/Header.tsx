'use client'
import { Link } from 'react-scroll/modules';

export const Header = () => {
  return <div className="flex items-center justify-center fixed z-10 top-3 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <Link to="hero"
        smooth={true}
        offset={-50}
        duration={2500} 
        className="nav-item">Home</Link>
      <Link to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1500} 
        className="nav-item">About</Link>
      <Link to="projects" 
        spy={true}
        smooth={true}
        offset={-50}
        duration={2000}
        className="nav-item">Projects</Link>
      <Link to="contact" 
        spy={true}
        smooth={true}
        offset={-50}
        duration={3000}
        className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
    </nav>
  </div>;
};
