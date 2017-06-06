var decodeImage = function () {
  var str = document.getElementById('img-input').value;
  var image = new Image();
  image.src = str;
  document.getElementById('image-home').appendChild(image);
};

window.onload = function() {
  document.getElementById('decode-button')
    .addEventListener('click', decodeImage);
};
