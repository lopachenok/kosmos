function is_touch_device() {
 return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || navigator.msMaxTouchPoints > 0);
}

var mobileGlobal, touchGlobal;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 document.body.classList.add("mobile");
 mobileGlobal = true;
}

if(is_touch_device()) {
  touchGlobal = true;
}

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
