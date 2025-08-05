const nodemailer = require("nodemailer");

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "ramadhanishafiiwanjenja@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "uijdtnhangpvsfdo",
  },
});

// Email to you (the portfolio owner) - FROM the contact form sender
const sendNotificationEmail = async (contactData) => {
  const mailOptions = {
    // Use Reply-To and custom headers to make it appear from the sender
    from: `"Portfolio Contact Form" <${
      process.env.EMAIL_USER || "ramadhanishafiiwanjenja@gmail.com"
    }>`,
    replyTo: `"${contactData.name}" <${contactData.email}>`, // This is the key - when you reply, it goes to the contact person
    to: "ramadhanishafiiwanjenja@gmail.com",
    subject: `📧 ${contactData.name}: ${contactData.subject}`,

    // Add custom headers to help with email client display
    headers: {
      "X-Original-Sender": contactData.email,
      "X-Contact-Name": contactData.name,
    },

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #4C1D95; color: white; padding: 20px; border-radius: 8px 8px 0 0; margin-bottom: 0;">
          <h2 style="margin: 0; font-size: 20px;">📧 New Message from ${
            contactData.name
          }</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">via Portfolio Contact Form</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 0 0 8px 8px; margin-top: 0; border: 1px solid #e5e7eb;">
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 5px solid #4C1D95; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #333; font-size: 16px;">Contact Information</h3>
            <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${
              contactData.name
            }</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${
              contactData.email
            }" style="color: #4C1D95; text-decoration: none;">${
      contactData.email
    }</a></p>
            <p style="margin: 0;"><strong>Subject:</strong> ${
              contactData.subject
            }</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 5px solid #10B981;">
            <h3 style="margin: 0 0 15px 0; color: #333; font-size: 16px;">Message</h3>
            <div style="line-height: 1.6; color: #444;">
              ${contactData.message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px; border: 1px solid #bfdbfe;">
          <p style="margin: 0; color: #1e40af; font-weight: 600;">💡 Click "Reply" to respond directly to ${
            contactData.name
          }</p>
          <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Your reply will be sent to: ${
            contactData.email
          }</p>
        </div>
        
        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 15px;">
          Sent from your portfolio contact form • ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Notification email sent successfully:", result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Error sending notification email:", error);
    throw error;
  }
};

// Auto-reply email to the person who submitted the form
const sendAutoReplyEmail = async (contactData) => {
  const mailOptions = {
    from: `"Ramadhani Shafi - Portfolio" <${
      process.env.EMAIL_USER || "ramadhanishafiiwanjenja@gmail.com"
    }>`,
    to: contactData.email,
    subject: "✅ Thank you for reaching out - Ramadhani Shafi",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4C1D95, #7C3AED); color: white; padding: 25px; border-radius: 8px 8px 0 0; margin-bottom: 0;">
          <h2 style="margin: 0; font-size: 24px;">✅ Message Received!</h2>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for reaching out through my portfolio</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 0 0 8px 8px; margin-top: 0; border: 1px solid #e5e7eb;">
          <p style="margin: 0 0 15px 0; font-size: 16px;">Dear <strong>${
            contactData.name
          }</strong>,</p>
          <p style="margin: 0 0 20px 0; line-height: 1.6;">Thank you for taking the time to contact me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4C1D95; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0; font-size: 16px;">📝 Your Message Summary</h3>
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${
              contactData.subject
            }</p>
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; font-style: italic; line-height: 1.5;">
              ${contactData.message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10B981; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0; font-size: 16px;">🔗 Connect with me</h3>
            <p style="margin: 0 0 15px 0;">In the meantime, feel free to:</p>
            <ul style="margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;"><a href="https://github.com/ramadhaniwanjenja" style="color: #4C1D95; text-decoration: none;">🔗 Check out my GitHub profile</a></li>
              <li style="margin-bottom: 8px;"><a href="https://www.linkedin.com/in/ramadhani-shafi-231a82287" style="color: #4C1D95; text-decoration: none;">💼 Connect with me on LinkedIn</a></li>
              <li style="margin-bottom: 0;"><a href="https://www.instagram.com/ramadhanshafii_1251" style="color: #4C1D95; text-decoration: none;">📸 Follow me on Instagram</a></li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 25px;">
            <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600;">Best regards,</p>
            <p style="margin: 0 0 5px 0; font-size: 18px; font-weight: bold; color: #4C1D95;">Ramadhani Shafi</p>
            <p style="margin: 0; color: #666; font-style: italic;">Software Developer</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; border: 1px solid #fbbf24;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            ⚠️ This is an automated response. Please do not reply to this email.
          </p>
        </div>
        
        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 15px;">
          Sent automatically from Ramadhani's Portfolio • ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Auto-reply email sent successfully:", result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Error sending auto-reply email:", error);
    throw error;
  }
};

// Main function to handle contact form submission
const handleContactForm = async (contactData) => {
  try {
    // Send notification email to you
    await sendNotificationEmail(contactData);

    // Send auto-reply to the person who submitted the form
    await sendAutoReplyEmail(contactData);

    return {
      success: true,
      message: "Emails sent successfully",
    };
  } catch (error) {
    console.error("Error handling contact form:", error);
    throw error;
  }
};

module.exports = {
  handleContactForm,
  sendNotificationEmail,
  sendAutoReplyEmail,
};
