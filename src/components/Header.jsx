import { useState } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Education', to: 'education' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ]

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 bg-opacity-95 backdrop-blur shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          &lt;Simanth's Portfolio /&gt;
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="text-gray-300 hover:text-blue-400 cursor-pointer transition-smooth bg-none border-none"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-yellow-400 text-xl hover:scale-110 transition-transform"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-yellow-400 text-xl hover:scale-110 transition-transform"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="text-gray-300 hover:text-blue-400 cursor-pointer transition-smooth text-left bg-none border-none"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
