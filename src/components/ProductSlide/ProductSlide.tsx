import React, { useState } from 'react';
import './ProductSlide.css';

interface ProductSlideProps {
  images: string[];
}

const ProductSlide: React.FC<ProductSlideProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="product-slide">
      <div className="slide-container">
        <button className="slide-arrow slide-arrow-left" onClick={prevSlide}>
          ‹
        </button>
        
        <div className="slide-wrapper">
          <div 
            className="slide-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide-item">
                <img src={image} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <button className="slide-arrow slide-arrow-right" onClick={nextSlide}>
          ›
        </button>
      </div>
      
      {/* Thumbnail navigation */}
      <div className="slide-thumbnails">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlide;
