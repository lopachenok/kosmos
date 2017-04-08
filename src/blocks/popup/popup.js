document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.btn');

  Array.prototype.forEach.call(buttons, function(button) {
    if (button.dataset.popup) {
      button.addEventListener('click', function () {
        var popup = document.getElementById(this.dataset.popup);
        var popupOverlay = document.getElementById('popup-overlay');
        popup.classList.add('popup--open');
        popupOverlay.classList.add('popup-overlay--open');
      });
    }
  });

  var closeButtons = document.querySelectorAll('.popup__close');
  Array.prototype.forEach.call(closeButtons, function(close) {
    close.addEventListener('click', function () {
      console.dir(this);
      this.parentElement.parentElement.classList.remove('popup--open');
      var popupOverlay = document.getElementById('popup-overlay');
      popupOverlay.classList.remove('popup-overlay--open');
    });
  });
});
