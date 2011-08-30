(function($) {
  // https://issues.apache.org/jira/browse/COUCHDB-1239
  // fixes IE8 couchapp auth
  $.ajaxSetup({ cache: false });
})(jQuery);
