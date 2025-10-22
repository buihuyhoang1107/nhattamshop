import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { ProductPackage } from '../../types';
import './Suggestions.css';

interface SuggestionsProps {
  packages: ProductPackage[];
  onPackageSelect: (packageId: string) => void;
  selectedPackage: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({ 
  packages, 
  onPackageSelect, 
  selectedPackage 
}) => {
  return (
    <div id="suggestions" className="suggestions">
      <div className="suggestions-header">
        <h2>Gợi ý sản phẩm</h2>
        <p>Chọn gói sản phẩm phù hợp với nhu cầu của bạn</p>
      </div>

      <div className="packages-list">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`package-item ${selectedPackage === pkg.id ? 'selected' : ''}`}
            onClick={() => onPackageSelect(pkg.id)}
          >
            <div className="package-header">
              <input 
                type="radio" 
                name="package" 
                value={pkg.id}
                checked={selectedPackage === pkg.id}
                onChange={() => onPackageSelect(pkg.id)}
                className="package-radio"
              />
              <div className="package-info">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-badges">
                  {pkg.isHot && <span className="hot-badge">HOT</span>}
                  {pkg.isSuperDeal && <span className="super-deal-badge">SIÊU HỜI</span>}
                  {pkg.isFreeship && <span className="freeship-badge">FREESHIP</span>}
                </div>
              </div>
            </div>
            
            <div className="package-price">
              <span className="current-price">{pkg.price.toLocaleString()}₫</span>
              {pkg.originalPrice && (
                <span className="original-price">{pkg.originalPrice.toLocaleString()}₫</span>
              )}
            </div>
            
            <p className="package-description">{pkg.description}</p>
          </div>
        ))}
      </div>

      <div className="special-offer">
        <h3>Ưu đãi đặc biệt</h3>
        <div className="offer-item">
          <FontAwesomeIcon className="offer-icon" icon={faGift} />
          <span>Khách quen mua 5 cặp tặng 1 cặp + 3 xịt phục hồi</span>
        </div>
      </div>

      <div className="recommendations">
        <h3>Sản phẩm liên quan</h3>
        <div className="related-products">
          <div className="related-item">
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="Related product 1" />
            <h4>Dầu gội MQG - Gói cơ bản</h4>
            <p className="related-price">620.000₫</p>
          </div>
          <div className="related-item">
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="Related product 2" />
            <h4>Xịt phục hồi MQG</h4>
            <p className="related-price">275.000₫</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
