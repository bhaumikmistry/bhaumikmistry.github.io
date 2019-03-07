$(document).ready(function() {
    $('.quart').click(function() {
      var ind = $(this).index();
      switch (ind) {
        case 0:
          $("#imgpro").attr("src","img/imagepro/invert.jpg");
          break;
        case 1:
          $("#imgpro").attr("src","img/imagepro/edge.jpg");
          break;
        case 2:
          $("#imgpro").attr("src","img/imagepro/zoom.jpg");
          break;
        case 3:
          $("#imgpro").attr("src","img/imagepro/grey.jpg");
          break;
      }
    });

    $(".fancy_title").lettering();

    $('#imgpro').click(function() {
      $("#imgpro").attr("src","img/profile.JPG");
    });

  
});
