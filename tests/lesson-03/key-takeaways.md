# Git
1. **Git: undo**
    - `git restore --staged <file>_name`: bỏ file khỏi staging area, đưa về working directory
    - `git restore --staged .`: Restore tất cả file khỏi staging area, đưa về working directory
    - `git reset HEAD~1`: bỏ commit gần nhất, đưa về staging area
    - `git reset HEAD~N`: bỏ N commit gần nhất, đưa về staging area

*Note*: - Commit đầu tiên không thể bị reset.
        - Nếu muốn reset -> xóa thư mục .git và khởi tạo lại git repository

2. **Git branching**
    - `git pull origin main`: Lấy code từ server về local
    - `git branch`: xem các branch hiện có, branch nào đang đứng
    - `git  branch  <branch_name>`: tạo branch mới
        - Nhánh mới copy giống hệt nhánh hiện tại
    - `git  checkout <branch_name>`: chuyển sang branch khác
    - `git checkout -b <branch_name>`: tạo branch mới và chuyển sang branch đó
    - `git branch -D <branch_name>`: xóa branch
        - *Lưu ý:* đứng ở branch khác khi xóa branch

    - **Lưu ý:**
        - Luôn pulll code về trước khi tạo branch mới

3. **Git: ignore file**
    - Tạo file `.gitignore` để chỉ định các file hoặc thư mục không muốn theo dõi bởi Git
    - Cú pháp:
    ```
    #  Comment - dòng bắt đầu bằng # sẽ được coi là comment
    # <tên_file> - bỏ theo dõi file cụ thể
    # Ignore tất cả file có đuôi .log
    *.log
    # Ignore thư mục node_modules
    node_modules/
    # Ignore file  trong thư mục con
    **/*.tmp
    # Nogại lệ - KHÔNG ignore file này (dùng !)
    !important.log
    # Ignore file chỉ ở thư mục gốc
    /TODO
    # Ignore tất cả file .txt trong thư mục docs
    docs/*.txt
    ```

# JavaScript basic
1. **JavaScript Convention**
    **Một số quy ước đặt tên trong JavaScript:**
    - snake_case: tất cả chữ viết thường, cách nhau bởi dấu gạch dưới (_)
    - kebab-case: tất cả chữ viết thường, cách nhau bởi dấu gạch ngang (-)
    - camelCase: chữ cái đầu tiên viết thường, các chữ cái tiếp theo viết hoa chữ cái đầu tiên
    - PascalCase: tất cả chữ cái đầu tiên viết hoa

    **Sử dụng convention trong lớp học:**
    - snake_case: tạm thời không dùng
    - kebab-case: dùng cho tên file và foler
    - camelCase: dùng cho tên biến, hàm
    - PascalCase: dùng cho tên class

2. **Dùng console.log nâng cao**
    - console.log('Toi la Nga');
    - console.log("Toi là Phong");
    - console.log(`${variable_name}`);
    - console.log("Toi ten la" + variable_name);

3.  **Object**
    - Dùng để lưu trữ dữ liệu dưới dạng key-value
    - Cú pháp:
    ```
    const object_name = {
        key1: value1,
        key2: value2,
        key3: function() {
            // code
        }
    };
    ```
    - **Khai báo object**:
    ```
    const person = {
        name: "Alice",
        age: 30,
        isStudent: true
    };
   ```
    - **Sử dụng object**:
    console.log(person.name); // Alice
    console.log(person.age); // 30

    - Gán lại:
    person.name = "Bob";

4. **Logic Operator:**
    - &&: cả 2 vế của mệnh đề đều đúng
    - ||: một trong 2 vế của mệnh đề đúng
    - !: phủ định mệnh đề

5. **Array:**
    - Dùng để lưu trữ nhiều giá trị trong 1 biến
    - Cú pháp:
    ```
    const array_name = [value1, value2, value3];
    ```
    - **Truy xuất mảng:**
        - Độ dài mảng: array_name.length
        - Lây phần tử theo index: array_name[index]

6. **Function**
    - Dùng để nhóm code lại và tái sử dụng
    - Cú pháp:
    ```
    function function_name(parameters) {
        // code
    }
    ```
    - **Gọi hàm:**
        - function_name(arguments);
