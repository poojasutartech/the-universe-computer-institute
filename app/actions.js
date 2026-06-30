'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'theuniverse0311institute@gmail.com'; 

// 1. Admission Form Action
export async function handleAdmissionSubmit(data) {
  console.log("📥 Server Action: Admission Data Received ->", data);
  
  if (!process.env.RESEND_API_KEY) {
    console.error("❌ ERROR: RESEND                                _API_KEY is missing in your .env.local file!");
    return { success: false, error: "API Key missing in environment configuration." };
  }

  try {
    const response = await resend.emails.send({
      from: 'The Universe Institute <onboarding@resend.dev>',
      to: [TO_EMAIL],
      subject: `🎓 New Admission: ${data.firstName} ${data.lastName} - ${data.course}`,
      html: `
        <h2>New Admission Application Details</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Course:</strong> ${data.course}</p>
        <p><strong>Qualifications:</strong> ${data.qualifications}</p>
        <p><strong>City:</strong> ${data.city} (${data.zipCode})</p>
        <p><strong>Address:</strong> ${data.address}</p>
      `
    });
    
    console.log("✅ Resend API Response Success:", response);
    return { success: true };
  } catch (error) {
    console.error("❌ ERROR inside handleAdmissionSubmit Server Action:", error);
    return { success: false, error: error.message || "Unknown error occurred while sending email." };
  }
}

// 2. Contact Form Action
export async function handleContactSubmit(data) {
  console.log("📥 Server Action: Contact Data Received ->", data);

  if (!process.env.RESEND_API_KEY) {
    console.error("❌ ERROR: RESEND_API_KEY is missing in your .env.local file!");
    return { success: false, error: "API Key missing in environment configuration." };
  }

  try {
    const response = await resend.emails.send({
      from: 'The Universe Institute <onboarding@resend.dev>',
      to: [TO_EMAIL],
      subject: `✉️ New Message: ${data.subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });

    console.log("✅ Resend API Response Success:", response);
    return { success: true };
  } catch (error) {
    console.error("❌ ERROR inside handleContactSubmit Server Action:", error);
    return { success: false, error: error.message || "Unknown error occurred while sending email." };
  }
}