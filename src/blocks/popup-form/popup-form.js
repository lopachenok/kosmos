document.addEventListener('DOMContentLoaded', function () {
  var forms = document.querySelectorAll('.popup-form');

  Array.prototype.forEach.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      var inputs = this.querySelectorAll('input');
      Array.prototype.forEach.call(inputs, function(input) {
        validateForm(input);
      });

      var error = this.querySelectorAll('.popup-form__fieldset--error');
      if (error.length > 0) {
        this.querySelector('.popup-form__error-count').innerHTML = error.length;
        this.querySelector('.popup-form__error-text').classList.add('popup-form__error-text--show');
      } else {
        this.querySelector('.popup-form__error-text').classList.remove('popup-form__error-text--show');
      }
    });

    form.addEventListener('focusin', function (event) {
      if (event.target.tagName !== 'INPUT') {
        return;
      }

      event.target.classList.add('touched');
    });

    form.addEventListener('focusout', function (event) {
      var elem = event.target;

      if (elem.tagName !== 'INPUT') {
        return;
      }

      validateForm(elem);

      var error = this.querySelectorAll('.popup-form__fieldset--error');
      var inputsLength = this.querySelectorAll('input').length;
      var touchedInputsLength = this.querySelectorAll('input.touched').length;
      var btn = this.querySelector('.btn');

      if (inputsLength === touchedInputsLength) {
        if (error.length > 0) {
          btn.classList.add('btn--error');
          btn.setAttribute('disabled', 'true');
        } else {
          btn.classList.remove('btn--error');
          btn.removeAttribute('disabled');
        }
      }
    });
  });
});

function validateForm (elem) {
  if (elem.value === '') {
    elem.classList.remove('touched');
    elem.parentElement.classList.add('popup-form__fieldset--error');
  } else {
    elem.parentElement.classList.remove('popup-form__fieldset--error');
  }

  if (elem.type === 'tel') {
    if (!elem.value.match(/^(\+)?\d+$/)) {
      elem.parentElement.classList.add('popup-form__fieldset--error');
    } else {
      elem.parentElement.classList.remove('popup-form__fieldset--error');
    }
  }

  if (elem.type === 'email') {
    if (!elem.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/igm)) {
      elem.parentElement.classList.add('popup-form__fieldset--error');
    } else {
      elem.parentElement.classList.remove('popup-form__fieldset--error');
    }
  }
}
