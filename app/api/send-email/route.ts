import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json()
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Configure your SMTP transporter (use environment variables in production)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    })

    const mailOptions = {
        from: process.env.EMAIL_USER, // must be your Gmail
        to: 'tanmaytoshniwal09@gmail.com', // where you want to receive
        replyTo: email, // so replies go to the user
        subject: `Portfolio Contact: ${firstName} ${lastName}`,
        text: `New message from your portfolio:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      }
      

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: error?.message || 'Failed to send email.' }, { status: 500 })
  }
} 