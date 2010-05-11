/*
 *  Depends on:
 *  ----------------------
 *  jquery.flash.js
 *  jquery.tableStripes.js
 *  
 *  Example usage:
 *  ----------------------
 *  $('form.destroy').destroy();
 */

jQuery.fn.destroy = function(options) {
  settings = jQuery.extend({
    method: "DELETE"
  }, options);

  var objects = this;

  return objects.each(function() {
    var form = $(this);
    form.live('submit', function(e){
      if (!confirm("Are you sure you want to destroy this item?")) {
        return false;
      }

      var form = $(this);
      $.ajax({
        type: settings.method,
        url: form.attr('action'),
        data: form.serialize(),
        dataType: 'json',
        success: function(data, textStatus) {
          var row_id = form[0].id.replace(/destroy_(.*)_(\d+)/, '#$1_$2');
          $(row_id).remove();
          $.tableStripes();
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
