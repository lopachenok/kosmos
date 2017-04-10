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
