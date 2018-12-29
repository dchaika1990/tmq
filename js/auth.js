$(document).ready(function(){
  $('.auth-form-input input').removeClass();

  $('.auth-form-input input').on("click", function() {
    $(this).addClass('filled-in');
  });

  $('.auth-form-input input').on("focusout", function() {
    if ($(this).val().length == 0) {
      $(this).removeClass('filled-in');
    }
  });

  $('.auth-form-input input').change(function() {
    if ($(this).val().length == 0) {
      $(this).removeClass('filled-in');
    } else {
      $(this).addClass('filled-in');
    }
  });

  $('.auth-form-input input').keyup(function() {
    if ($(this).val().length == 0) {
      $(this).removeClass('filled-in');
    } else {
      $(this).addClass('filled-in');
    }
  }).keyup();

    $('.auth-form-input .select-wrapper select').on('change click', function() {
      var $parent = $(this).parent();
      $parent.next().addClass('focus');
      if ( $(this).val() != '' ) {
          $parent.next().addClass('focus');
      } else {
          $parent.next().removeClass('focus');
      }
    });
  //Datepicker
    if ( $('#date').length ) {
        $('#date').datepicker({
            'format': 'yyyy-m-d',
            'autoclose': true
        });
    }
});
