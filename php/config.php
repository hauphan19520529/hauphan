<?php

$conn = mysqli_connect("localhost", "thanh", "password", "login");

if (!$conn) {
    echo "Connection Failed";
}
