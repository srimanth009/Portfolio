import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (get these from https://dashboard.emailjs.com/)
emailjs.init('r5zxYzyuF0N0Z3w-u') // Replace with your EmailJS public key

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_m0vcj8b', // Replace with your EmailJS service ID
        'template_barmlzs', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'srimanthreddy.n23@iiits.in' // Your email address
        }
      )

      if (result.text === 'OK') {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 7780376571',
      link: 'tel:+917780376571',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'srimanthreddy.n23@iiits.in',
      link: 'mailto:srimanthreddy.n23@iiits.in',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="bg-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-start gap-4 group"
              >
                <div className="text-3xl text-blue-400 mt-1 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-700">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-6 text-2xl">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-700 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-300 animate-fadeInUp">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-300 animate-fadeInUp">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="name"
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@gmail.com"
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Please share your message, opportunity, or inquiry..."
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors transform hover:scale-105 disabled:hover:scale-100"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  I typically respond within 24 hours
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-500 bg-opacity-10 border border-blue-500 p-4 rounded-lg text-center">
                <p className="text-blue-400 font-semibold">Quick Response</p>
                <p className="text-gray-300 text-sm mt-1">Usually within 24 hours</p>
              </div>
              <div className="bg-blue-500 bg-opacity-10 border border-blue-500 p-4 rounded-lg text-center">
                <p className="text-blue-400 font-semibold">Open to Opportunities</p>
                <p className="text-gray-300 text-sm mt-1">Freelance & Full-time roles</p>
              </div>
              <div className="bg-blue-500 bg-opacity-10 border border-blue-500 p-4 rounded-lg text-center">
                <p className="text-blue-400 font-semibold">Collaboration</p>
                <p className="text-gray-300 text-sm mt-1">Love working on exciting projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
