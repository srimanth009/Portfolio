import { FaHeart, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/srimanth-reddy-888952346/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/srimanth009', label: 'GitHub' },
  ]

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">&lt;Portfolio /&gt;</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting beautiful, functional web experiences with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Full Stack Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</a></li>
             </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4 text-2xl">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
             
            </p>
            <p className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> and Code
            </p>
            
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <p className="text-gray-400 mb-4">
            Ready to work together? Let's create something amazing!
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-smooth transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </footer>
  )
}
