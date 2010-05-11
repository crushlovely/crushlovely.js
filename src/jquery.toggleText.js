jQuery.fn.toggleText = function(a, b) {
  return this.each(function() {
    jQuery(this).text(jQuery(this).text() == a ? b : a);
  });
};
