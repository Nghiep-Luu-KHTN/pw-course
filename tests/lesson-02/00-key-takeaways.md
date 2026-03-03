# Version Control System
1. **Version Control System** = Hê thống quản lý phiên bản

2. **Types of Version Control System:**
   - Local Version Control System: lưu ở máy tính cá nhân
   - Centralized Version Control System: lưu ở máy chủ tập trung
   - Distributed Version Control System: lưu ở nhiều máy tính khác nhau

# Git 
1. **Git** = Hệ thống quản lý phiên bản phân tán

2. **So sánh  Git với VSC khác:**
   - Tính năng: Dễ dùng, có nhiều tính năng mạnh mẽ: branching, tốc độ nhanh, hỗ trợ làm việc nhóm tốt
   - Chi phí: Miễn phí, mã nguồn mở
   - Phổ biến: nhiều công ty sừ dụng

3. **Git & GitHub:**
| Git | GitHub |
| --- | --- |
| Là 1 phần mềm | Là 1  dịch vụ web |
| Cài đặt trên máy của bạn | Host trên website |
| Là 1 command line tool | Là 1 công cụ giao diện người dùng (GUI) |
| Là công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi để upload Git repository lên |
| Có các tính năng của Version Control System | Có các tính năng của Version Control System và 1 số tính năng khác (GitHub Actions, GitHub Co-Pilot, ...) |

4. **Git: Three states**
   - Working  Directory: nơi bạn làm việc, chỉnh sửa file
    - Staging Area: nơi bạn chuẩn bị file để commit
    - Repository: Các commit (phiên bản)

5. **Tổng kết:**
   - Khởi tạo Git repository: `git init`
   - Tạo repo GitHub và liên kết với repo local: `git remote add origin <url>`
   - Thêm file vào staging area: `git add .`
   - Commit file: `git commit -m "message"`
   - Push code: `git push origin main`

6. **Một số câu lệnh**
   -  Xem trạng thái: `git status` --> màu xanh: vùng stsging area, màu đỏ: working directory
   - Kiểm tra lịch sử commit: `git log`

7. **Commit convention**
   - Cấu trúc: `<type>: <short description>`
   - Type: chore, feat, fix,..
      -  chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
      - feat: thêm tính năng mới, test case mới,...
      - fix: sửa lỗi, sửa bug,...
   - Short description: mô tả ngắn gọn về commit (50 kí tự)

# JavaScript basic
1. **JavaScript** = ngôn ngữ lập trình được sử dụng để tạo ra các trang web động, tương tác với người dùng, và xây dựng ứng dụng web.

2. **Comment**
   - Là cách vô hieu hóa code, giúp người khác hiểu được ý định của bạn khi viết code đó.
   - Cách viết comment:
      - Comment 1 dòng: `// This is a single-line comment`
      - Comment nhiều dòng: 
      ```
      /* This is a 
         multi-line comment */
      ```
3. **Biến, Hằng**
   - **Khai báo biến:**
   <từ khóa> <tên biến> = <giá trị>;
   - Từ khóa: var, let, const
      - var: có thể khai báo lại và gán lại giá trị, phạm vi toàn cục hoặc phạm vi hàm
      - let: có thể gán lại giá trị nhưng không thể khai báo lại, phạm vi khối
      - const: không thể khai báo lại và gán lại giá trị, phạm vi khối

      - var centerName = "HCMUS";
      - let isLove = true;

      Sử dụng:
      - console.log(centerName); // HCMUS
      - console.log(isLove); // true

   - **Hằng số:** là các giá trị không thể thay đổi được
      - Hằng dùng để khai báo các giá trị cố định, không thay đổi trong suốt chương trình
      - **Khai báo hằng:**
      <từ khóa> <tên hằng> = <giá trị>;
      - Từ khóa: const
      - Ví dụ:
         - const PI = 3.14;

4. **Khi nào dùng biến, khi nào dùng hằng?**
   - Mặc định dùng **const** - giúp code an toàn hơn, dễ đọc hơn
   - Chỉ dùng **let** khi bạn biết giá trị sẽ thay đổi trong tương lai
   - Không dùng **var**

