import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Picture & Info */}
        <div className="flex flex-col items-center md:items-start gap-8 animate-slideIn">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50"></div>
            <img
              src="/Profile_pic.jpeg"
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
          <div className="flex gap-4 text-3xl">
            <a
              href="https://github.com/srimanth009"
              className="text-gray-300 hover:text-blue-400 transition-smooth transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/srimanth-reddy-888952346/"
              className="text-gray-300 hover:text-blue-400 transition-smooth transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
           
          </div>
        </div>

        {/* Right: Introduction */}
        <div className="flex flex-col gap-6 animate-fadeInUp">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Hi, I'm <span className="text-blue-400">Nagolu Srimanth Reddy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              3rd Year Student | Full Stack Developer | Enthusiastic Learner
            </p>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a 3rd year BTech Computer Science student at Indian Institute Of Information Technology , Sri city , AP . I am passionate about creating beautiful, responsive web applications that solve real-world problems. 
            With hands-on experience in modern web technologies, I'm actively building projects and seeking internship opportunities to grow as a developer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-smooth transform hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="/Srimanth_resume.pdf"
              download
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-smooth transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-3xl text-blue-400">
          ↓
        </div>
      </div>
    </section>
  )
}
