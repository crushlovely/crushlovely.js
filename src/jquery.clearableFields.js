/*
 *  Example usage:
 *  ----------------------
 *  In your html:
 *  <input type="text" data-default="First Name" />
 *  In your javascript:
 *  $.clearableFields();
 */

jQuery.clearableFields = function() {
  var selectors = 'input[data-default], textarea[data-default]';

  $(selectors).live('focus', function() {
    var el = $(this);
    if (el.val() === el.attr('data-default')) {
      el.val('');
    }
  });

  $(selectors).live('blur', function() {
    var el = $(this);
    if (el.val() === '') {
      el.val(el.attr('data-default'));
    }
  });
};
