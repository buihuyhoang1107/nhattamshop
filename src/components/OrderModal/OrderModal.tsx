import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { ProductPackage, CustomerInfo } from '../../types';
import './OrderModal.css';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  packages: ProductPackage[];
  onSubmit: (customerInfo: CustomerInfo, selectedPackage: string) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ 
  isOpen, 
  onClose, 
  packages, 
  onSubmit 
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
  
  const [selectedPackage, setSelectedPackage] = useState<string>('CB1');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    if (isOpen) {
      // Set countdown timer
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          } else if (prev.hours > 0) {
            return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          } else if (prev.days > 0) {
            return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
          }
          return prev;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(customerInfo, selectedPackage);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>MQG – BÍ QUYẾT PHỤC HỒI VÀ MỌC TÓC CHUYÊN SÂU</h2>
          <div className="discount-banner">
            <FontAwesomeIcon className="discount-icon" icon={faPercent} />
            <span className="discount-text">Giảm 40% hôm nay</span>
          </div>
          <p className="sale-text">Siêu Sale Chỉ Diễn Ra Trong</p>
          
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
        </div>

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
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <input
                  type="radio"
                  name="package"
                  value={pkg.id}
                  checked={selectedPackage === pkg.id}
                  onChange={() => setSelectedPackage(pkg.id)}
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
    </div>
  );
};

export default OrderModal;
