import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTrophy, faCreditCard, faArrowsRotate, faComments, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from "../../types";
import "./ProductInfo.css";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="product-info">
      <div className="product-badges">
        <span className="sale-badge">Sale sốc !!!</span>
        <span className="mall-badge">Mall</span>
        <span className="product-title">{product.title}</span>
      </div>

      <div className="product-rating">
        <div className="rating-info">
          <FontAwesomeIcon className="stars" icon={faStar} />
          <span className="rating-score">{product.rating}/5</span>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        <div className="sold-info">| Đã bán {product.soldCount}</div>
        <FontAwesomeIcon className="shipping-icon" icon={faTruck} />
        <span className="shipping-text">Miễn phí vận chuyển</span>
      </div>

      {product.isTopProduct && (
        <div className="top-product-banner">
          <FontAwesomeIcon className="trophy-icon" icon={faTrophy} />
          <span className="banner-text">Sản phẩm hàng đầu</span>
          <span>- Chăm sóc & phục hồi tóc hiệu quả</span>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>
      )}

      <div className="product-features">
        <div className="feature-item">
          <FontAwesomeIcon className="feature-icon" icon={faCreditCard} />
          <span>Thanh toán bảo mật</span>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon className="feature-icon" icon={faArrowsRotate} />
          <span>Đổi trả dễ dàng</span>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon className="feature-icon" icon={faComments} />
          <span>Đội ngũ hỗ trợ TikTok</span>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>
      </div>

      <div className="quantity-section">
        <span className="section-title">Số lượng</span>
        <button className="quantity-btn">1 cặp</button>
        <button className="quantity-btn">2 cặp</button>
      </div>

      <div className="payment-section">
        <h3 className="section-title">Hình thức thanh toán</h3>
        <div className="cod-badge">COD</div>
        <span className="cod-text">Thanh toán bằng tiền mặt (COD)</span>
      </div>

      <div className="shipping-section">
        <div className="shipping-cost">
          <h3 className="section-title">Vận chuyển</h3>
          <div className="shipping-cost-text">
            <span className="original-cost">40.000₫</span>
            <span className="free-shipping">Free</span>
          </div>
        </div>
        <button className="shipping-voucher">Phiếu giảm giá vận chuyển</button>
        <div className="shipping-cost-text">
          <div className="shipping-rules">
            <span>
              Giảm 5000₫ phí vận chuyển đối với các đơn hàng trị giá 25000đ trở
              lên
            </span>
            <span>
              Giảm 25000₫ phí vận chuyển đối với các đơn hàng trị giá 80.000₫
              trở lên
            </span>
          </div>
        </div>

        <div className="shipping-details">
          <p>Giao hàng từ Hà Nội</p>
          <p>Thời gian giao hàng dự kiến: 2 - 4 ngày</p>
        </div>
      </div>

      <div className="return-policy">
        <h3 className="section-title">Chính sách đổi trả</h3>
        <p>Trả hàng trong vòng 3 ngày. Kiểm tra hàng trước khi thanh toán</p>
      </div>
      <div>
        <button className="buy-now-btn">Mua Ngay</button>
      </div>
    </div>
  );
};

export default ProductInfo;
