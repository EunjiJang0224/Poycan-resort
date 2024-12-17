$(function () {

    // 탭메뉴 만들기
    $(".board>li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    });


    // 팝업창 만들기
    $(".popup").hide();
    $(".click").click(function(){
        $(".popup").fadeIn();
    });
    $(".close").click(function(){
        $(".popup").fadeOut();
    })
});


