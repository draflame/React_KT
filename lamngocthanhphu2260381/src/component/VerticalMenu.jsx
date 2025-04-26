import React, { useState } from 'react';
import '../css/VerticalMenu.css'; // Import file CSS (tùy chọn)

const menuData = [
  {
    label: 'LÃNH ĐẠO',
    submenu: [
      { label: 'Ban Giám đốc' },
      { label: 'Hội đồng trường' },
    ],
  },
  {
    label: 'CÁC PHÒNG BAN',
    submenu: [
      { label: 'Phòng Đào tạo' },
      { label: 'Phòng Tổ chức - Hành chính' },
      { label: 'Phòng Kế hoạch - Tài chính' },
      { label: 'Phòng Công tác Sinh viên' },
      { label: 'Phòng Hợp tác Quốc tế' },
      { label: 'Trung tâm Thông tin - Thư viện' },
      { label: 'Các phòng ban khác...' },
    ],
  },
  {
    label: 'CÁC KHOA',
    submenu: [
      { label: 'Khoa Công nghệ Thông tin' },
      { label: 'Khoa Điện - Điện tử' },
      { label: 'Khoa Cơ khí' },
      { label: 'Khoa Xây dựng' },
      { label: 'Khoa Kinh tế' },
      { label: 'Các khoa khác...' },
    ],
  },
  {
    label: 'CÁC VIỆN',
    submenu: [
      { label: 'Viện Nghiên cứu Ứng dụng' },
      { label: 'Viện Đào tạo Sau đại học' },
      { label: 'Các viện khác...' },
    ],
  },
  {
    label: 'CÁC TRUNG TÂM',
    submenu: [
      { label: 'Trung tâm Ngoại ngữ' },
      { label: 'Trung tâm Tin học' },
      { label: 'Trung tâm Tư vấn Tuyển sinh' },
      { label: 'Các trung tâm khác...' },
    ],
  },
  {
    label: 'CÁC PHÂN HIỆU',
    submenu: [
      { label: 'Phân hiệu 1' },
      { label: 'Phân hiệu 2' },
      { label: 'Các phân hiệu khác...' },
    ],
  },
  {
    label: 'ĐOÀN THỂ',
    submenu: [
      { label: 'Đoàn Thanh niên' },
      { label: 'Hội Sinh viên' },
      { label: 'Công đoàn trường' },
      { label: 'Các đoàn thể khác...' },
    ],
  },
];

const VerticalMenuItem = ({ item }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const handleToggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  return (
    <div className="vertical-menu-item">
      <div className="item-header" onClick={handleToggleSubmenu}>
        {item.label}
        {item.submenu && <span className="arrow">{'>'}</span>}
      </div>
      {item.submenu && (
        <ul className={`submenu ${isSubmenuVisible ? 'visible' : ''}`}>
          {item.submenu.map((subItem, index) => (
            <li key={index} className="submenu-item">
              {subItem.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const VerticalMenu = () => {
  return (
    <div className="vertical-menu">
      <h2 className="menu-title">CƠ CẤU TỔ CHỨC</h2>
      {menuData.map((item, index) => (
        <VerticalMenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default VerticalMenu;