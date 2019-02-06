
if (Modernizr.geolocation) {
    var pageBody = document.getElementById('image');

var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/408/287';
newImg.style.border = '2px solid blue';

pageBody.appendChild(newImg);

  } else {
    var pageBody = document.getElementById('image');

var newImg = document.createElement('img');
newImg.src = 'http://www.placepuppy.net/400/250';
newImg.style.border = '2px solid green';

pageBody.appendChild(newImg);

}

var pageBody = document.getElementById('title2');
pageBody.style.color = 'turquoise';
pageBody.style.fontFamily = 'Helvetica';

var pageBody = document.getElementById('footer');
pageBody.style.backgroundColor = 'green';

var pageBody = document.getElementById('navbar');
pageBody.style.listStyleType = 'none';
pageBody.style.fontFamily = 'Verdana';







