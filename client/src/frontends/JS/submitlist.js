// document.getElementById("FileAttachment").onchange = function () {
//     document.getElementById("fileuploadurl").value = this.value;
// };


$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("No file selected");
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
});






// var uploadField = document.getElementById("file");
//
// uploadField.onchange = function() {
//     if(this.files[0].size > 1024){
//        alert("File size must be under 1MB");
//        this.value = "";
//     };
// };




$(function() {

  $('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
  });

  $('.dropdown > .list > .item').on('click', function() {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').children('.ddname').text(
      $(this).text());
  });

  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown').removeClass('open');
    }
  });

  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
      $('.dropdown').removeClass('open');
    }
  });

});
