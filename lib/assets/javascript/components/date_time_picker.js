import $ from "jquery";
import "moment";
import datetimepicker from "bootstrap-datetimepicker-npm/build/js/bootstrap-datetimepicker.min.js";

(function($) {
  $.fn.datetimepicker = datetimepicker;
})($);

$(function () {
  $('[data-type="time"]').datetimepicker({
    debug: false,
    format: 'HH:mm:ss',
  });
  $('[data-type="datetime"]').datetimepicker({
    debug: false,
    format: 'YYYY-MM-DD HH:mm:ss',
  });
  $('[data-type="date"]').datetimepicker({
    debug: false,
    format: 'YYYY-MM-DD',
  });
});
