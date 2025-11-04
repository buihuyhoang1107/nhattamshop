import React, { useState } from "react";
import {
  getDistrictsByProvince,
  getProvinces,
  getWardsByDistrict,
} from "../../data/vietnamAddresses";
// Direct PHP email sending
import { CustomerInfo, ProductPackage } from "../../types";
import SuccessModal from "../SuccessModal/SuccessModal";
import "./OrderForm.css";

interface OrderFormProps {
  packages: ProductPackage[];
  selectedPackage: string;
  onPackageSelect: (packageId: string) => void;
  onSubmit: (customerInfo: CustomerInfo, selectedPackage: string) => void;
  showHeader?: boolean;
  showCountdown?: boolean;
}

const OrderForm: React.FC<OrderFormProps> = ({
  packages,
  selectedPackage,
  onPackageSelect,
  onSubmit,
  showHeader = false,
  showCountdown = false,
}) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    email: "",
  });

  const [availableDistricts, setAvailableDistricts] = useState<any[]>([]);
  const [availableWards, setAvailableWards] = useState<any[]>([]);
  const [provinces, setProvinces] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successData, setSuccessData] = useState<{
    orderId: string;
    customerName: string;
    packageName: string;
    price: string;
  } | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Load provinces on component mount
  React.useEffect(() => {
    const loadProvinces = async () => {
      setLoading(true);
      try {
        const provincesData = await getProvinces();
        setProvinces(provincesData);
      } catch (error) {
        console.error("Error loading provinces:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProvinces();
  }, []);

  React.useEffect(() => {
    if (showCountdown) {
      const calculateTimeLeft = () => {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const timeDiff = endOfDay.getTime() - now.getTime();

        if (timeDiff <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      };

      // Set initial time
      setTimeLeft(calculateTimeLeft());

      // Update every second
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showCountdown]);

  const handleInputChange = async (
    field: keyof CustomerInfo,
    value: string
  ) => {
    setCustomerInfo((prev) => {
      const newInfo = {
        ...prev,
        [field]: value,
      };

      // Handle province change
      if (field === "province") {
        setLoading(true);
        getDistrictsByProvince(value)
          .then((districts) => {
            setAvailableDistricts(districts);
            setAvailableWards([]);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error loading districts:", error);
            setLoading(false);
          });
        newInfo.district = "";
        newInfo.ward = "";
      }

      // Handle district change
      if (field === "district") {
        setLoading(true);
        getWardsByDistrict(value)
          .then((wards) => {
            setAvailableWards(wards);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error loading wards:", error);
            setLoading(false);
          });
        newInfo.ward = "";
      }

      return newInfo;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get selected package details
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
    if (!selectedPkg) {
      alert('Vui lòng chọn gói sản phẩm!');
      return;
    }
    
    setLoading(true);
    
    // Prepare email data - Convert codes to names
    const provinceName = provinces.find(p => p.code.toString() === customerInfo.province)?.name || customerInfo.province;
    const districtName = availableDistricts.find(d => d.code.toString() === customerInfo.district)?.name || customerInfo.district;
    const wardName = availableWards.find(w => w.code.toString() === customerInfo.ward)?.name || customerInfo.ward;
    
    const orderId = `ORD-${Date.now()}`;
    const formattedPrice = selectedPkg.price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
    
    const fullAddress = `${customerInfo.address}, ${wardName}, ${districtName}, ${provinceName}`;
    
    try {
      // Send confirmation email to customer
      const customerEmailContent = `
        <h2>Xác nhận đơn hàng</h2>
        <p>Xin chào ${customerInfo.fullName},</p>
        <p>Cảm ơn bạn đã đặt hàng tại Long Thanh Phat Shop!</p>
        
        <h3>Thông tin đơn hàng:</h3>
        <ul>
          <li><strong>Mã đơn hàng:</strong> ${orderId}</li>
          <li><strong>Gói sản phẩm:</strong> ${selectedPkg.name}</li>
          <li><strong>Giá:</strong> ${formattedPrice}</li>
          <li><strong>Ngày đặt:</strong> ${new Date().toLocaleString('vi-VN')}</li>
        </ul>
        
        <h3>Thông tin giao hàng:</h3>
        <ul>
          <li><strong>Tên:</strong> ${customerInfo.fullName}</li>
          <li><strong>Số điện thoại:</strong> ${customerInfo.phone}</li>
          <li><strong>Email:</strong> ${customerInfo.email}</li>
          <li><strong>Địa chỉ:</strong> ${fullAddress}</li>
        </ul>
        
        <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.</p>
        <p>Trân trọng,<br>Long Thanh Phat Shop</p>
      `;
      
      await sendEmailViaPHP({
        to: customerInfo.email,
        toName: customerInfo.fullName,
        from: 'admin@longthanhphat.store',
        fromName: 'Long Thanh Phat Shop',
        subject: `Xác nhận đơn hàng ${orderId}`,
        message: customerEmailContent,
        isHtml: true
      });
      
      // Send notification to admin
      const adminEmailContent = `
        <h2>Thông báo đơn hàng mới</h2>
        <h3>Thông tin khách hàng:</h3>
        <ul>
          <li><strong>Tên:</strong> ${customerInfo.fullName}</li>
          <li><strong>Số điện thoại:</strong> ${customerInfo.phone}</li>
          <li><strong>Email:</strong> ${customerInfo.email}</li>
          <li><strong>Địa chỉ:</strong> ${fullAddress}</li>
        </ul>
        
        <h3>Thông tin đơn hàng:</h3>
        <ul>
          <li><strong>Mã đơn hàng:</strong> ${orderId}</li>
          <li><strong>Gói sản phẩm:</strong> ${selectedPkg.name}</li>
          <li><strong>Giá:</strong> ${formattedPrice}</li>
          <li><strong>Ngày đặt:</strong> ${new Date().toLocaleString('vi-VN')}</li>
        </ul>
        
        <p>Vui lòng liên hệ với khách hàng để xác nhận đơn hàng.</p>
        <p>Hệ thống Long Thanh Phat Shop</p>
      `;
      
      await sendEmailViaPHP({
        to: 'admin@longthanhphat.store',
        toName: 'Admin',
        from: customerInfo.email,
        fromName: customerInfo.fullName,
        subject: `Đơn hàng mới ${orderId} từ ${customerInfo.fullName}`,
        message: adminEmailContent,
        isHtml: true
      });
      
      // Track Facebook Pixel Purchase event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          value: selectedPkg.price,
          currency: 'VND',
          content_name: selectedPkg.name,
        });
      }
      
      // Prepare success modal data
      setSuccessData({
        orderId,
        customerName: customerInfo.fullName,
        packageName: selectedPkg.name,
        price: formattedPrice,
      });
      
      // Show success modal
      setShowSuccessModal(true);
      
      // Call original onSubmit
      onSubmit(customerInfo, selectedPackage);
      setLoading(false);
      
    } catch (error) {
      console.error('Error sending emails:', error);
      setLoading(false);
      
      // Track Facebook Pixel Purchase event even if email fails
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          value: selectedPkg.price,
          currency: 'VND',
          content_name: selectedPkg.name,
        });
      }
      
      // Prepare success modal data
      const orderId = `ORD-${Date.now()}`;
      const formattedPrice = selectedPkg.price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
      });
      
      setSuccessData({
        orderId,
        customerName: customerInfo.fullName,
        packageName: selectedPkg.name,
        price: formattedPrice,
      });
      
      // Show success modal
      setShowSuccessModal(true);
      
      onSubmit(customerInfo, selectedPackage);
    }
  };

  // Function to send email via PHP script
  const sendEmailViaPHP = async (emailData: {
    to: string;
    toName: string;
    from: string;
    fromName: string;
    subject: string;
    message: string;
    isHtml: boolean;
  }) => {
    try {
      const response = await fetch('https://longthanhphat.store/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });
      
      if (response.ok) {
        const result = await response.json();
        return result.success;
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('PHP email send failed:', error);
      return false;
    }
  };

  return (
    <div className="order-form-container">
      {showHeader && (
        <div className="order-form-header">
          <h2>Minoxidil 5% ,Sản Phẩm Kích Thích Mọc Râu - Mọc Tóc - Mọc Lông Mày Và Lông Cơ Thể</h2>
          <div className="discount-banner">
            <span className="discount-text">Giảm 40% hôm nay</span>
          </div>
          <p className="sale-text">Siêu Sale Chỉ Diễn Ra Trong</p>

          {showCountdown && (
            <div className="countdown-timer">
              <div className="timer-box">
                <div className="timer-value">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="timer-label">Ngày</div>
              </div>
              <div className="timer-box">
                <div className="timer-value">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="timer-label">Giờ</div>
              </div>
              <div className="timer-box">
                <div className="timer-value">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="timer-label">Phút</div>
              </div>
              <div className="timer-box">
                <div className="timer-value">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="timer-label">Giây</div>
              </div>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <label>Họ và tên</label>
          <input
            type="text"
            value={customerInfo.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="tel"
            value={customerInfo.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Địa chỉ</label>
          <input
            type="text"
            value={customerInfo.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Tỉnh/Thành phố</label>
            <select
              value={customerInfo.province}
              onChange={(e) => handleInputChange("province", e.target.value)}
              required
              disabled={loading}
            >
              <option value="">
                {loading ? "Đang tải..." : "Chọn tỉnh/thành phố"}
              </option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Quận/Huyện</label>
            <select
              value={customerInfo.district}
              onChange={(e) => handleInputChange("district", e.target.value)}
              required
              disabled={!customerInfo.province || loading}
            >
              <option value="">
                {loading ? "Đang tải..." : "Chọn quận/huyện"}
              </option>
              {availableDistricts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Phường/Xã</label>
            <select
              value={customerInfo.ward}
              onChange={(e) => handleInputChange("ward", e.target.value)}
              required
              disabled={!customerInfo.district || loading}
            >
              <option value="">
                {loading ? "Đang tải..." : "Chọn phường/xã"}
              </option>
              {availableWards.map((ward) => (
                <option key={ward.code} value={ward.code}>
                  {ward.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>NHẬP EMAIL TẠI ĐÂY ĐỂ NHẬN QUÀ TẶNG</label>
          <input
            type="email"
            value={customerInfo.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        <div className="packages-section">
          <h3>Chọn gói sản phẩm</h3>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-option ${
                selectedPackage === pkg.id ? "selected" : ""
              }`}
              onClick={() => onPackageSelect(pkg.id)}
            >
              <input
                type="radio"
                name="package"
                value={pkg.id}
                checked={selectedPackage === pkg.id}
                onChange={() => onPackageSelect(pkg.id)}
              />
              <div className="package-info">
                <span className="package-name">{pkg.name}</span>
                <div className="package-badges">
                  {pkg.isHot && <span className="hot-badge">HOT</span>}
                  {pkg.isSuperDeal && (
                    <span className="super-deal-badge">SIÊU HỜI</span>
                  )}
                  {pkg.isFreeship && (
                    <span className="freeship-badge">FREESHIP</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Đang xử lý...' : 'HOÀN TẤT ĐẶT HÀNG'}
        </button>
      </form>
      
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        orderId={successData?.orderId}
        customerName={successData?.customerName}
        packageName={successData?.packageName}
        price={successData?.price}
      />
    </div>
  );
};

export default OrderForm;
