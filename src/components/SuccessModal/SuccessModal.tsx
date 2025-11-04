import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SuccessModal.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
  customerName?: string;
  packageName?: string;
  price?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  orderId,
  customerName,
  packageName,
  price,
}) => {
  if (!isOpen) return null;

  return (
    <div className="success-modal-overlay" onClick={onClose}>
      <div className="success-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="success-modal-close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div className="success-modal-body">
          <div className="success-icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          
          <h2 className="success-title">Đặt hàng thành công!</h2>
          
          <p className="success-message">
            Cảm ơn bạn <strong>{customerName}</strong> đã tin tưởng lựa chọn đặt hàng tại Long Thanh Phat Shop!
          </p>
          
          {orderId && (
            <div className="success-info">
              <div className="info-item">
                <span className="info-label">Mã đơn hàng:</span>
                <span className="info-value">{orderId}</span>
              </div>
              {packageName && (
                <div className="info-item">
                  <span className="info-label">Gói sản phẩm:</span>
                  <span className="info-value">{packageName}</span>
                </div>
              )}
              {price && (
                <div className="info-item">
                  <span className="info-label">Tổng tiền:</span>
                  <span className="info-value price">{price}</span>
                </div>
              )}
            </div>
          )}
          
          <p className="success-note">
            Đơn hàng đã được ghi nhận, nhân viên chúng tôi sẽ gọi điện để xác nhận đơn trong 24 giờ và tiến hành giao hàng tận nơi.
            {/* Hãy thường xuyên kiểm tra điện thoại và hộp thư email (bao gồm cả Spam/Rác). Chúng tôi sẽ gửi quà tặng đặc biệt cho khách hàng đã mua hàng tới qua email mà bạn đã đăng ký. */}
          </p>
          
          <button className="success-close-button" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

