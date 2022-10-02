let items = $(".mark");
let actions = $(".extent");


$("#product").hover(function () {
    $(".z").removeClass("viz");
    $(".arrow1").css("transform", "rotate(180deg)")
}, function () {
    $(".z").addClass("viz");
    $(".arrow1").css("transform", "rotate(0deg)")
})
$("#company").hover(function () {
    $(".y").removeClass("viz");
    $(".arrow2").css("transform", "rotate(180deg)")
}, function () {
    $(".y").addClass("viz");
    $(".arrow2").css("transform", "rotate(180deg)")
    $(".arrow2").css("transform", "rotate(0deg)")
})
$("#connect").hover(function () {
    $(".x").removeClass("viz");
    $(".arrow3").css("transform", "rotate(180deg)")
}, function () {
    $(".x").addClass("viz");
    $(".arrow3").css("transform", "rotate(180deg)")
    $(".arrow3").css("transform", "rotate(0deg)")
})

$(".trigger").click(
    function () {
        $(".header").toggle();
        $(".arrow").attr("src","./images/icon-arrow-dark.svg");
        if ($(".ham").css("display") == "block") {
            $(".ham").css("display", "none");
            $(".close").css("display", "block");
            

        } else {
            $(".ham").css("display", "block");
            $(".close").css("display", "none");
        }

    }
)

