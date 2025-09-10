const functions = require('firebase-functions')
const nodemailer = require('nodemailer')

// Configure the email transport using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass
  }
})

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  const {
    name, email, phone, company, projectType, message,
    jobRole, projectStage, projectTypeDetail, budgetRange, howHeard
  } = data

  const mailOptions = {
    from: `MH Construction Website <${functions.config().email.user}>`,
    to: 'matt@mhc-gc.com',
    subject: 'New Contact Form Submission',
    text: `New contact form submission:\n\n
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Project Type: ${projectType}
Job Role: ${jobRole}
Project Stage: ${projectStage}
Project Type Detail: ${projectTypeDetail}
Budget Range: ${budgetRange}
How Heard: ${howHeard}
Message: ${message}`
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new functions.https.HttpsError('internal', 'Failed to send email')
  }
})
