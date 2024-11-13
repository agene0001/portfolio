import React from 'react';
import { ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 animate-gradient"></div>
      
      {/* Particle effect */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
        <div className="text-center w-full">
          <p className="text-indigo-400 text-lg mb-4 font-medium animate-fade-in">Hello, World.</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-in-up">
            I'm <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Felix Agene</span>
          </h1>
          <div className="flex justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <span className="px-4 py-2 bg-indigo-600/20 rounded-full text-indigo-300 border border-indigo-500/30">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 bg-violet-600/20 rounded-full text-violet-300 border border-violet-500/30">
              Data Scientist
            </span>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Creating beautiful, functional, and data-driven digital experiences
          </p>
          <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-600/10 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-indigo-400"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}