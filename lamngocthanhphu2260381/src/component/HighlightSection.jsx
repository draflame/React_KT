import React from 'react';
import '../css/HighlightSection.css'; // Import CSS cho component này
import quangNgaiImage from '../assets/anh.png'; 

function HighlightSection() {
  return (
    <div className="highlight-section">
      <div className="highlight-item">
        <h3 className="highlight-title">PHÂN HIỆU QUẢNG NGÃI</h3>
        <div className="image-container">
          <img src={quangNgaiImage} alt="Phân hiệu Quảng Ngãi" className="highlight-image" />
        </div>
      </div>
      <div className="highlight-item">
        <h3 className="highlight-title">CƠ SỞ THANH HÓA</h3>
        <div className="image-container">
          <img src={quangNgaiImage} alt="Cơ sở Thanh Hóa" className="highlight-image" />
        </div>
      </div>
      <div className="highlight-item video-item">
        <h3 className="highlight-title">VIDEO VÀ HÌNH ẢNH</h3>
        <div className="image-container">
          <img src={quangNgaiImage} alt="Video và Hình ảnh" className="highlight-image video-thumbnail" />
          <div className="play-button-overlay">
            {/* Bạn có thể sử dụng một icon play hoặc text */}
            {/* <img src={playIcon} alt="Play" className="play-icon" /> */}
            <div className="play-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <a href="#" className="view-all-link">xem tất cả</a>
      </div>
    </div>
  );
}

export default HighlightSection;