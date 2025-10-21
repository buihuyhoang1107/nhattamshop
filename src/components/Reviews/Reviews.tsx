import React from "react";
import { Review } from "../../types";
import "./Reviews.css";

interface ReviewsProps {
  reviews: Review[];
  overallRating: number;
  totalReviews: number;
}

const Reviews: React.FC<ReviewsProps> = ({
  reviews,
  overallRating,
  totalReviews,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div id="reviews" className="reviews">
      <div className="reviews-header">
        <h2 className="reviews-title">
          Đánh giá của khách hàng ({totalReviews} bình luận)
        </h2>
        <div className="overall-rating">
          <div className="rating-score">{overallRating}/5</div>
          <div className="rating-stars">
            {renderStars(Math.floor(overallRating))}
          </div>
          <button className="see-more">
            Xem thêm
          </button>
        </div>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="user-info">
                <img
                  src={review.userAvatar}
                  alt={review.userName}
                  className="user-avatar"
                />
                <span className="user-name">{review.userName}</span>
              </div>
              <div className="review-rating">{renderStars(review.rating)}</div>
            </div>

            <div className="review-details">
              <div className="item-detail">Mặt hàng: {review.itemDetail}</div>
            </div>

            <div className="review-comment">
              <p>{review.comment}</p>
            </div>

            {review.images && review.images.length > 0 && (
              <div className="review-images">
                {review.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Review ${index + 1}`}
                    className="review-image"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
