if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
			(image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

			image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
		});
	});
}
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
document.addEventListener("DOMContentLoaded", function () {
  var player = document.getElementById('video-player');
  var videoContainer = document.getElementById('video');
  var flag = false;

  if (!mobileGlobal && player) {
    player.setAttribute("preload", "true");
  }

  if (player) {
    videoContainer.addEventListener("click", function() {
      videoContainer.classList.add('video--play');

      flag = true;

      if (flag) {
        player.play();
      }
    });
  }

});
document.addEventListener('DOMContentLoaded', function () {
  var addButton = document.getElementById('popover-open');
  var popover = document.getElementById('popover');

  addButton.addEventListener('click', function (event) {
    event.stopPropagation();
    popover.classList.add('popover--open');
  });

  document.addEventListener('click', function (event) {
    popover.classList.remove('popover--open');
  });

  popover.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.btn');
  var popupOverlay = document.getElementById('popup-overlay');
  var body = document.body || document.documentElement;

  Array.prototype.forEach.call(buttons, function(button) {
    if (button.dataset.popup) {
      button.addEventListener('click', function () {
        var popup = document.getElementById(this.dataset.popup);
        popup.classList.add('popup--open');
        popupOverlay.classList.add('popup-overlay--open');
        body.classList.add('overflow-hidden');
      });
    }
  });

  var closeButtons = document.querySelectorAll('.popup__close');
  Array.prototype.forEach.call(closeButtons, function(close) {
    close.addEventListener('click', function () {
      this.parentElement.parentElement.classList.remove('popup--open');
      popupOverlay.classList.remove('popup-overlay--open');
      body.classList.remove('overflow-hidden');
    });
  });

  var closePaymentsButton = document.querySelector('.popup-payments__close');
  closePaymentsButton.addEventListener('click', function () {
    this.parentElement.parentElement.parentElement.classList.remove('popup--open');
    popupOverlay.classList.remove('popup-overlay--open');
    body.classList.remove('overflow-hidden');
  });
});
//# sourceMappingURL=main.js.map
