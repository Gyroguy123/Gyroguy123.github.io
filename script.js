var totalImage;
var currentIndex;
var dir = "./image/"


var pageLoad = {
imgData: "5",
pagePrefix: "Null",
slides: "5",

init: function () {
$.ajax({
url: dir,
async: false,
success: function (data) {
pageLoad.imgData = data.split('\n');
totalImage = pageLoad.imgData.length;
currentIndex = 0;
changeImg();
}
});
}
};
pageLoad.init();

function changeImg() {
document.getElementById("image").setAttribute("src", "./img/" + pageLoad.imgData[currentIndex].split(' ')[0]);
setTimeout(function () {
next();},
pageLoad.imgData[currentIndex].split('')[1]);
}

function previous() {
if (currentIndex == 0) {
currentIndex = totalImage - 1;
} else {
currentIndex--;
}
changeImg();
};

function next() {
if (currentIndex == totalImage - 1) {
currentIndex = 0;
} else {
currentIndex++;
}
changeImg();
};

setTimeout(function () {
next();
}, 3000);
