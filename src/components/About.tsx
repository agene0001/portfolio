import { User, Mail, Calendar, MapPin, Download, Code, Database, Cloud, Shield, Brain, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

// Enhanced skills with more detailed categories and current technologies
const skillCategories = {
  'Frontend Development': {
    skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'React Native',"vue.js",'svelte'],
    level: 90,
    icon: <Code className="w-5 h-5" />
  },
  'Backend Development': {
    skills: ['Python/Flask', 'Quarkus','Spring-boot', 'FastAPI', 'RESTful APIs'],
    level: 88,
    icon: <Database className="w-5 h-5" />
  },
  'Data Science & ML': {
    skills: ['Python', 'Pandas','spacy', 'Scikit-learn', 'TensorFlow', 'SQL','nlp'],
    level: 85,
    icon: <Brain className="w-5 h-5" />
  },
  'Cloud & DevOps': {
    skills: ['Google Cloud', 'Docker', 'Firebase', 'CI/CD'],
    level: 75,
    icon: <Cloud className="w-5 h-5" />
  },
  'Database Management': {
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
    level: 82,
    icon: <Database className="w-5 h-5" />
  },
  'Cybersecurity': {
    skills: ['Network Security', 'Penetration Testing', 'Risk Assessment'],
    level: 70,
    icon: <Shield className="w-5 h-5" />
  }
};

const achievements = [
  { number: '40+', label: 'Projects Completed', icon: <Code className="w-6 h-6" /> },
  { number: '3+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> },
  { number: '15+', label: 'Technologies Mastered', icon: <Zap className="w-6 h-6" /> },
  { number: '100%', label: 'Client Satisfaction', icon: <User className="w-6 h-6" /> }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    setIsVisible(true);

    // Animate skill bars with delay
    const timer = setTimeout(() => {
      const animated = {};
      Object.keys(skillCategories).forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [skill]: skillCategories[skill].level
          }));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
      <>
        <style jsx>{`
        @keyframes skill-fill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        
        @keyframes counter-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .skill-bar-fill {
          animation: skill-fill 1.5s ease-out forwards;
        }
        
        .achievement-item {
          animation: counter-up 0.6s ease-out forwards;
        }
      `}</style>

        <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Header */}
            <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <User className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 font-medium">About Me</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Get to Know </span>
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Felix Agene
              </span>
              </h2>

              <p className="text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
                I'm a Computer Science student at the University of Minnesota Twin Cities, passionate about
                creating scalable web applications, extracting insights from complex data, and securing digital infrastructure.
                I thrive at the intersection of technology and innovation.
              </p>
            </div>

            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Profile Information */}
              <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <User className="w-6 h-6 text-indigo-400" />
                    Professional Profile
                  </h3>

                  <div className="space-y-6">
                    {[
                      { icon: <User className="w-5 h-5" />, label: 'Full Name', value: 'Felix Agene' },
                      { icon: <Calendar className="w-5 h-5" />, label: 'Birth Date', value: 'May 10, 2004' },
                      { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Minneapolis, MN' },
                      { icon: <Code className="w-5 h-5" />, label: 'Role', value: 'Full Stack Developer & Data Scientist' },
                      { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'agene001@umn.edu' }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300">
                          <div className="text-indigo-400">
                            {item.icon}
                          </div>
                          <div className="flex-1 flex justify-between">
                            <span className="font-medium text-slate-300">{item.label}:</span>
                            <span className="text-slate-400">{item.value}</span>
                          </div>
                        </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                        href="#contact"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Get In Touch
                    </a>
                    <a
                        href="/resume-latest.pdf"
                        className="flex-1 px-6 py-3 border-2 border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Brain className="w-6 h-6 text-violet-400" />
                    Technical Expertise
                  </h3>

                  <div className="space-y-6">
                    {Object.entries(skillCategories).map(([category, data], index) => (
                        <div key={category} className="group">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="text-violet-400">
                                {data.icon}
                              </div>
                              <span className="font-medium text-slate-300">{category}</span>
                            </div>
                            <span className="text-slate-400 font-semibold">{data.level}%</span>
                          </div>

                          {/* Skill bar */}
                          <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: `${animatedSkills[category] || 0}%`,
                                  boxShadow: animatedSkills[category] ? '0 0 10px rgba(139, 92, 246, 0.5)' : 'none'
                                }}
                            />
                          </div>

                          {/* Skills list */}
                          <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {data.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs"
                                >
                            {skill}
                          </span>
                            ))}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements/Stats */}
            <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="achievement-item bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 text-center border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className="text-indigo-400 mb-3 flex justify-center">
                        {achievement.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                      <div className="text-slate-400 text-sm">{achievement.label}</div>
                    </div>
                ))}
              </div>
            </div>

            {/* Background quote/philosophy */}
            <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
                <blockquote className="text-slate-300 text-lg italic leading-relaxed">
                  "I believe technology should solve real problems and create meaningful impact.
                  Whether I'm building scalable web applications, analyzing complex datasets, or securing digital infrastructure,
                  my goal is to craft solutions that are both technically excellent and genuinely useful."
                </blockquote>
                <div className="mt-4 text-indigo-400 font-semibold">— Felix Agene</div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}