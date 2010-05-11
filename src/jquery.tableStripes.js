jQuery.tableStripes = function(options) {
  settings = jQuery.extend({
     selector: "tbody tr",
     className: "odd"
  }, options);

  $(settings.selector).removeClass(className);
  $(settings.selector + ":nth-child(odd)").addClass(className);
};
