# Javascript - Function advance
1. **Function Expression**
    - Định nghĩa function bằng cách gán nó cho 1 biến

    // Function Declaration (khai báo hàm)
    function add(a, b) {
        return a + b;
    }

    // Function Expression (biểu thức hàm)
    const add = function(a, b) {
        return a + b;
    };

2. **Lambda function**
    - **Lambda function** (còn gọi là arrow function) là cách viết ngắn gọn hơn của function.
    - Sử dụng dấu => để thay thế cho từ khóa function.

    // Arrow function
    const add = (a, b) => {
        return a + b;
    };

    // Arrow function ngắn gọn hơn nếu chỉ có 1 câu lệnh return
    const add = (a, b) => a + b;

    - Một số cách viết khác:
    **Không có tham số**
    // Phải có dấu ngoặc tròn rỗng
    const sayHello = () => console.log("Hello!");
    const getRandom = () => Math.random();

    **Một tham số**
    //Có thể bỏ dấu ngoặc tròn
    const square = x => x * x;

3. **Anonymous Function**
    - Function không có tên
    - Được sử dụng khi function chỉ cần dùng 1 lần hoặc làm callback

    // Named function (có tên)
    function namedFunction() {
        console.log("This is a named function.");
    }

    // Anonymous function phải được sử dụng ngay lập tức
    1. **Gán cho biến**
    `
    const anonymousFunction = function() {
        console.log("This is an anonymous function.");
    };
    `

    2. **Dùng làm callback**
    `
    setTimeout(function() {
        console.log("This function will run after 2 seconds.");
    }, 2000);
    `

# DOM
    - DOM = Document Object Model
    - Ví dụ: <option value="usa">America</option>

1. **Các thẻ HTML thường gặp**
    1. **Thẻ cấu trúc cơ bản**
        - < html >: Thẻ gốc của trang
        - < head >: Chứa metadata: tiêu đề website, hiển thị google
        - < body >: Nội dung website
        - < div >: Khối/container chung
        - < span >: Inline container
        - < header >, < footer >, < nav >, < section >: Thẻ ngữ nghĩa

    2. **Thẻ nội dung**
        - < h1 > đến < h6 >: tiêu đề
        - < p >: đoạn văn
        - < a >: liên kết
        - < img >: hình ảnh
        - < ul >, < ol >, < li >: danh sách

    3. **Thẻ form (Quan trọng cho testing):**
        - < form >: Biểu mẫu
        - < input >: Ô nhập liệu
        - < button >: Nút bấm
        - < select > và < option >: Dropdown
        - < textarea >: Vùng văn bản nhiều dòng

2. **Selector**
    - Có 3 loại selector thường dùng:
        - XPath
            - Dùng được trong hầu hết trường hợp (99.99%)
            - Đa dạng, có khả năng tìm các phần tử khó
            - VD: //button[normalize-space()='Add-to-cart']

        - CSS Selector
            - Ngắn gọn, performance cao
            - Dùng cho các trường hợp dễ tìm
            - Không linh hoạt bằng XPath
            - VD: .add-to-cart

        - Playwwright Selector
            - Chỉ dùng riêng cho Playwwright
            - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
            - Hướng tới "giống người dùng đang nhìn thấy gì"
            - VD: page.getByText('Add to cart')

    - **Khi nào thì dùng gì?**
    Playwwright selector >  CSS Selector > XPath
        - Vẫn cần học cả ba loại để có thể làm được trong nhiều dự án

    1. **XPath selector**
        - Có 2 loại:
            - **Tuyệt đối**: đi dọc theo cây DOM
                            - bắt đầu bởi 1 /
            - **Tương đối**: tìm dựa vào đặc tính
                            - bắt đầu bởi 1 //
                            - //tenthe[@thuoctinh="gia tri"]
                            - VD: //button[normalize-space()='Add-to-cart']

    2. **Playwwright basic synctax**
        - **test**: đơn vị cơ bản để khai báo 1 test
        - **step**: đơn vị nhỏ hơn test, để khai báo từng step của test case
            - VD: `
                await test.step('Ten step',  asyn () => {
                    // code
                });
            `
            - **Lưu ý: step  nên được map 1-1 với test case để dễ dàng maintain.
        
        - **Navigate**: page.goto
        - **Locate**: Sử dụng page.locator để chọn phần tử trên trang.
            - VD: `page.locator("//input[@id='username']")`
        
        - **Click**: 
            - **Single click**: `await page.locator("//button").click()`
            - **Double click**: `await page.locator("//button").dblclick`
            - **Right click**: `await page.locator("//button").click({
                                button: 'right'
                            })`
            - **Click and click another button**:
                `
                page.locator("").click({
                    modifiers: ['Control']
                })
                `

        - **Input**
            - **Fill**: giống việc paste content vào 1 ô input
            - `page.locator("//input").fill('Hello World!');`

            - **pressSequentially**: giống việc gõ từng chữ cái vào ô input
            - `page.locator("//input").pressSequentially('Hello World!', {
                delay: 100,
            });`

        - **Radio/checkbox**
            - Lấy giá trị hiện tại đang là checkhay không
            - `const isChecked = page.locator("//input").isChecked();`

            - Check/uncheck
            - `page.locator("//input").check();`
            - `page.locator("//input").setChecked(false);`

        - **Select**
            - `await page.locator("//select[@id='couuntry']").selectOption({ label: 'Vietnam' });`

        - **Upload file**
            - `await page.locator("//input[@id='profile']").setInputFiles("<file-path>");`

        - **Handle confirmation dialog**
            - `page.on('dialog', async dialog => dialog.accept());
               await page.click("//button[text()= 'Delete']");`





 
