import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute Of Information Technology , sri city , Andhra Pradesh  ',
      year: '2023 - 2027',
      gpa: '7.16 / 10',
      description: 'Currently in 3rd Year | Specializing in Web Development and Software Engineering',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Sri Chaitanya Junior College, Hyderabad',
      year: '2021 - 2023',
      gpa: '9.81 / 10',
      description: 'Science Stream - Mathematics, Physics, Chemistry',
      icon: <FaGraduationCap />,
    },
  ]

  return (
    <section id="education" className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-blue-400">Education</span>
        </h2>

        <div className="flex justify-center">
          {/* Education */}
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-smooth"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-blue-400 mt-1">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-blue-300 font-medium">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mt-1">{edu.year}</p>
                      <p className="text-gray-300 mt-2">{edu.description}</p>
                      <div className="mt-3 inline-block bg-blue-500 bg-opacity-20 px-3 py-1 rounded text-blue-300 text-sm font-medium">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
