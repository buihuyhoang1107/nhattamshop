# 📝 Tạo EmailJS Templates - Hướng Dẫn Chi Tiết

## 🚀 **Bước 1: Truy Cập Templates**

1. **Mở trình duyệt** và truy cập: https://dashboard.emailjs.com/admin/templates
2. **Đăng nhập** vào tài khoản EmailJS của bạn
3. **Bạn sẽ thấy danh sách templates** (nếu đã có)

## 📧 **Bước 2: Tạo Template Khách Hàng**

### **2.1. Tạo Template Mới:**
1. **Click nút "Create New Template"** (màu xanh)
2. **Điền thông tin:**
   - **Template Name:** `customer_confirmation`
   - **Subject:** `Xác Nhận Đơn Hàng - {{package_name}}`

### **2.2. Nội Dung Template:**
**Copy toàn bộ nội dung dưới đây và paste vào ô "Content":**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #e74c3c; margin: 0; font-size: 28px;">Long Thành Phát Store</h1>
    <p style="color: #666; margin: 5px 0 0 0;">Trùm về các sản phẩm mọc râu - mọc tóc tại Việt Nam</p>
  </div>
  
  <h2 style="color: #e74c3c; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">Xác Nhận Đơn Hàng</h2>
  
  <p>Xin chào <strong>{{customer_name}}</strong>,</p>
  
  <p>Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn đã được xác nhận và chúng tôi sẽ xử lý trong thời gian sớm nhất.</p>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #e74c3c;">
    <h3 style="color: #e74c3c; margin-top: 0;">📦 Thông tin đơn hàng</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="margin: 8px 0;"><strong>Mã đơn hàng:</strong> <span style="color: #e74c3c;">{{order_id}}</span></li>
      <li style="margin: 8px 0;"><strong>Gói sản phẩm:</strong> {{package_name}}</li>
      <li style="margin: 8px 0;"><strong>Giá:</strong> <span style="color: #e74c3c; font-weight: bold;">{{package_price}}</span></li>
      <li style="margin: 8px 0;"><strong>Ngày đặt:</strong> {{order_date}}</li>
    </ul>
  </div>
  
  <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #27ae60;">
    <h3 style="color: #27ae60; margin-top: 0;">🚚 Thông tin giao hàng</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="margin: 8px 0;"><strong>Họ tên:</strong> {{customer_name}}</li>
      <li style="margin: 8px 0;"><strong>Số điện thoại:</strong> {{customer_phone}}</li>
      <li style="margin: 8px 0;"><strong>Địa chỉ:</strong> {{customer_address}}</li>
    </ul>
  </div>
  
  <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #ffeaa7;">
    <p style="margin: 0; color: #856404;"><strong>📞 Liên hệ:</strong> Chúng tôi sẽ gọi điện xác nhận đơn hàng trong vòng 30 phút. Vui lòng giữ máy!</p>
  </div>
  
  <div style="text-align: center; margin: 30px 0;">
    <p style="color: #666; font-size: 14px; margin: 0;">
      Trân trọng,<br>
      <strong>Đội ngũ Long Thành Phát Store</strong><br>
      📧 Email: kugayamashusei2000@gmail.com<br>
      📞 Hotline: 1900-xxxx
    </p>
  </div>
</div>
```

### **2.3. Lưu Template:**
1. **Click "Save"** (nút màu xanh)
2. **Copy Template ID** (có dạng: `template_abc123xyz`)
3. **Lưu lại** Template ID này

## 📧 **Bước 3: Tạo Template Admin**

### **3.1. Tạo Template Mới:**
1. **Click "Create New Template"** lần nữa
2. **Điền thông tin:**
   - **Template Name:** `admin_notification`
   - **Subject:** `🚨 Đơn Hàng Mới - {{package_name}}`

### **3.2. Nội Dung Template:**
**Copy toàn bộ nội dung dưới đây và paste vào ô "Content":**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #e74c3c; margin: 0; font-size: 28px;">Long Thành Phát Store - Admin</h1>
    <p style="color: #666; margin: 5px 0 0 0;">Hệ thống thông báo đơn hàng</p>
  </div>
  
  <h2 style="color: #e74c3c; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">🚨 Đơn Hàng Mới</h2>
  
  <p>Admin thân mến,</p>
  
  <p><strong>Có đơn hàng mới cần xử lý ngay!</strong> Vui lòng liên hệ khách hàng để xác nhận đơn hàng.</p>
  
  <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f39c12;">
    <h3 style="color: #f39c12; margin-top: 0;">👤 Thông tin khách hàng</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="margin: 8px 0;"><strong>Họ tên:</strong> {{customer_name}}</li>
      <li style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:{{customer_email}}" style="color: #e74c3c;">{{customer_email}}</a></li>
      <li style="margin: 8px 0;"><strong>Số điện thoại:</strong> <a href="tel:{{customer_phone}}" style="color: #e74c3c;">{{customer_phone}}</a></li>
      <li style="margin: 8px 0;"><strong>Địa chỉ:</strong> {{customer_address}}</li>
    </ul>
  </div>
  
  <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3498db;">
    <h3 style="color: #3498db; margin-top: 0;">📦 Thông tin đơn hàng</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="margin: 8px 0;"><strong>Mã đơn hàng:</strong> <span style="color: #e74c3c; font-weight: bold;">{{order_id}}</span></li>
      <li style="margin: 8px 0;"><strong>Gói sản phẩm:</strong> {{package_name}}</li>
      <li style="margin: 8px 0;"><strong>Giá:</strong> <span style="color: #e74c3c; font-weight: bold;">{{package_price}}</span></li>
      <li style="margin: 8px 0;"><strong>Ngày đặt:</strong> {{order_date}}</li>
    </ul>
  </div>
  
  <div style="background: #f8d7da; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #f5c6cb;">
    <p style="margin: 0; color: #721c24;"><strong>⚠️ Hành động cần thiết:</strong> Gọi điện cho khách hàng để xác nhận đơn hàng trong vòng 30 phút!</p>
  </div>
  
  <div style="text-align: center; margin: 30px 0;">
    <p style="color: #666; font-size: 14px; margin: 0;">
      Hệ thống tự động<br>
      <strong>Long Thành Phát Store Admin Panel</strong>
    </p>
  </div>
</div>
```

### **3.3. Lưu Template:**
1. **Click "Save"** (nút màu xanh)
2. **Copy Template ID** (có dạng: `template_admin123xyz`)
3. **Lưu lại** Template ID này

## 📋 **Bước 4: Cập Nhật Code**

Sau khi tạo xong 2 templates, hãy cập nhật file `src/services/emailService.ts`:

```typescript
const EMAILJS_TEMPLATE_ID = 'template_customer_abc123'; // Thay bằng Template ID thực tế
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_admin_xyz789'; // Thay bằng Template ID thực tế
```

## 🧪 **Bước 5: Test**

1. **Cập nhật Template IDs** trong code
2. **Chạy app:** `npm start`
3. **Điền form** → Submit
4. **Kiểm tra email** trong Gmail

## ⏱️ **Thời gian: ~10 phút**

**Sau khi hoàn thành, email sẽ hoạt động hoàn hảo!** 🚀✨
