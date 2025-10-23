import React, { useState } from "react";
import "./CustomerFeedback.css";

const CustomerFeedback: React.FC = () => {
  const [feedbackScrollPosition, setFeedbackScrollPosition] = useState(0);

  const scrollFeedback = (direction: "left" | "right") => {
    const container = document.querySelector(
      ".feedback-slides-container"
    ) as HTMLElement;
    if (!container) return;

    const slideWidth = 200; // Width of each slide
    const slidesToScroll = 3; // Number of slides to scroll at once
    const scrollAmount = slideWidth * slidesToScroll;

    if (direction === "left") {
      setFeedbackScrollPosition((prev) => Math.max(0, prev - scrollAmount));
    } else {
      const maxScroll = container.scrollWidth - container.clientWidth;
      setFeedbackScrollPosition((prev) =>
        Math.min(maxScroll, prev + scrollAmount)
      );
    }

    container.scrollTo({
      left: feedbackScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="customer-feedback-section">
      <div className="feedback-header">
        <h2>Phản hồi từ khách hàng</h2>
        <p>Hàng nghìn khách hàng đã tin tưởng và hài lòng</p>
      </div>

      <div className="feedback-slider">
        <div className="feedback-slides-container">
          {Array.from({ length: 27 }, (_, index) => (
            <div key={index} className="feedback-slide">
              <img
                src={`/img/phanhoi/phanhoi (${index + 1}).jpg`}
                alt={`Phản hồi khách hàng ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="feedback-navigation">
          <button
            className="feedback-prev"
            onClick={() => scrollFeedback("left")}
          >
            ‹
          </button>
          <button
            className="feedback-next"
            onClick={() => scrollFeedback("right")}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
