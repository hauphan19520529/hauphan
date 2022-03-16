<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

session_start();
if (isset($_SESSION['SESSION_EMAIL'])) {
  header("Location: welcome.php");
  die();
}

//Load Composer's autoloader
require '../vendor/autoload.php';

include 'config.php';
$msg = "";

if (isset($_POST['submit'])) {
  $name = mysqli_real_escape_string($conn, $_POST['name']);
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $password = mysqli_real_escape_string($conn, md5($_POST['password']));
  $confirm_password = mysqli_real_escape_string($conn, md5($_POST['confirm-password']));
  $code = mysqli_real_escape_string($conn, md5(rand()));

  if (mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE email='{$email}'")) > 0) {
    $msg = "<div class='alert alert-danger'>{$email} - Địa chỉ email này đã tồn tại.</div>";
  } else {
    if ($password === $confirm_password) {
      $sql = "INSERT INTO users (name, email, password, code) VALUES ('{$name}', '{$email}', '{$password}', '{$code}')";
      $result = mysqli_query($conn, $sql);

      if ($result) {
        echo "<div style='display: none;'>";
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
          //Server settings
          $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
          $mail->isSMTP();                                            //Send using SMTP
          $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
          $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
          $mail->Username   = 'konchuabonbon@gmail.com';                     //SMTP username
          $mail->Password   = 'konchuabonbon01';                               //SMTP password
          $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
          $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

          //Recipients
          $mail->setFrom('konchuabonbon@gmail.com');
          $mail->addAddress($email);

          //Content
          $mail->isHTML(true);                                  //Set email format to HTML
          $mail->Subject = 'no reply';
          $mail->Body    = 'Đây là liên kết xác minh <b><a href="http://localhost/IE104_Web-Travel/php/?verification=' . $code . '">http://localhost/IE104_Web-Travel/php/?verification=' . $code . '</a></b>';

          $mail->send();
          echo 'Message has been sent';
        } catch (Exception $e) {
          echo "Không thể gửi tin nhắn. Lỗi người gửi thư: {$mail->ErrorInfo}";
        }
        echo "</div>";
        $msg = "<div class='alert alert-info'>Chúng tôi đã gửi một liên kết xác minh trên địa chỉ email của bạn.</div>";
      } else {
        $msg = "<div class='alert alert-danger'>Đã xảy ra lỗi.</div>";
      }
    } else {
      $msg = "<div class='alert alert-danger'>Mật khẩu và Xác nhận Mật khẩu không khớp</div>";
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>Dang Ky</title>
  <!-- Meta tag Keywords -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="UTF-8" />
  <meta name="keywords" content="Dang Ky" />
  <!-- //Meta tag Keywords -->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
  <link rel="stylesheet" href="../css/register.css" />
  <!--//Style-CSS -->

  <script src="https://kit.fontawesome.com/af562a2a63.js" crossorigin="anonymous"></script>
</head>

<body>

  <!-- form section start -->
  <section class="w3l-mockup-form">
    <div class="container">
      <!-- /form -->
      <div class="workinghny-form-grid">
        <div class="main-mockup" id="left_grid_register">
          <!-- <div class="alert-close">
              <span class="fa fa-close"></span>
            </div> -->
          <div class="w3l_form_register">
            <!-- <div class="left_grid_info">
              <img src="../images/login-register/image0.jpg" alt="" />
            </div> -->
          </div>
          <div class="content-wthree">
            <h2>Đăng Ký</h2>
            <p>
              Chào mừng bạn đến với Odian Banwol. Hãy đăng ký ngay để trải
              nghiệm các tour du lịch và dịch vụ của chúng tôi.
            </p>
            <?php echo $msg; ?>
            <form action="" method="post">
              <input type="text" class="name" name="name" placeholder="Nhập tên của bạn" value="<?php if (isset($_POST['submit'])) {
                                                                                                  echo $name;
                                                                                                } ?>" required />
              <input type="email" class="email" name="email" placeholder="Nhập email của bạn" value="<?php if (isset($_POST['submit'])) {
                                                                                                        echo $email;
                                                                                                      } ?>" required />
              <input type="password" class="password" name="password" placeholder="Nhập mật khẩu" required />
              <input type="password" class="confirm-password" name="confirm-password" placeholder="Nhập lại mật khẩu" required />
              <button name="submit" class="btn" type="submit">
                Đăng Ký
              </button>
            </form>
            <div class="social-icons">
              <p>Bạn đã có tài khoản Odinal Banwol? <a href="login.php">Đăng Nhập</a>.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- //form -->
    </div>
  </section>
  <!-- //form section start -->

  <script src="../js/jquery.min.js"></script>
  <script>
    $(document).ready(function(c) {
      $(".alert-close").on("click", function(c) {
        $(".main-mockup").fadeOut("slow", function(c) {
          $(".main-mockup").remove();
        });
      });
    });
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</body>

</html>