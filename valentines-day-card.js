$('.js-open-envelope').on('click', function (event) {
  event.preventDefault();
  var $self = $(this);
  $self.find('.envelope').removeClass('tossing').addClass('open');
  $self.find('.heart use').attr("xlink:href", "#icon-heart-broken");
  $self.find('.envelope__card').addClass('open');
});
$('.js-surprise-button').on('click', function () {
  window.location.href = "1/1.html"; // Thay bằng link của bạn
});