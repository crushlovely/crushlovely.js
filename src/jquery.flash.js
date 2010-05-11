jQuery.fadeOutNotifications = function(options) {
  settings = jQuery.extend({
     container: "#notifications",
     child: "div",
     timeout: 2000
  }, options);

  var selector = settings.container + ' ' + settings.child;

  setTimeout(function() { 
    $(selector).fadeOut(function() {
      $(this).remove();
    }); 
  }, settings.timeout);
};

jQuery.flash = function(message, options) {
  settings = jQuery.extend({
    container: "#notifications",
    child: "div",
    className: "notice"
  }, options);

  var tmpl = '<' + settings.child + 'class="' + settings.className + '">' + message + '</' + settings.child + '>';

  $(settings.container).html(tmpl);
  $.fadeOutNotifications();
};
