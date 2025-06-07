import React, { useState } from 'react';

const skillCategories = {
  'Frontend Development': {
    skills: [
      'React/Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Native',
      'Vue.js',
      'Svelte',
      'Redux/Zustand',
      'GraphQL',
      'Webpack/Vite',
      'SASS/SCSS',
      'Progressive Web Apps',
      'Responsive Design'
    ],
    level: 90,
    icon: '⚛️'
  },
  'Backend Development': {
    skills: [
      'Python/Flask',
      'Quarkus',
      'Spring Boot',
      'FastAPI',
      'RESTful APIs',
      'Node.js/Express',
      'GraphQL APIs',
      'Microservices',
      'API Gateway',
      'Message Queues (Redis/RabbitMQ)',
      'WebSocket',
      'Authentication/JWT'
    ],
    level: 88,
    icon: '🔧'
  },
  'Data Science & ML': {
    skills: [
      'Python',
      'Pandas',
      'spaCy',
      'Scikit-learn',
      'TensorFlow',
      'SQL',
      'NLP',
      'PyTorch',
      'Jupyter Notebooks',
      'NumPy',
      'Matplotlib/Seaborn',
      'Apache Spark',
      'MLOps',
      'Feature Engineering'
    ],
    level: 85,
    icon: '📊'
  },
  'Web Scraping & Automation': {
    skills: [
      'Beautiful Soup',
      'Scrapy',
      'Selenium',
      'Playwright',
      'Requests/HTTP',
      'Puppeteer',
      'XPath/CSS Selectors',
      'Data Pipeline Automation',
      'Scheduled Tasks (Cron)',
      'API Integration',
      'Browser Automation',
      'Anti-bot Evasion'
    ],
    level: 83,
    icon: '🤖'
  },
  'Testing & Quality Assurance': {
    skills: [
      'Jest/Vitest',
      'React Testing Library',
      'Pytest',
      'Cypress',
      'Selenium WebDriver',
      'Unit Testing',
      'Integration Testing',
      'E2E Testing',
      'Test-Driven Development',
      'API Testing (Postman)',
      'Performance Testing',
      'Load Testing'
    ],
    level: 80,
    icon: '🧪'
  },
  'Cloud & DevOps': {
    skills: [
      'Google Cloud',
      'Docker',
      'Firebase',
      'CI/CD',
      'Kubernetes',
      'AWS Services',
      'GitHub Actions',
      'Terraform',
      'Nginx/Apache',
      'Load Balancing',
      'Monitoring (Prometheus)',
      'Log Management'
    ],
    level: 75,
    icon: '☁️'
  },
  'Database Management': {
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Firebase',
      'Redis',
      'Database Design',
      'Query Optimization',
      'Database Migration',
      'Backup Strategies',
      'Data Modeling',
      'ACID Properties',
      'NoSQL vs SQL'
    ],
    level: 82,
    icon: '🗄️'
  },
  'Cybersecurity': {
    skills: [
      'Network Security',
      'Penetration Testing',
      'Risk Assessment',
      'OWASP Top 10',
      'SQL Injection Prevention',
      'XSS/CSRF Protection',
      'Security Auditing',
      'Vulnerability Scanning',
      'Incident Response',
      'Encryption/Hashing',
      'Security Frameworks',
      'Compliance (SOC2/GDPR)'
    ],
    level: 70,
    icon: '🔒'
  }
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Frontend Development');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getSkillColor = (level) => {
    if (level >= 85) return 'from-emerald-400 to-emerald-600';
    if (level >= 80) return 'from-blue-400 to-blue-600';
    if (level >= 75) return 'from-purple-400 to-purple-600';
    return 'from-orange-400 to-orange-600';
  };

  const getLevelLabel = (level) => {
    if (level >= 85) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 75) return 'Proficient';
    return 'Intermediate';
  };

  return (
      <section id="skills" className="py-20  relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A comprehensive showcase of my technical skills across full-stack development, data science, and cybersecurity domains.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(skillCategories).map(([category, data]) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                    }`}
                >
                  <span className="mr-2">{data.icon}</span>
                  {category.replace(' Development', '').replace(' Management', '')}
                </button>
            ))}
          </div>

          {/* Selected Category Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category Overview */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">{skillCategories[selectedCategory].icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedCategory}</h3>

                  {/* Proficiency Level */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">Overall Proficiency</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          skillCategories[selectedCategory].level >= 85 ? 'bg-emerald-100 text-emerald-800' :
                              skillCategories[selectedCategory].level >= 80 ? 'bg-blue-100 text-blue-800' :
                                  skillCategories[selectedCategory].level >= 75 ? 'bg-purple-100 text-purple-800' :
                                      'bg-orange-100 text-orange-800'
                      }`}>
                      {getLevelLabel(skillCategories[selectedCategory].level)}
                    </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                      <div
                          className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skillCategories[selectedCategory].level)} transition-all duration-1000 ease-out`}
                          style={{ width: `${skillCategories[selectedCategory].level}%` }}
                      />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">{skillCategories[selectedCategory].level}%</span>
                    </div>
                  </div>

                  <div className="text-gray-400 text-sm">
                    {skillCategories[selectedCategory].skills.length} Technologies
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories[selectedCategory].skills.map((skill, index) => (
                    <div
                        key={skill}
                        className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:animate-pulse"></div>
                          <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                        {skill}
                      </span>
                        </div>

                        {hoveredSkill === skill && (
                            <div className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                              {getLevelLabel(skillCategories[selectedCategory].level)}
                            </div>
                        )}
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl p-6 border border-emerald-500/20">
                <div className="text-2xl font-bold text-emerald-400 mb-2">
                  {Object.values(skillCategories).filter(cat => cat.level >= 85).length}
                </div>
                <div className="text-emerald-300 text-sm">Expert Level</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {Object.values(skillCategories).filter(cat => cat.level >= 80 && cat.level < 85).length}
                </div>
                <div className="text-blue-300 text-sm">Advanced</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {Object.values(skillCategories).reduce((total, cat) => total + cat.skills.length, 0)}
                </div>
                <div className="text-purple-300 text-sm">Total Skills</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-6 border border-orange-500/20">
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  {Object.keys(skillCategories).length}
                </div>
                <div className="text-orange-300 text-sm">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}