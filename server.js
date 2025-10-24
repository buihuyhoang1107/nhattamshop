const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// SMTP Configuration
const SMTP_CONFIG = {
  host: 'sng104.arandomserver.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'admin@longthanhphat.store',
    pass: 'Longthanhphat@2410'
  }
};

// Create transporter
const createTransporter = (smtpConfig) => {
  return nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.auth.user,
      pass: smtpConfig.auth.pass
    }
  });
};

// Test SMTP connection
app.post('/api/test-smtp', async (req, res) => {
  try {
    const { smtp_server, smtp_port, smtp_username, smtp_password } = req.body;
    
    const testConfig = {
      host: smtp_server,
      port: smtp_port || 587,
      secure: false,
      auth: {
        user: smtp_username,
        pass: smtp_password
      }
    };

    const transporter = createTransporter(testConfig);
    await transporter.verify();
    
    res.json({ success: true, message: 'SMTP connection successful' });
  } catch (error) {
    console.error('SMTP test failed:', error);
    res.status(500).json({ 
      success: false, 
      message: 'SMTP connection failed', 
      error: error.message 
    });
  }
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { 
      to, 
      to_name, 
      from, 
      from_name, 
      subject, 
      message, 
      order_details,
      smtp_server,
      smtp_port,
      smtp_username,
      smtp_password
    } = req.body;

    // Use provided SMTP config or default
    const smtpConfig = smtp_server ? {
      host: smtp_server,
      port: smtp_port || 587,
      secure: false,
      auth: {
        user: smtp_username,
        pass: smtp_password
      }
    } : SMTP_CONFIG;

    const transporter = createTransporter(smtpConfig);

    // Email content
    const mailOptions = {
      from: `"${from_name || 'Long Thanh Phat Shop'}" <${from || 'admin@longthanhphat.store'}>`,
      to: to,
      subject: subject || 'Thông báo từ Long Thanh Phat Shop',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">${subject || 'Thông báo từ Long Thanh Phat Shop'}</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p>Xin chào ${to_name},</p>
            <p>${message}</p>
            ${order_details ? `<p><strong>Chi tiết đơn hàng:</strong> ${order_details}</p>` : ''}
            <p>Trân trọng,<br>Long Thanh Phat Shop</p>
          </div>
        </div>
      `,
      text: `${message}\n\n${order_details ? `Chi tiết đơn hàng: ${order_details}\n` : ''}\nTrân trọng,\nLong Thanh Phat Shop`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`SMTP configured for: ${SMTP_CONFIG.auth.user}`);
});
