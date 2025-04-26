import React from 'react';
import '../css/Header.css'; // Import file CSS cho header
import logo from '../assets/logo-iuh.png'; // Import logo (đường dẫn có thể khác)
import facebookIcon from '../assets/facebook.png'; // Import icon Facebook
import twitterIcon from '../assets/twitter.png'; // Import icon Twitter
import linkedinIcon from '../assets/linkedin.png'; // Import icon LinkedIn

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <p className="email">Email: dhcn@iuh.edu.vn</p>
        <img src={logo} alt="Logo IUH" className="logo" />
      </div>
      <div className="header-center">
        <p className="visits">
          <i className="fa fa-bar-chart"></i> Số lượt truy cập: 288,835,403
        </p>
        <p className="today-visits">
          <i className="fa fa-user"></i> Hôm nay: 21,756
        </p>
        <p className="online">
          <i className="fa fa-eye"></i> Đang xem: 104
        </p>
      </div>
      <div className="header-right">
        <p className="share">Chia sẻ:</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Header;