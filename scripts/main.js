var myImg = document.querySelector('img');

myImg.onclick = function () {
  var mySrc = myImg.getAttribute('src');
  if (mySrc === 'images/70.jpg') {
    myImg.setAttribute('src', 'images/71.jpg');
  }else{
    myImg.setAttribute('src', 'images/70.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name:');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome ,' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome ,' + storedName;
}

myButton.onclick = function(){
  setUserName();
}

