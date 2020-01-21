
var cookieUtil = {
  setCookie: function (name, value, expires) {
    var cookieText = encodeURIComponent(name) + "=" + 
    encodeURIComponent(value);
    if (expires && expires instanceof Date) {
      cookieText += "; expires=" + expires;
    }
    document.cookie = cookieText;
  },
  getCookie: function (name) {
    var cookieText = decodeURIComponent(document.cookie);
    var cookieArr = cookieText.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
      var arr = cookieArr[i].split("=");
      if (arr[0] == name) {
        return arr[1];
      }
    }
    return null;
  },
  unsetCookie: function (name) {
    document.cookie = encodeURIComponent(name) + "=; expires=" + new Date(0);
  }
};