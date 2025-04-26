import React from 'react';
import '../css/NewsGrid.css';
import anh from '../assets/anh.png'; // Import hình ảnh (nếu cần)
const NewsGrid = () => {
  const sections = [
    {
      title: 'THÔNG BÁO',
      items: [
        { title: 'Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025', date: '24-04-2025', isNew: true },
        { title: 'Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội', date: '21-04-2025', isNew: true },
      ],
    },
    {
      title: 'TUYỂN SINH',
      items: [
        { title: 'Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình độ đại học', date: '28-03-2025' },
        { title: 'Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025', date: '20-03-2025' },
      ],
    },
    {
      title: 'TIN TỨC - SỰ KIỆN',
      items: [
        { image: '/path/to/your-image-1.png' },
        { title: 'AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp TP.HCM', date: '25-04-2025', isNew: true },
        { title: 'Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong sản xuất', date: '22-04-2025', isNew: true },
      ],
    },
    {
      title: 'HỢP TÁC QUỐC TẾ',
      items: [
        { image: '/path/to/your-image-2.png' },
        { title: 'Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc tế', date: '24-03-2025' },
        { title: 'Đại học Công nghiệp TP.HCM tham gia dự án Green Edu Seeds của quỹ Erasmus', date: '19-03-2025' },
      ],
    },
  ];

  return (
    <div className="news-grid">
      {sections.map((section, index) => (
        <div key={index} className="news-section">
          <div className="section-header">
            <h3>{section.title}</h3>
            <button className="view-all">xem tất cả</button>
          </div>
          <div className="section-content">
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="news-item">
                  {item.image ? (
                    <img src={anh} alt="news" className="news-image" />
                  ) : (
                    <>
                      <i className="bi bi-caret-right-fill text-danger me-1"></i>
                      <div className="news-text">
                        <p className="news-title">{item.title}</p>
                        <div className="news-meta">
                          <span className="news-date">{item.date}</span>
                          {item.isNew && <span className="news-new">new</span>}
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
