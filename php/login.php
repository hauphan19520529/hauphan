<?php
session_start();
if (isset($_SESSION['SESSION_EMAIL'])) {
    header("Location: ../home.html");
    die();
}

include 'config.php';
$msg = "";

if (isset($_GET['verification'])) {
    if (mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE code='{$_GET['verification']}'")) > 0) {
        $query = mysqli_query($conn, "UPDATE users SET code='' WHERE code='{$_GET['verification']}'");

        if ($query) {
            $msg = "<div class='alert alert-success'>Xác minh tài khoản đã được hoàn tất thành công.</div>";
        }
    } else {
        header("Location: login.php");
    }
}

if (isset($_POST['submit'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, md5($_POST['password']));

    $sql = "SELECT * FROM users WHERE email='{$email}' AND password='{$password}'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);

        if (empty($row['code'])) {
            $_SESSION['SESSION_EMAIL'] = $email;
            header("Location: ../home.html");
        } else {
            $msg = "<div class='alert alert-info'>Trước tiên, hãy xác minh tài khoản của bạn và thử lại.</div>";
        }
    } else {
        $msg = "<div class='alert alert-danger'>Email hoặc mật khẩu không khớp.</div>";
    }
}
?>

<!DOCTYPE html>
<html lang="zxx">

<head>
    <title>Dang Nhap</title>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords" content="Dang Nhap" />
    <!-- //Meta tag Keywords -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    <link rel="stylesheet" href="../css/register.css" />
    <!--//Style-CSS -->

    <script src="https://kit.fontawesome.com/af562a2a63.js" crossorigin="anonymous"></script>

</head>

<body>

    <div class="header"></div>
    <!-- form section start -->
    <section class="w3l-mockup-form">
        <div class="container">
            <!-- /form -->
            <div class="workinghny-form-grid">
                <div class="main-mockup">
                    <div class="w3l_form_login">
                        <!-- <div class="left_grid_info">
                            <img src="../images/login-register/image.jpg" alt="">
                        </div> -->
                    </div>
                    <div class="content-wthree">
                        <h2>Đăng Nhập</h2>
                        <p>Tuổi trẻ có mấy lần là 10 năm. Cho nên hãy xách balo lên và đi nào! </p>
                        <?php echo $msg; ?>
                        <form action="" method="post">
                            <input type="email" class="email" name="email" placeholder="Nhập email của bạn" required>
                            <input type="password" class="password" name="password" placeholder="Nhập mật khẩu" style="margin-bottom: 2px;" required>
                            <p><a href="forgot-password.php" style="margin-bottom: 15px; display: block; text-align: right;">Bạn quên mật khẩu?</a></p>
                            <button name="submit" name="submit" class="btn" type="submit">Đăng Nhập</button>
                        </form>
                        <div class="social-icons">
                            <p>Bạn chưa có tài khoản? <a href="register.php">Đăng Ký ngay!</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //form -->
        </div>
    </section>
    <!-- //form section start -->

    <script src="js/jquery.min.js"></script>
    <script>
        $(document).ready(function(c) {
            $('.alert-close').on('click', function(c) {
                $('.main-mockup').fadeOut('slow', function(c) {
                    $('.main-mockup').remove();
                });
            });
        });
    </script>
    <script>
        $(function() {
            $(".header").load("../header.html");
        });
    </script>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="../slick/slick.min.js"></script>

</body>

</html>