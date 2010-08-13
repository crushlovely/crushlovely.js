/*
 *  Example usage:
 *  ----------------------
 *  $('p').after($.spinner());
 */
jQuery.spinner = function(options) {
  settings = jQuery.extend({
    src: "/images/spinner.gif",
    alt_text: "Loading..."
  }, options);

  var tmpl = '<img src="' + settings.src + '" alt="' + settings.alt_text + '" />';

  return tmpl;
};
