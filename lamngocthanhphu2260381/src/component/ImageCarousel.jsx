import React from 'react';

import carouselImage from '../assets/carrousel.png'; // Đường dẫn đến ảnh carousel của bạn

const images = [carouselImage, carouselImage, carouselImage]; 
function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Thay đổi ảnh sau mỗi 3 giây
  
      return () => clearInterval(interval); // Cleanup khi component unmount
    }, []);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    return (
      <div className="simple-carousel">
        <button className="carousel-button prev" onClick={goToPrevious}>
          &lt;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-button next" onClick={goToNext}>
          &gt;
        </button>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
}

export default ImageCarousel;