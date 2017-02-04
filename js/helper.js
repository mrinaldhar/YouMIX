function ajaxCall(endpoint, objToSend, ajaxmethod, asyncVal, callback, failure) {
    var res;
    objToSend["key"] = "AIzaSyDzKjeJJecZIDLuzlWLLouZffe0nA9NY9Q";
    $.ajax({
      url: endpoint,
      data: objToSend,
      async: asyncVal,
      dataType: "json",
      crossDomain: true,
      type: ajaxmethod,
      success: function(data) {
        callback(data);
      },
      error: function() {
        failure();
      }
    });
    return res;

}

function convUnicode(text) {
  return decodeURIComponent(escape(text));
}
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}
