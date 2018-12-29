$(document).ready(function(){
  $('.movers .states').val('').change();
  $('.movers .states').change(function() {
    var state_id = $('option:selected', this).val();
    if (state_id == '') {
      $('.movers .movers-list li').show();
    } else {
      $('.movers .movers-list li[id != "' + state_id + '"]').hide();
      $('.movers .movers-list li#' + state_id).show();
    }
  });
});
