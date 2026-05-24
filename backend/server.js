import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL || 'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not regular Gmail password
  }
})

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email service error:', error)
  } else {
    console.log(' Email service is ready to send messages')
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!', timestamp: new Date().toISOString() })
})

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      })
    }

    // Email to portfolio owner
    const ownerMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your email
      subject: `New Portfolio Message from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0f172a; color: #e2e8f0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #3b82f6;">New Message from Your Portfolio</h2>
            
            <div style="background-color: #1e293b; padding: 20px; border-radius: 6px; margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: #1e293b; padding: 20px; border-radius: 6px; margin-top: 20px;">
              <h3 style="color: #3b82f6; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap; color: #cbd5e1;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #334155; text-align: center; color: #94a3b8; font-size: 12px;">
              <p>This message was sent from your portfolio website contact form.</p>
              <p style="margin: 5px 0;">Sent at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `
    }

    // Reply email to visitor
    const visitorMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for contacting me - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0f172a; color: #e2e8f0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #3b82f6;">Thank You for Reaching Out!</h2>
            
            <p style="color: #cbd5e1; margin-top: 20px;">Hi ${name},</p>
            
            <p style="color: #cbd5e1; line-height: 1.6;">
              Thank you for contacting me through my portfolio. I have received your message regarding <strong>"${subject}"</strong> and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #1e293b; padding: 20px; border-radius: 6px; margin-top: 20px;">
              <h4 style="color: #3b82f6; margin-top: 0;">Your Message Summary:</h4>
              <p><strong>Subject:</strong> ${subject}</p>
              <p style="white-space: pre-wrap; color: #cbd5e1; max-height: 150px; overflow: hidden;">${message}</p>
            </div>
            
            <p style="color: #cbd5e1; margin-top: 20px;">I typically respond to all messages within 24 hours.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #334155;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                Best regards,
              </p>
              <p style="color: #3b82f6; font-weight: bold; margin: 10px 0;">Nagolu Srimanth Reddy</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #334155; text-align: center; color: #94a3b8; font-size: 11px;">
              <p style="margin: 5px 0;">This is an automated response from your portfolio website.</p>
            </div>
          </div>
        </div>
      `
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(visitorMailOptions)
    ])

    console.log(` Email sent - From: ${email}, Subject: ${subject}`)

    res.json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    })

  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// Start server
app.listen(PORT, () => {
  console.log(` Portfolio Backend Server running on http://localhost:${PORT}`)
  console.log(` Email service configured for: ${process.env.GMAIL_USER}`)
  console.log(` CORS enabled for: http://localhost:5173`)
})

export default app
