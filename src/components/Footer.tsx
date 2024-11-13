import { Github, Linkedin, Mail } from 'lucide-react';
import config from '../config';
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Felix Agene</h3>
            <p className="text-gray-400">
              Full Stack Developer & UI/UX Enthusiast creating amazing digital experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={`${config.profileLinks.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`${config.profileLinks.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`${config.profileLinks.email}`}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Felix Agene. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}