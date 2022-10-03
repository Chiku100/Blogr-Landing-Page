let list = ['product', 'company', 'connect'];
let ids = ["box1", "box2", "box3"];
let arrows=["arrow1","arrow2","arrow3"]
let contents = document.querySelectorAll(".extent");

for (let i = 0; i < list.length; i++) {
    $("#" + list[i]).hover(function () {
        $("#" + ids[i]).removeClass("viz");
        $("#"+arrows[i]).css("transform", "rotate(180deg)")
    },function(){
        $("#" + ids[i]).addClass("viz");
        $("#"+arrows[i]).css("transform", "rotate(0deg)")
    })
}
$(".trigger").click(
    function () {
        $(".header").toggle();
        $(".arrow").attr("src", "./images/icon-arrow-dark.svg");
        if ($(".ham").css("display") == "block") {
            $(".ham").css("display", "none");
            $(".close").css("display", "block");
        } else {
            $(".ham").css("display", "block");
            $(".close").css("display", "none");
        }
    }
)
