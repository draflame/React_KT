import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold mb-3" style={{ color: '#a71d2a' }}>LIÊN HỆ</h5>
            <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 1,</p>
            <p>Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
            <p>Điện thoại: <a href="tel:02838940390-100" className="text-decoration-none text-dark">028 38940 390 - 100</a></p>
            <p>Tuyển sinh: <a href="tel:02839851932" className="text-decoration-none text-dark">028 3985 1932</a> - <a href="tel:02838955858" className="text-decoration-none text-dark">028 3895 5858</a> -</p>
            <p><a href="tel:02839851917" className="text-decoration-none text-dark">028 3985 1917</a></p>
            <p>Email: <a href="mailto:dhcn@iuh.edu.vn" className="text-decoration-none text-dark">dhcn@iuh.edu.vn</a></p>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold mb-3" style={{ color: '#a71d2a' }}>HOẠT ĐỘNG KHÁC</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Hoạt động phục vụ cộng đồng</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Sinh viên tình nguyện</a></li>
              <li><a href="#" className="text-decoration-none text-dark">CLB/Đội/Nhóm sinh viên</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Kết nối doanh nghiệp</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold mb-3" style={{ color: '#a71d2a' }}>THÔNG TIN MỞ RỘNG</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Báo chí viết về IUH</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Khám phá IUH</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Kỹ năng mềm</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Bộ sưu tập</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Dịch vụ sinh viên</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold mb-3" style={{ color: '#a71d2a' }}>VĂN BẢN TIỆN ÍCH</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Quy chế-Quy định-Quy trình</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Ba công khai</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Biểu mẫu đào tạo</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Quản lý khoa học</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Phản hồi</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;