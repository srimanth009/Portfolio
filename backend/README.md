# Portfolio Backend - Gmail Integration 📧

A Node.js/Express backend server for handling contact form submissions from your professional portfolio. Integrates with Gmail to send automated email responses.

## Features

✅ Contact form submission handling
✅ Automated email sending via Gmail SMTP
✅ Sends email to portfolio owner
✅ Sends thank-you reply to visitor
✅ Input validation and error handling
✅ CORS enabled for frontend integration
✅ Professional HTML email templates
✅ Request logging and debugging

## Prerequisites

- Node.js (v14 or higher)
- Gmail account with 2FA enabled
- Gmail App Password (not regular password)

## Setup Instructions

### Step 1: Enable 2-Factor Authentication on Gmail

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "2-Step Verification" in the left sidebar
3. Follow the setup wizard to enable 2FA
4. Verify with your phone or authenticator app

### Step 2: Generate Gmail App Password

1. Go to [Google Account App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" from the dropdown
3. Select "Windows Computer" (or your OS)
4. Click "Generate"
5. Copy the 16-character password (you'll need this)

### Step 3: Configure Environment Variables

1. Open `.env` file in the backend folder
2. Replace `your-email@gmail.com` with your actual Gmail address
3. Paste the 16-character App Password in the `GMAIL_APP_PASSWORD` field
4. Save the file

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Step 4: Install Dependencies

```bash
cd backend
npm install
```

### Step 5: Start the Server

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
**GET** `/api/health`

Returns server status.

**Response:**
```json
{
  "status": "Backend is running!",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Contact Form Submission
**POST** `/api/contact`

Handles contact form submissions and sends emails.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Job Opportunity",
  "message": "I have an exciting job opportunity for you..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description",
  "error": "Details (only in development mode)"
}
```

## Email Features

### Email Sent to Portfolio Owner
- Includes visitor's name, email, and message
- Professional HTML template with styling
- Shows submission timestamp
- Contains all contact details

### Reply Email to Visitor
- Personalized thank-you message
- Includes message summary
- Sets expectation for response time
- Professional branding

## Frontend Integration

Update your `Contact.jsx` to send data to the backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (data.success) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } else {
      console.error('Error:', data.message)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    setLoading(false)
  }
}
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GMAIL_USER` | Your Gmail address | `your-email@gmail.com` |
| `GMAIL_APP_PASSWORD` | 16-char Gmail App Password | `xxxx xxxx xxxx xxxx` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

## Project Structure

```
backend/
├── server.js           # Main Express server
├── package.json        # Dependencies
├── .env               # Environment variables (keep secret!)
├── .env.example       # Template for .env file
└── README.md          # This file
```

## Troubleshooting

### "Error: Invalid login (Gmail)"
- Check if 2FA is enabled on your Gmail
- Verify the App Password is correct (16 characters)
- Make sure you're using the App Password, not your regular Gmail password

### "Connection refused" from frontend
- Check if backend server is running
- Verify PORT is correct (default 5000)
- Check CORS configuration in `server.js`
- Ensure frontend URL matches `FRONTEND_URL` in `.env`

### Emails not sending
- Check Gmail account for suspicious activity alerts
- Verify App Password is correct
- Check `.env` file has no extra spaces
- Look at console logs for detailed error messages

### CORS errors
- Update `FRONTEND_URL` in `.env` if frontend runs on different port
- Restart the server after changing `.env`

## Security Notes

⚠️ **Important:**
- Never commit `.env` file to Git
- Always use App Password, never your actual Gmail password
- Keep your Gmail credentials private
- Use HTTPS in production
- Validate all inputs on backend
- Implement rate limiting in production
- Consider adding CAPTCHA for additional security

## Deployment

### Deploying to Heroku
```bash
heroku create portfolio-backend
heroku config:set GMAIL_USER=your-email@gmail.com
heroku config:set GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
git push heroku main
```

### Deploying to Railway
1. Connect GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically

### Deploying to Render
1. Connect GitHub repository
2. Add environment variables
3. Deploy with automatic rebuilds

## Testing with cURL

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

## Performance Tips

- Emails are sent in parallel (Promise.all)
- Validation happens before email sending
- Error handling prevents server crashes
- CORS is optimized for specific origins

## Monitoring

Check server logs for:
- ✅ Successful email sends
- ❌ Failed submissions
- 📧 Email service status
- 🔐 CORS issues

## Support

For Gmail-related issues:
- [Gmail App Passwords Help](https://support.google.com/accounts/answer/185833)
- [Gmail Security](https://myaccount.google.com/security)

For Nodemailer issues:
- [Nodemailer Documentation](https://nodemailer.com/)
- [Nodemailer Gmail Guide](https://nodemailer.com/smtp/gmail/)

## License

This backend is part of your professional portfolio project.
