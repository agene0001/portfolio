import { ExternalLink, Github, Calendar, Code, Database, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';

// Updated projects with more authentic information based on your GitHub
const projects = [
  {
    title: 'GainzTracker',
    description: 'Full-stack nutrition and fitness tracking platform with AI-powered meal recommendations, barcode scanning, and Amazon Fresh integration.',
    image: '/gainztrackers.png',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Machine Learning', 'AWS'],
    category: 'Full Stack',
    githubLink: 'https://github.com/agene0001/workout-app',
    liveLink: 'https://gainztrackers.com',
    featured: true
  },
  {
    title: 'LinkedIn Job Automation',
    description: 'Intelligent job application automation tool with resume parsing, skill matching, and application tracking using Selenium and NLP.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Selenium', 'NLP', 'BeautifulSoup', 'Pandas'],
    category: 'Automation',
    githubLink: 'https://github.com/agene0001/job-applier-extension',
    featured: true
  },
  {
    title: 'Healthcare Consulting Platform',
    description: 'Professional consulting website with service booking, client management, and content management system.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
    tags: ['Squarespace', 'Custom CSS', 'JavaScript', 'SEO'],
    category: 'Web Development',
    liveLink: 'https://www.milesventsinchealthcare.com/',
    featured: false
  },
  {
    title: 'Smart Class Scheduler',
    description: 'Automated university course scheduling system with conflict detection, prerequisite checking, and optimal timetable generation.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Django', 'PostgreSQL', 'Algorithm Design', 'React'],
    category: 'Data Science',
    githubLink: 'https://github.com/agene0001/Scheduler',
    status: 'In Progress'
  },
  {
    title: 'Data Analysis Suite',
    description: 'Collection of data science projects including market analysis, predictive modeling, and visualization dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Jupyter'],
    category: 'Data Science',
    githubLink: 'https://github.com/agene0001',
    featured: false
  },
  {
    title: 'Cybersecurity Tools',
    description: 'Security analysis tools including network scanning, vulnerability assessment, and penetration testing utilities.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Kali Linux', 'Nmap', 'Wireshark', 'Bash'],
    category: 'Security',
    githubLink: 'https://github.com/agene0001',
    featured: false
  }
];

const categories = ['All', 'Full Stack', 'Data Science', 'Automation', 'Security', 'Web Development'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack': return <Code className="w-4 h-4" />;
      case 'Data Science': return <Brain className="w-4 h-4" />;
      case 'Security': return <Database className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
      <>
        <style jsx>{`
        @keyframes project-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes project-slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .project-card {
          animation: project-fade-in 0.6s ease-out forwards;
        }
        
        .project-card:nth-child(even) {
          animation-delay: 0.1s;
        }
        
        .project-card:nth-child(3n) {
          animation-delay: 0.2s;
        }
      `}</style>

        <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Header */}
            <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Code className="w-4 h-4 text-violet-400" />
                <span className="text-violet-400 font-medium">Featured Work</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Projects & </span>
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Innovations
              </span>
              </h2>

              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Explore my portfolio of full-stack applications, data science projects, and automation tools.
                Each project represents a solution to real-world problems, built with modern technologies and best practices.
              </p>
            </div>

            {/* Category Filter */}
            <div className={`flex flex-wrap justify-center gap-3 mb-16 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              {categories.map((category) => (
                  <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          selectedCategory === category
                              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                              : 'bg-slate-800/50 text-slate-400 hover:text-violet-400 hover:bg-slate-800/80 border border-slate-700/50'
                      }`}
                  >
                <span className="flex items-center gap-2">
                  {category !== 'All' && getCategoryIcon(category)}
                  {category}
                </span>
                  </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                  <div
                      key={`${project.title}-${index}`}
                      className={`project-card group relative bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] ${
                          project.featured ? 'ring-1 ring-violet-500/20' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Featured badge */}
                    {project.featured && (
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full text-white text-sm font-medium">
                          Featured
                        </div>
                    )}

                    {/* Status badge */}
                    {project.status && (
                        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
                          {project.status}
                        </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                      {/* Hover overlay with links */}
                      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          {project.githubLink && (
                              <a
                                  href={project.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 bg-slate-800/80 hover:bg-violet-600/80 rounded-full transition-all duration-300 transform hover:scale-110"
                                  aria-label="View source code"
                              >
                                <Github className="w-5 h-5 text-white" />
                              </a>
                          )}
                          {project.liveLink && (
                              <a
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 bg-slate-800/80 hover:bg-indigo-600/80 rounded-full transition-all duration-300 transform hover:scale-110"
                                  aria-label="View live demo"
                              >
                                <ExternalLink className="w-5 h-5 text-white" />
                              </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(project.category)}
                        <span className="text-violet-400 text-sm font-medium">{project.category}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:border-violet-500/50 transition-colors duration-300"
                            >
                        {tag}
                      </span>
                        ))}
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
              ))}
            </div>

            {/* Call to action */}
            <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <p className="text-slate-400 mb-6">
                Interested in collaborating or learning more about my work?
              </p>
              <a
                  href="https://github.com/agene0001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-violet-500"
              >
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>
      </>
  );
}