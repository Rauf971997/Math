const mainPhoto = document.querySelector('#main-photo');
const previews = document.querySelectorAll('.preview img');


previews.forEach(function(preview) {
    preview.addEventListener('click', function() {
        mainPhoto.src = preview.src;
    })
})


const previewItems = document.querySelectorAll('.preview ul li');
previewItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    this.style.outline = '2px solid black'; 
  });

  item.addEventListener('mouseout', function() {
    this.style.outline = 'none'; 
  });
});