$(function () {
    $(".cicrcle").mouseover(function () {
    // 1
    // $(".cicrcle").removeClass("active");
    // $(this).addClass('active');
    //2
    $(".cicrcle").removeClass("active").filter(this).addClass("active");
        //
    //     $(".cicrcle").filter(".active").removeClass("active").end().filter(this).addClass("active")
    })
});
