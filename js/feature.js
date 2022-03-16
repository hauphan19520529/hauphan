$(document).ready(function() {
    $("#famous-place").click(function() {
      $("#list-feature-main").load("famous-place.html");
    });

    $("#tour-tham-quan").click(function() {
        $("#list-feature-main").load("tour-tham-quan.html");
      });

    $("#tour-kham-pha").click(function() {
      $("#list-feature-main").load("tour-kham-pha.html");
    });

    $("#tour-du-lich-sinh-thai").click(function() {
      $("#list-feature-main").load("tour-du-lich-sinh-thai.html");
    });

    $("#tour-du-lich-van-hoa").click(function() {
        $("#list-feature-main").load("tour-du-lich-van-hoa.html");
      });

  });