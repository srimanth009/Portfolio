import { FaCode, FaUsers, FaLightbulb, FaTrophy } from 'react-icons/fa'

export default function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing efficient, maintainable, and scalable code',
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working seamlessly with teams to deliver excellence',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Creating innovative solutions to complex problems',
    },
    {
      icon: <FaTrophy />,
      title: 'Excellence',
      description: 'Committed to delivering top-quality results',
    },
  ]

  return (
    <section id="about" className="bg-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a 3rd year Computer Science student with a passion for building innovative digital solutions. 
              Currently pursuing my Bachelor's degree and actively working on real-world projects, combining academic 
              knowledge with practical experience in Full Stack Web Development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech started with curiosity about how things work, which led me to learn programming and 
              develop a strong foundation in web technologies. I've built several projects showcasing my skills in React, 
              Node.js, and modern web development practices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about continuous learning, open-source contributions, and seeking internship opportunities 
              to gain hands-on experience and contribute to meaningful projects. Graduating in 2027, I'm eager to launch 
              my career in tech.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slideIn">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-smooth cursor-pointer"
              >
                <div className="text-4xl text-blue-400 mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