5. **Kiểu dữ liệu**
   - Là loại dữ liệu mà biến đó đang mang
   - Trong JS, có 8 kiểu dữ liệu, chia làm 2 nhóm:
      - Kiểu nguyên thủy (Primitive types):
         - string
         - number
         - boolean
         - null
         - undefined
         - symbol
         - bigInt
      - Kiểu tham chiếu (Reference types):
         - object (array, function,...)
   
   1. **Làm sao để biết một biến có kiểu dữ liệu gì?**
      - Sử dụng hàm `typeof`
      - typeof <tên biến>
      - Output: Number || String || Boolean || Object || Undefined || Null || Symbol || BigInt
      - Ví dụ:
         - console.log(typeof centerName); // string
         - console.log(typeof isLove); // boolean
         - console.log(typeof PI); // number

6. **Toán tử so sánh**
   - Dùng để so sánh 2 toán hạng, kết quả trả về là true hoặc false
   - Chia làm 3 nhóm:
      - Toán tử so sánh bằng: ==, ===
         - ==: so sánh giá trị, không so sánh kiểu dữ liệu
         - ===: so sánh giá trị và kiểu dữ liệu
      - Toán tử so sánh không bằng: !=, !==
         - !=: so sánh giá trị, không so sánh kiểu dữ liệu
         - !==: so sánh giá trị và kiểu dữ liệu
      - Toán tử so sánh khác: >, <, >=, <=
   - **Luôn dùng so sánh bằng === và !== để tránh lỗi không mong muốn do kiểu dữ liệu**

7. **Toán tử logic**
   - Dùng để kết hợp nhiều điều kiện lại với nhau và trả về kết quả là true hoặc false
   - Có 3 toán tử logic:
      - && (AND): trả về true nếu cả 2 điều kiện đều đúng
      - || (OR): trả về true nếu ít nhất 1 điều kiện đúng
      - ! (NOT): đảo ngược giá trị của điều kiện, nếu điều kiện đúng thì trả về false, ngược lại trả về true

8. **Toán tử một ngôi**
   - Dùng để thao tác với một toán hạng duy nhất
   - Có 2 toán tử một ngôi:
      - ++ (increment): tăng giá trị của biến lên 1 đơn vị
      - -- (decrement): giảm giá trị của biến xuống 1 đơn vị
   - Hai loại:
      - Prefix: toán tử nằm trước biến, thực hiện phép toán trước khi trả về giá trị
         - ++x;
         - --x;
      - Postfix: toán tử nằm sau biến, trả về giá trị trước khi thực hiện phép toán
         - x++;
         - x--;

9. **Toán tử toán học**
   - Dùng để thao tác với nhiều toán hạng: `+, -, *, /, %`

10. **Câu điều kiện**
   - Dùng để thực hiện một khối lệnh nào đó khi điều kiện được thỏa mãn
   - Các loại câu điều kiện trong JS:
      - if: thực hiện khối lệnh khi điều kiện đúng
      - else: thực hiện khối lệnh khi điều kiện sai
      - else if: thực hiện khối lệnh khi điều kiện đúng và điều kiện trước đó sai
      - switch...case: thực hiện khối lệnh dựa trên giá trị của một biểu thức

11. **Vòng lặp**
   - Dùng để thực hiện một khối lệnh nhiều lần
   - Các loại vòng lặp trong JS:
      - for: thực hiện khối lệnh một số lần nhất định
      - for...in: thực hiện khối lệnh cho mỗi thuộc tính của một đối tượng
      - for...of: thực hiện khối lệnh cho mỗi phần tử của một iterable
      - foreach: thực hiện khối lệnh cho mỗi phần tử của một mảng
      - while: thực hiện khối lệnh khi điều kiện đúng
      - do...while: thực hiện khối lệnh ít nhất một lần, sau đó tiếp tục thực hiện khi điều kiện đúng
      