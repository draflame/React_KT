import React, { useState } from 'react';
import "../css/Menu.css";
import home from "../assets/image.png"; // Import hình ảnh (nếu cần)

const menuItems = [
  {
    label: 'Giới thiệu',
    submenu: [
      { label: 'Giới thiệu chung' },
      { label: 'Tầm nhìn - Sứ mạng - Mục tiêu chiến lược' },
      { label: 'Triết lý giáo dục' },
      { label: 'Phương châm hoạt động' },
      { label: 'Giá trị cốt lõi' },
      { label: 'Chương trình học' },
      { label: 'Học phí' },
      { label: 'Thành tích nổi bật' },
    ],
  },
  {
    label: 'Đào tạo',
    submenu: [
      { label: 'Sản phẩm 1' },
      { label: 'Sản phẩm 2' },
      {
        label: 'Danh mục con',
        submenu: [
          { label: 'Mục lục 1' },
          { label: 'Mục lục 2' },
        ],
      },
    ],
  },
  { label: 'Tuyển sinh' },
  { label: 'Nghiên cứu' },
  { label: 'Sinh viên' },
  { label: 'Giảng viên' },
  { label: 'Văn bằng' },
];

const SubmenuItem = ({ item }) => {
  return (
    <li className="submenu-item">
      {item.label}
      {item.submenu && (
        <ul className="submenu">
          {item.submenu.map((subItem, subIndex) => (
            <SubmenuItem key={subIndex} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MenuItem = ({ item }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const handleMouseEnter = () => {
    if (item.submenu) {
      setIsSubmenuVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.submenu) {
      setIsSubmenuVisible(false);
    }
  };

  return (
    <li
      className={`menu-item ${item.submenu ? 'has-submenu' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.label}
      {item.submenu && (
        <ul className={`submenu ${isSubmenuVisible ? 'visible' : ''}`}>
          {item.submenu.map((subItem, subIndex) => (
            <SubmenuItem key={subIndex} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu = () => {
  return (
    <ul className="menu">
      {/* <li className="menu-item">
        <img src={home} alt="Home" className="home-icon" />
      </li> */}
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
      <li>
        <input type="text" placeholder="Tìm kiếm" /> {/* Thêm placeholder cho input */}
      </li>
    </ul>
  );
};

export default Menu;