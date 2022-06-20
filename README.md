# unit-test-and-coverage-with-jest
Điều kiện: Đã cài đặt PostgreSQL phiên bản mới nhất
Bước 1: Sau khi clone source code về máy local, cài đặt các dependency với câu lệnh 
npm i
Bước 2: Mở file config.js nằm ở thư mục config. Sau đó đặt lại username, password, 
host (nếu host khác local) đã cấu hình cho PostgreSQL
Bước 3: Khởi tạo database tên StoreService với câu lệnh: npx sequelize-cli db:create
Bước 4: Migrate các table và tạo dữ liệu giả. Lần lược chạy hai câu lệnh npm run migrate 
và npm run seed. Lưu ý phải tạo trước dữ liệu giả do các API không có thực hiện 
authentication.
Bước 5: Chạy server express với câu lệnh npm star
