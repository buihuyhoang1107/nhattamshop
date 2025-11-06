import React from 'react';
import ReactDOM from 'react-dom';
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
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      const originalPosition = document.body.style.position;
      const originalWidth = document.body.style.width;
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.position = originalPosition;
        document.body.style.width = originalWidth;
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
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

  // Use React Portal to render modal outside the component tree
  // Fallback to regular render if document.body is not available
  if (typeof document !== 'undefined' && document.body) {
    return ReactDOM.createPortal(modalContent, document.body);
  }
  
  return modalContent;
};

export default SuccessModal;

