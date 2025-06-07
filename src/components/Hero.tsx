import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

// Particle Background Component
function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleArray = [];
      for (let i = 0; i < 50; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5
        });
      }
      setParticles(particleArray);
    };

    generateParticles();
  }, []);

  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
            <div
                key={particle.id}
                className="absolute rounded-full bg-slate-400/20"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animation: `float ${particle.duration}s infinite ease-in-out`,
                  animationDelay: `${particle.delay}s`
                }}
            />
        ))}
      </div>
  );
}

// Typing Animation Hook
function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayText, text, speed]);

  return { displayText, isComplete };
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { displayText: nameText, isComplete: nameComplete } = useTypewriter("Felix Agene", 100);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <>
        <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
        
        @keyframes slideInFromLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInScale {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .slide-in-left { animation: slideInFromLeft 0.8s ease-out forwards; }
        .slide-in-right { animation: slideInFromRight 0.8s ease-out forwards; }
        .fade-in-scale { animation: fadeInScale 0.6s ease-out forwards; }
        .glow-effect { animation: glow 3s ease-in-out infinite; }
      `}</style>

        <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
          {/* Subtle grid pattern overlay */}
          <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}
          />

          {/* Particle effect */}
          <ParticleBackground />

          {/* Main content */}
          <div className="relative max-w-6xl mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
            <div className="text-center w-full">
              {/* Greeting */}
              <div className={`mb-6 ${isLoaded ? 'slide-in-left' : 'opacity-0'}`}>
              <span className="text-slate-400 text-lg font-mono tracking-wide">
                &gt; hello_world.execute()
              </span>
              </div>

              {/* Name with typewriter effect */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                  <span className="text-white font-light">I'm </span>
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {nameText}
                    <span className={`${nameComplete ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>|</span>
                </span>
                </h1>
              </div>

              {/* Role tags */}
              <div className={`flex flex-wrap justify-center gap-3 mb-10 ${isLoaded ? 'fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                {[
                  { label: 'Full Stack Engineer', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Data Scientist', color: 'from-purple-500 to-pink-500' },
                  { label: 'Security Researcher', color: 'from-red-500 to-orange-500' }
                ].map((role, index) => (
                    <div
                        key={role.label}
                        className={`px-6 py-3 rounded-full border border-slate-700/50 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 cursor-default`}
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                  <span className={`bg-gradient-to-r ${role.color} bg-clip-text text-transparent font-medium`}>
                    {role.label}
                  </span>
                    </div>
                ))}
              </div>

              {/* Description */}
              <div className={`mb-12 ${isLoaded ? 'slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                  Computer Science student at UMN Twin Cities, crafting scalable web applications,
                  extracting insights from complex datasets, and exploring cybersecurity frontiers.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row justify-center gap-6 mb-16 ${isLoaded ? 'fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 glow-effect"
                >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Let's Connect
                </span>
                </button>

                <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/10 transform hover:scale-105 transition-all duration-300"
                >
                  Explore My Work
                </button>
              </div>

              {/* Social Links */}
              <div className={`flex justify-center gap-6 ${isLoaded ? 'slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                {[
                  { Icon: Github, href: 'https://github.com/agene0001', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/felix-agene/', label: 'LinkedIn' }
                ].map(({ Icon, href, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-slate-700/50 bg-slate-800/30 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 transform hover:scale-110"
                        aria-label={label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
              onClick={() => scrollToSection('about')}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-violet-400 transition-colors duration-300 animate-bounce"
              aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-violet-500 rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
        </section>
      </>
  );
}