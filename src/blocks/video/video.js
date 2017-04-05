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
