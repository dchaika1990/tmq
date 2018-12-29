$(document).ready(function(){
  // Toggle plus minus icon on show hide of collapse element
  $(".footer .collapse").on('show.bs.collapse', function(){
    $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    $(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});