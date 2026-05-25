import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Mediquick',
      description: `Architected a responsive healthcare platform to streamline medical consultations and medicine delivery as part of a 5-member team. Developed a full-stack telemedicine website using React, Node.js, Express, and MongoDB, integrating appointment booking, e-prescriptions, and medicine ordering. Implemented secure authentication and role-based dashboards for 5 distinct user roles: Patients, Doctors, Admins, Employees, and Suppliers. Enabled real-time doctor-patient communication with an integrated chat feature. Optimized backend performance and scalability by implementing Redis for data caching. Ensured API clarity and accessibility by creating comprehensive documentation with Swagger.`,
      image: '/Mediquick.png',
      technologies: ['React', 'Node.js','CRUD','RESTAPI', 'MongoDB', 'Redis', 'CI/CD'],
      github: 'https://github.com/nsaivineethIIIT/Mediquick-React/tree/srimanth',
      live: 'https://mediquick-frontend-tawny.vercel.app/',
      featured: true,
    },
    {
      title: 'Dynamic Load Balancing using ABC Algorithm',
      description: ' Java-based cloud load balancing simulator developed using the CloudSim Plus framework .Designed and implemented the Artificial Bee Colony (ABC) optimization algorithm to enable dynamic task scheduling across six virtual machines, ensuring balanced workload distribution. Conducted a comparative analysis of three different load balancing algorithms by processing over 30 cloudlets, evaluating performance based on execution time, throughput, and overall efficiency metrics.',
      image: 'https://via.placeholder.com/400x250?text=Task+Management',
      technologies: ['Cloudsim', 'Java'],
      github: 'https://github.com/srimanth009/Cloud-Computing-Project-',
      featured: true,
    },
    {
      title: '3D Car Parking Graphics',
      description: 'A realistic, interactive 3D car parking simulator built with C++ and OpenGL/GLUT. Practice your parking skills in a simulated environment featuring multiple cars, obstacles, and dynamic visual effects.',
      image: 'https://via.placeholder.com/400x250?text=Blog+Platform',
      technologies: ['OpenGL/GLUT', 'C++'],
      github: 'https://github.com/srimanth009/3D-Car-Parking',
      live: 'https://drive.google.com/file/d/1GEqbn5DSF3canbucXOMV-UiBB8NeUAsJ/view?usp=sharing',
      featured: false,
    },
   
   
    
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group animate-fadeInUp"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-white hover:text-blue-400 transition-colors"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-white hover:text-blue-400 transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 inline-block px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-blue-300 text-xs font-semibold">
                    Featured
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-700 px-2 py-1 rounded text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Projects Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <div className="flex gap-3 text-gray-400 group-hover:text-blue-400 transition-colors">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-700 px-2 py-1 rounded text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-slate-700">
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-smooth transform hover:scale-105"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
