# SauceDemo Cypress Test Suite

Đây là bộ kiểm thử tự động được viết bằng [Cypress](https://www.cypress.io/) để kiểm tra các chức năng chính của trang web [SauceDemo](https://www.saucedemo.com), một trang mẫu dùng cho việc học và thực hành kiểm thử phần mềm.

## Yêu cầu trước khi chạy bài kiểm thử
- Đã cài đặt Node.js (phiên bản 14 hoặc cao hơn).
- Đã cài đặt Cypress trong thư mục dự án (node_modules/cypress).
- Có thể truy cập trang web https://www.saucedemo.com (kiểm tra kết nối Internet).
- Nên sử dụng Visual Studio Code hoặc IDE hỗ trợ JavaScript để dễ dàng thao tác.
  
## Các chức năng kiểm thử

### Login Test (`login_spec.cy.js`)
- **Đăng nhập thành công:** Sử dụng tài khoản hợp lệ `standard_user`.
- **Đăng nhập thất bại:** Nhập sai tài khoản và kiểm tra hiển thị thông báo lỗi.

### Cart Test (`cart_spec.cy.js`)
- **Thêm sản phẩm vào giỏ hàng**
- **Xóa sản phẩm khỏi giỏ hàng**
- **Sắp xếp sản phẩm theo giá từ thấp đến cao**
- **Thực hiện bước đầu tiên của quy trình thanh toán**

---

## Hướng dẫn chạy kiểm thử

### 1. Clone hoặc tải dự án về

```bash
git clone git@github.com:vanbeo1234/ktpm-cypress-exercise.git
cd your-cypress-project
```

---
## Video Demo

[![Watch the demo](https://img.youtube.com/vi/JCWV7wUXaTc/0.jpg)](https://youtu.be/JCWV7wUXaTc)