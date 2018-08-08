// Detect IOS. to add Class 'IOS' on html.
// Detecting Chrome on IOS to add Class 'CriOS' on html.
(function() {
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    var DHtml = document.getElementsByTagName('html')[0];
    var _className = DHtml.getAttribute('class');
    DHtml.setAttribute('class', _className + ' IOS');
  }

  if (navigator.userAgent.match('CriOS')) {
    var DHtml = document.getElementsByTagName('html')[0];
    var _className = DHtml.getAttribute('class');
    DHtml.setAttribute('class', _className + ' CriOS');
  }
})();
