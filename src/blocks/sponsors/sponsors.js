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
