import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            JD
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-b border-gray-700">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}