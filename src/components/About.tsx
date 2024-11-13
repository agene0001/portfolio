
const skills = {
  'Programming Languages': 90,
  'Data Science & Analytics': 85,
  'Frameworks & Libraries': 80,
  'Database Management': 90,
  'Cloud Computing': 70,
  'Testing & Debugging': 80
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-2">About</p>
          <h2 className="text-3xl font-bold text-white mb-4">Let me introduce myself</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a Full Stack Developer focused on building intuitive, high-performance web applications using
            Node.js/Express or Flask with a Next.js/react frontend as well as react native for IOS development
            and MongoDB/MySQL backend. I primarily deploy via Cloud Run with Firebase for authentication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Profile</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <span className="font-semibold min-w-32 text-gray-300">Full Name:</span>
                <span className="text-gray-400">Felix Agene</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold min-w-32 text-gray-300">Birth Date:</span>
                <span className="text-gray-400">May 10, 2004</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold min-w-32 text-gray-300">Job:</span>
                <span className="text-gray-400">Frontend/Backend Developer, Data Scientist</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold min-w-32 text-gray-300">Email:</span>
                <span className="text-gray-400">agene001@umn.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([skill, level]) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill}</span>
                    <span className="text-gray-400">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="/resume-latest.pdf"
            className="px-8 py-3 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-950 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}