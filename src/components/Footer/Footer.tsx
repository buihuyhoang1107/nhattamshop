import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

interface FooterProps {
  onStoreClick: () => void;
  onChatClick: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onStoreClick, 
  onChatClick, 
  onAddToCart, 
  onBuyNow 
}) => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <button className="footer-btn" onClick={onStoreClick}>
          <FontAwesomeIcon className="footer-icon" icon={faStore} />
          <span className="footer-text">Cửa hàng</span>
        </button>
        
        <button className="footer-btn" onClick={onChatClick}>
          <FontAwesomeIcon className="footer-icon chat-icon" icon={faPhone} />
          <span className="footer-text">Trò chuyện</span>
        </button>
      </div>
      
      <div className="footer-right">
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Thêm vào Giỏ hàng
        </button>
        
        <button className="buy-now-btn" onClick={onBuyNow}>
          MUA NGAY
        </button>
      </div>
    </footer>
  );
};

export default Footer;
