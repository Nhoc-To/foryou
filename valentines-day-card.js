$(document).ready(function () {
  $('.js-open-envelope').on('click', function (event) {
    event.preventDefault();
    var $self = $(this);
    $self.find('.envelope').removeClass('tossing').addClass('open');
    $self.find('.heart use').attr("xlink:href", "#icon-heart-broken");
    $self.find('.envelope__card').addClass('open');
  });

  $('.js-surprise-button').on('click', function (event) {
    event.preventDefault(); // Ngăn chặn chuyển trang ngay lập tức
    $('body').css('opacity', '0'); // Làm mờ dần trang
    setTimeout(() => {
      window.location.href = "1/1.html"; // Thay bằng link của bạn
    }, 500); // Chờ 500ms để hiệu ứng hoàn thành
  });
});