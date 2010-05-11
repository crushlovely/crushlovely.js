/*
 *  Depends on:
 *  ----------------------
 *  jquery.flash.js
 *  jquery.toggleText.js
 *  
 *  Example usage:
 *  ----------------------
 *  $('form.toggle_visibility').toggleVisibility();
 */

jQuery.fn.toggleVisibility = function(options) {
  settings = jQuery.extend({
    controlSelector: 'p button',
    method: "PUT",
    toggleClass: "hidden",
    visibleText: "Hide",
    hiddenText: "Show"
  }, options);

  var objects = this;

  return objects.each(function() {
    var form = $(this);
    form.live('submit', function(e){
      $.ajax({
        type: settings.method,
        url: form.attr('action'),
        data: form.serialize(),
        dataType: 'json',
        success: function(data, textStatus) {
          var row_id = form[0].id.replace(/toggle_visibility_(.*)_(\d+)/, '#$1_$2');
          $(row_id).toggleClass(settings.toggleClass);
          var button = form.find(settings.controlSelector);
          $(button).toggleText(settings.visibleText, settings.hiddenText);
          $.flash(data.notice);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          $.flash("Ooooops!, request failed with status: " + XMLHttpRequest.status + ' ' + XMLHttpRequest.responseText, { className : 'error' });
        }
      });
      e.preventDefault();
    });
  }
};
