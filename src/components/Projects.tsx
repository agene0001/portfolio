import { ExternalLink, Github } from 'lucide-react';
import config from '../config';
const projects = [
  {
    title: 'Nutrition Tracker',
    description: 'A full-featured nutrition tracking platform with Amazon integration and AI-powered recommendations',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80',
    tags: ['React', 'Python', 'Machine Learning', 'AWS'],
    githubLink: `${config.profileLinks.github}/workout-app`,
    liveLink: 'https://example.com'
  },
  {
    title: 'Freelance Website',
    description: 'Professional portfolio and service booking platform for freelancers',
    image: './MVIImage.png',
    tags: ['Squarespace'],
    githubLink: `${config.profileLinks.github}`,
    liveLink: 'https://www.milesventsinchealthcare.com/'
  },
  {
    title: 'LinkedIn Automation',
    description: 'AI-powered LinkedIn networking and content management tool',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80',
    tags: ['Python', 'Machine Learning', 'Selenium'],
    githubLink: `${config.profileLinks.github}/job-applier-extension`,
    liveLink: 'https://example.com'
  },
  {
    title: 'Flask Blog Website',
    description: 'Full-featured blogging platform with markdown support',
    image: './blogPic.jpg',
    tags: ['Flask', 'SQLAlchemy', 'Bootstrap'],
    githubLink: `${config.profileLinks.github}/Scheduler`,
    liveLink: 'https://example.com'
  },
  {
    title: 'AI Projects Collection',
    description: 'Collection of AI/ML projects including NLP and computer vision',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    tags: ['TensorFlow', 'PyTorch', 'OpenAI'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Class Scheduler',
    description: 'Automated class scheduling system with conflict resolution',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'MongoDB', "in-progress"],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-2">Portfolio</p>
          <h2 className="text-3xl font-bold text-white mb-4">Check Out Some of My Works</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here I highlight a selection of projects that demonstrate my expertise in full-stack
            development, machine learning, and data science. Each project reflects my commitment to building
            innovative solutions and creating seamless user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}