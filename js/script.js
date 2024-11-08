
// banner_swiper_s
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });
  // banner_swiper_e

  // input_s

  document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('fullscreen');
        switch (item.id) {
            case 'image1':
                item.style.backgroundImage = "url('images/picnic.jpg')";
                break;
            case 'image2':
                item.style.backgroundImage = "url('../images/forest.jpg')";
                break;
            case 'image3':
                item.style.backgroundImage = "url('../images/afternoon\ tea.jpg')";
                break;
            case 'image4':
                item.style.backgroundImage = "url('../images/star.jpg')";
                break;
        }
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('fullscreen');
        switch (item.id) {
            case 'image1':
                item.style.backgroundImage = "url('../images/picnic.jpg')";
                break;
            case 'image2':
                item.style.backgroundImage = "url('../images/forest.jpg')";
                break;
            case 'image3':
                item.style.backgroundImage = "url('../images/afternoon\ tea.jpg')";
                break;
            case 'image4':
                item.style.backgroundImage = "url('../images/star.jpg')";
                break;
        }
    });
});
// contents3 img size up
$(function(){
  $(".roomimg_box").hover(function(){
    
  })
})
// map pop up 
$(function(){
    $(".talkbox").hide();
    $(".lobby").click(function(){
        $(".talk_lobby").fadeIn();
    });
    $(".close").click(function(){
        $(".popup").fadeOut();
    });
});
