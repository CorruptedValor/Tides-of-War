var topp = 1;
back();
function back(){
$(".topnavLine").css("width", $(".topnavWrap li:first-child").outerWidth());
$(".topnavLine").offset({"top": $(".topnavWrap li:first-child").offset().top + $(".topnavWrap li:first-child").outerHeight(), "left": $(".topnavWrap li:first-child").offset().left});
}
$(".topnavWrap li").hover(function(){
  $(".topnavLine").css("transition", "all .3s ease-in-out");
  topp = $(this).attr("data");
  $(".topnavLine").css("width", $(this).outerWidth());
  $(".topnavLine").offset({"top": $(this).offset().top + $(".topnavWrap  li:first-child").outerHeight(), "left": $(this).offset().left});

}, function(){
  back();
});

$(window).resizeend(
      {
            onDragEnd : function() {  $(".topnavLine").css("transition", "all .3s ease-in-out"); },
            runOnStart : false
      }
);
$(window).resize(function(){
  $(".topnavLine").css("transition", "none");
  var off = $(".topnavWrap ul").find("[data='" + topp + "']").offset();
  var height = $(".topnavWrap ul").find("[data='" + topp + "']").outerHeight();
  $(".topnavLine").offset({"top": off.top + height, "left": off.left});
  back()
});
