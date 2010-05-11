/*
 *  Depends on:
 *  ----------------------
 *  jquery.tableDnd.js
 *  jquery.flash.js
 *  jquery.tableStripes.js
 *  
 *  Example usage:
 *  ----------------------
 *  $('tbody#category-rows').makeSortable('/admin/categories/sort');
 */

jQuery.fn.makeSortable = function(path, options) {
  settings = jQuery.extend({
    method: "POST"
  }, options);

  var el = $(this);
  el.tableDnD({
    onDrop: function(table, row) {
      $.ajax({
        type: settings.method,
        url: path,
        processData: false,
        data: $.tableDnD.serialize(),
        dataType: 'json',
        success: function(data) {
          $.tableStripes();
          $.flash(data.notice)
        }
      });
    }
  });
};
