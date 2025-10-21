import React from 'react';
import { HairProblem, ProductBenefit } from '../../types';
import './Overview.css';

interface OverviewProps {
  hairProblems: HairProblem[];
  productBenefits: ProductBenefit[];
}

const Overview: React.FC<OverviewProps> = ({ hairProblems, productBenefits }) => {
  return (
    <div id="overview" className="overview">
      {/* Problems Section */}
      <div className="problems-section">
        <div className="problems-banner">
          <h2>Bạn đang gặp những vấn đề này?</h2>
        </div>
        
        <div className="problems-grid">
          {hairProblems.map((problem) => (
            <div key={problem.id} className="problem-item">
              <div className="problem-image">
                <img src={problem.image} alt={problem.title} />
              </div>
              <div className="problem-text">
                <p>{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <div className="arrows">↓↓↓</div>
          <div className="cta-banner">
            <h3>Hãy sử dụng ngay Dầu gội MQG</h3>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="product-showcase">
        <div className="showcase-grid">
          <div className="showcase-item">
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="Hair result 1" />
          </div>
          <div className="showcase-item">
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="Hair result 2" />
          </div>
        </div>
        <div className="showcase-logo">
          <div className="logo-circle">MQG</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2 className="benefits-title">
          <span className="red-text">LÝ DO KHIẾN BỘ COMBO</span>
          <span className="black-text">NHÀ MQG ĐƯỢC TIN DÙNG</span>
        </h2>
        
        {productBenefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
            <ul className="benefit-features">
              {benefit.features.map((feature, index) => (
                <li key={index} className="benefit-feature">
                  <span className="feature-icon">👉</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="benefit-images">
              {benefit.images.map((image, index) => (
                <img key={index} src={image} alt={`Benefit ${index + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hair Growth Section */}
      <div className="hair-growth-section">
        <div className="growth-card">
          <h3 className="growth-title">KÍCH THÍCH MỌC TÓC MỚI</h3>
          <p className="growth-description">
            Công thức kết hợp 3 dưỡng chất chuyên sâu giúp nang tóc yếu hoạt động trở lại, 
            tạo điều kiện cho tóc mới mọc lên từ chân tóc.
          </p>
          <p className="growth-description">
            Phù hợp với người tóc mỏng, tóc thưa hoặc từng gặp tình trạng rụng kéo dài.
          </p>
          <div className="growth-images">
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="Before treatment" />
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="After treatment" />
          </div>
        </div>
      </div>

      {/* Hair Quality Section */}
      <div className="hair-quality-section">
        <div className="quality-card">
          <h3 className="quality-title">TÓC ĐÀN HỒI, DÀY VÀ ĐẸP TỰ NHIÊN</h3>
          <div className="quality-description">
            <p className="quality-highlight">
              ⚡ Phục hồi tức thì – Hồi sinh mái tóc chỉ sau 1 lần gội!
            </p>
            <p>
              Không cần chờ đợi nhiều ngày, cảm nhận mái tóc khác biệt ngay từ lần đầu tiên.
            </p>
          </div>
          <div className="quality-images">
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="Hair thickness before" />
            <img src="/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg" alt="Hair thickness after" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
