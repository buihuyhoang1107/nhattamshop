import React from 'react';
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
          <span className="footer-icon">🏪</span>
          <span className="footer-text">Cửa hàng</span>
        </button>
        
        <button className="footer-btn" onClick={onChatClick}>
          <span className="footer-icon chat-icon">📞</span>
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
