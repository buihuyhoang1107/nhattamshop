import React, { useState } from 'react';
import { ProductPackage, CustomerInfo } from '../../types';
import './OrderForm.css';

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
  showCountdown = false
}) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    phone: '',
    address: '',
    province: '',
    district: '',
    ward: '',
    email: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(customerInfo, selectedPackage);
  };

  return (
    <div className="order-form-container">
      {showHeader && (
        <div className="order-form-header">
          <h2>MQG – BÍ QUYẾT PHỤC HỒI VÀ MỌC TÓC CHUYÊN SÂU</h2>
          <div className="discount-banner">
            <span className="discount-text">Giảm 40% hôm nay</span>
          </div>
          <p className="sale-text">Siêu Sale Chỉ Diễn Ra Trong</p>
          
          {showCountdown && (
            <div className="countdown-timer">
              <div className="timer-box">
                <div className="timer-value">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="timer-label">Ngày</div>
              </div>
              <div className="timer-box">
                <div className="timer-value">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="timer-label">Giờ</div>
              </div>
              <div className="timer-box">
                <div className="timer-value">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="timer-label">Phút</div>
              </div>
              <div className="timer-box">
                <div className="timer-value">{timeLeft.seconds.toString().padStart(2, '0')}</div>
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
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="tel"
            value={customerInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Địa chỉ</label>
          <input
            type="text"
            value={customerInfo.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Tỉnh/Thành phố</label>
            <select
              value={customerInfo.province}
              onChange={(e) => handleInputChange('province', e.target.value)}
              required
            >
              <option value="">Chọn tỉnh/thành phố</option>
              <option value="hanoi">Hà Nội</option>
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="danang">Đà Nẵng</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quận/Huyện</label>
            <select
              value={customerInfo.district}
              onChange={(e) => handleInputChange('district', e.target.value)}
              required
            >
              <option value="">Chọn quận/huyện</option>
              <option value="quan1">Quận 1</option>
              <option value="quan2">Quận 2</option>
              <option value="quan3">Quận 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Phường/Xã</label>
            <select
              value={customerInfo.ward}
              onChange={(e) => handleInputChange('ward', e.target.value)}
              required
            >
              <option value="">Chọn phường/xã</option>
              <option value="phuong1">Phường 1</option>
              <option value="phuong2">Phường 2</option>
              <option value="phuong3">Phường 3</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>NHẬP EMAIL TẠI ĐÂY ĐỂ NHẬN QUÀ TẶNG ĐẶC BIỆT</label>
          <input
            type="email"
            value={customerInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>

        <div className="packages-section">
          <h3>Chọn gói sản phẩm</h3>
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`package-option ${selectedPackage === pkg.id ? 'selected' : ''}`}
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
                  {pkg.isSuperDeal && <span className="super-deal-badge">SIÊU HỜI</span>}
                  {pkg.isFreeship && <span className="freeship-badge">FREESHIP</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="submit-btn">
          HOÀN TẤT ĐẶT HÀNG
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
