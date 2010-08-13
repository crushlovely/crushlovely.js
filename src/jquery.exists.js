/*
 *  Example usage:
 *  ----------------------
 *  $('p').exists();
 */
jQuery.fn.exists = function() {
  return jQuery(this).length > 0;
};
