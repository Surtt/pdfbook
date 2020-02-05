var button = document.getElementsByClassName('open');
var close = document.getElementById('close');
var modal = document.getElementById('modal');

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function (event) {
    const target = event.target;
    window.dataImg.dataImages.forEach(({ name, images }) => {
      console.log(name, target.textContent);
      if (target.textContent === name) {
        return images;
      }
    });

    // console.log(target.textContent);
    event.preventDefault();
    modal.style.display = 'block';
  });
}

// button.addEventListener('click', function(event) {
//   event.preventDefault();
//   modal.style.display = 'block';
// });

close.addEventListener('click', function (event) {
  event.preventDefault();
  modal.style.display = 'none';
});