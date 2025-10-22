import emailjs from '@emailjs/browser';

// src/services/emailService.ts
// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_nhattamshop'; // Đã cập nhật từ ảnh
const EMAILJS_TEMPLATE_ID = 'customer_confirmation'; // Template ID cho khách hàng
const EMAILJS_ADMIN_TEMPLATE_ID = 'admin_notification'; // Template ID cho admin
const EMAILJS_PUBLIC_KEY = 'HCISRtA-L3K6M5QT2'; // Thay bằng Public Key thực tế từ https://dashboard.emailjs.com/admin/account
const ADMIN_EMAIL = 'kugayamashusei2000@gmail.com'; // Thay bằng email admin nhận thông báo

export interface EmailData {
  to_name: string;
  to_email: string;
  from_name: string;
  from_email: string;
  message: string;
  order_details?: string;
}

export interface OrderEmailData {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerProvince: string;
  customerDistrict: string;
  customerWard: string;
  customerEmail: string;
  selectedPackage: string;
  packageName: string;
  packagePrice: number;
  orderDate: string;
}

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send simple email
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailData as any,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Send order confirmation email
export const sendOrderConfirmation = async (orderData: OrderEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: orderData.customerName,
      to_email: orderData.customerEmail,
      customer_name: orderData.customerName,
      customer_phone: orderData.customerPhone,
      customer_address: `${orderData.customerAddress}, ${orderData.customerWard}, ${orderData.customerDistrict}, ${orderData.customerProvince}`,
      package_name: orderData.packageName,
      package_price: orderData.packagePrice.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }),
      order_date: orderData.orderDate,
      order_id: `ORD-${Date.now()}`,
      message: `Đơn hàng ${orderData.packageName} đã được đặt thành công!`
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Order confirmation email sent:', result);
    return true;
  } catch (error) {
    console.error('Error sending order confirmation:', error);
    return false;
  }
};

// Send email to admin about new order
export const sendAdminNotification = async (orderData: OrderEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: 'Admin',
      to_email: ADMIN_EMAIL,
      customer_name: orderData.customerName,
      customer_phone: orderData.customerPhone,
      customer_email: orderData.customerEmail,
      customer_address: `${orderData.customerAddress}, ${orderData.customerWard}, ${orderData.customerDistrict}, ${orderData.customerProvince}`,
      package_name: orderData.packageName,
      package_price: orderData.packagePrice.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }),
      order_date: orderData.orderDate,
      order_id: `ORD-${Date.now()}`,
      message: `Đơn hàng mới từ ${orderData.customerName} - ${orderData.packageName}`
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_ADMIN_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Admin notification sent:', result);
    return true;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return false;
  }
};
