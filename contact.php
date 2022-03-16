<?php
if (isset($_POST["submit"])) {
  $username = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = $email;
  $subject = $message;

  $message = "Name: {$username} Email: {$email} Phone: {$phone}  Message: " . $message;

  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  // More headers
  $headers .= 'From: thanhnluit@gmail.com';

  $mail = mail($to, $subject, $message, $headers);

  if ($mail) {
    echo "<script>alert('Mail Send.');</script>";
  } else {
    echo "<script>alert('Mail Not Send.');</script>";
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lien he</title>
  <link rel="stylesheet" href="css/contact.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
  <script src="js/home.js"></script>
</head>

<body>
  <div class="header"></div>
  <main class="bg-contact">

    <div class="container">
      <div class="form-contact">
        <div class="contact-info">
          <h3 class="title">Odinal Banwol luôn sẵn sàng hỗ trợ bạn</h3>
          <p class="text">
            Đích đến của chúng ta không phải là một vùng đất, mà là một cách nhìn mới.
            Khoảnh khắc khi bạn đến được cái đích của chuyến đi, nhìn ngắm mọi thứ xinh đẹp đang thu vào tầm mắt
            Lúc đó bạn sẽ nhận ra mọi sự nỗ lực của mình là vô cùng xứng đáng.
          </p>

          <div class="info">
            <div class="information">
              <img src="images/ContactUs/img/location.png" class="icon" alt="" />
              <p>Khu phố 6, Linh Trung, Thủ Đức</p>
            </div>
            <div class="information">
              <img src="images/ContactUs/img/email.png" class="icon" alt="" />
              <p>thanhnluit@gmail.com</p>
            </div>
            <div class="information">
              <img src="images/ContactUs/img/phone.png" class="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div class="social-media">
            <p>Liên hệ với chúng tôi :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="" method="post" autocomplete="off">
            <h3 class="title">Liên hệ với chúng tôi</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Số điện thoại</label>
              <span>Số điện thoại</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" name="submit" value="Gửi" class="btn" />
          </form>
        </div>
      </div>
    </div>
  </main>
  <div id="footer"></div>

  <script>
    $(function() {
      $("#footer").load("footer.html");
    });
  </script>

  <script>
    $(function() {
      $(".header").load("header.html");
    });
  </script>
  <script src="js/contact.js"></script>
</body>

</html>