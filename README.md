# IE104_Web-Travel
Đồ án môn học IE104
## Get header.

    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>
    
    <body>
        <div class="header"></div>
        <main></main>
        <script> 
            $(function(){
              $(".header").load("header.html"); 
            });
        </script>
    </body>

## Get footer
=> muốn get footer thì trong file .html muốn get, gán link vào:

    <div id="footer"></div>    
    <script> 
        $(function(){
            $("#footer").load("footer.html"); 
        });
        </script> 
        
        
 ## Yêu cầu để có thể chạy đc backend:
    1. cài đặt PHP 8.0
    2. cài đặt mysql.
    2. cài đặt Apache2
    3. càu đặt webserver.
    4. cài đặt php composer.
### Cách import database
    Chú ý: Do t kh dùng phpmyadmin nên chạy bằng các câu lệnh mysql thuần. Cho nên cách chạy phía dưới là dùng câu lệnh mysql để xử lý. 
    0. Để sử dụng mysql. Thực hiện câu lệnh:
            mysql
    1. tạo 1 user riêng để quản lí database (phải giống trong file config.php). Gán full quyền cho user mới
            create user 'admin'@localhost identified by 'password';
            GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
    2. tạo 1 database mới (phải giống trong file config.php)
            create database login;
    3. Trước khi import sql vào database, chúng ta phải ở trong thư mục chứa file .sql, sau đó thực thi câu lệnh phía dưới để import file .sql vào database.
            source 'login.sql';
=> vậy là đã tạo được cơ sở dữ liệu và connect được với website. 
** Chú ý: Nếu như thử đăng ký, phải qua email để xác nhận tài khoản, tuy nhiên đg link sẽ không vào được, phải thay đổi URL ở phía trước để phù hợp với đường link localhost mà webserver đã cài trước. 
