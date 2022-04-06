const presentation = document.getElementById('presentation');
const centerAlign = document.getElementById('centerAlign');
var x = 3;
var y = 10;
var width = (window.innerWidth - (16 * x));
var height = (window.innerHeight - (9 * y));
presentation.style.width = `${width}px`;
presentation.style.height = `${height}px`;
// centerAlign.style = `width: ${width}px;`

window.onresize = function(e) {
    var width = (window.innerWidth - (16 * x));
    var height = (window.innerHeight - (9 * y));
    console.log('width : ', width);
    console.log('height : ', height);
    presentation.style.width = `${width}px`;
    presentation.style.height = `${height}px`;
}

const presentationClose = document.getElementById('presentationClose');

presentationClose.addEventListener('click', (e) => {
    window.close();
});