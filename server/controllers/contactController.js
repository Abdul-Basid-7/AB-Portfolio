import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Message from ${name}`,

      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      message: "Email Sent",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};