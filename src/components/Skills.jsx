import { FaReact, FaNode, FaDatabase, FaGitAlt, FaJsSquare } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: <FaReact /> },
        { name: 'HTML', level: 90, icon: <FaJsSquare /> },
        { name: 'CSS', level: 95, icon: null },
      
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNode /> },
        { name: 'Express.js', level: 90, icon: <FaNode /> },
        { name: 'javascript', level: 85, icon: null },
        { name: 'REST APIs', level: 95, icon: null },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', level: 90, icon: <FaDatabase /> },
        { name: 'GraphSQL', level: 85, icon: <FaDatabase /> },
        { name: 'SQL', level: 90, icon: <FaDatabase /> },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: null },
        { name: 'C', level: 85, icon: null },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95, icon: <FaGitAlt /> },
        { name: 'Docker', level: 80, icon: null },
        { name: 'DSA', level: 85, icon: null },
        { name: 'CI/CD', level: 80, icon: null },
        { name: 'AWS', level: 75, icon: null },
      ],
    },
  ]

  return (
    <section id="skills" className="bg-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Technical <span className="text-blue-400">Skills</span>
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="animate-fadeInUp">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-600 px-4 py-3 rounded-lg text-center hover:bg-blue-500 transition-smooth cursor-pointer group flex items-center justify-center gap-2 min-h-16"
                  >
                    {skill.icon && <div className="text-lg text-blue-300 group-hover:text-white">{skill.icon}</div>}
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-slate-700 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Problem Solving', 'Communication', 'Team Work', 'Leadership', 'Time Management', 'Adaptability', 'Attention to Detail', 'Creativity'].map((skill, index) => (
              <div
                key={index}
                className="bg-slate-600 px-4 py-3 rounded-lg text-center hover:bg-blue-500 transition-smooth cursor-pointer"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
