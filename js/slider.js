function sliderInit() {
  var status = $(".slides-numbers");
  var slider = $(".slider");
  slider.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      status.html(
        `<span class="active">${i}</span> / <span class="total">${slick.slideCount}</span>`
      );
    }
  );
  slider.slick({
    dots: false,
    slidesToShow: 1,
  });
}
$(document).ready(function () {
  sliderInit();
});
