document.addEventListener('DOMContentLoaded', function () {
  var cardNumberInputs = document.querySelectorAll('.card__input--card-number');

  Array.prototype.forEach.call(cardNumberInputs, function(cardNumberInput, index) {
    cardNumberInput.addEventListener('keyup', function () {
      this.value = sanitizeValue(this.value, true, false);
      if (this.value.length === this.maxLength) {
        cardNumberInputs[index+1].focus();
      }
    });
  });

  var cardDate = document.getElementById('card-date');

  cardDate.addEventListener('keyup', function () {
    this.value = sanitizeValueForMonth(this.value);
    if (this.value.length === 2) {
      this.value += '/';
    }
  });

  var cvv = document.getElementById('cvv');

  cvv.addEventListener('keyup', function () {
    this.value = sanitizeValue(this.value, true, false);
  });

  var cardholder = document.getElementById('cardholder');

  cardholder.addEventListener('keyup', function () {
    this.value = sanitizeValue(this.value, false, true);
  });
});

function sanitizeValue(value, number, name) {
  var newValue = '';
  if (number) {
    newValue = value.replace(/\s+/g, '').replace(/[^-0-9]/gim,'').replace('-', '');
  } else if (name) {
    newValue = value.replace(/[^a-zA-Z.-\s]/g, '');
  }
  return newValue;
}

function sanitizeValueForMonth(value) {
  return value.replace(/\s+/g, '').replace(/[^-/0-9]/gim,'').replace('-', '');
}
