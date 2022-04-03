
// GNB 색 변경
const gnbTable = document.getElementById('gnbTable');
const gnbLogo = document.querySelector('#gnbTable > div > span');
const gnbFontColorATags = document.querySelectorAll('#gnbTable div ul li a');

document.addEventListener('scroll', (e) => {
    if (window.scrollY == 0) {
        gnbTable.style.backgroundColor = 'transparent';
        gnbLogo.style.color = 'white';
        gnbFontColorATags.forEach((aTag) => {
            aTag.style.color = 'white';
        });
        
    } else if (window.scrollY > 0) {
        gnbTable.style.backgroundColor = 'white';
        gnbLogo.style.color = 'black';
        gnbFontColorATags.forEach((aTag) => {
            aTag.style.color = 'black';
        });
    }
});

const link02 = document.getElementById('link02');
const progress = document.querySelector('.progress');
const progressBar = document.querySelectorAll('.progress-bar');

const board2 = document.querySelector('.board2');
const positionBoard2 = board2.getBoundingClientRect();

document.addEventListener('scroll', (e) => {

    if (window.scrollY > (positionBoard2.height - 20)) {
        board2.className = 'board2 col-md-6 animate__animated animate__fadeInUp'
    } else {
        board2.className = 'board2 col-md-6 animate__animated animate__fadeOutDown'
    }


    if (window.scrollY > 850) {
        for (var i = 0; i < progressBar.length; ++i) {
            progressBar[i].style.width = `${progressBar[i].ariaValueNow}%`
            progressBar[i].innerHTML = `${progressBar[i].ariaValueNow}`
        }
    } else {
        for (var i = 0; i < progressBar.length; ++i) {
            progressBar[i].style.width = `0%`
        }
    }

    if (window.scrollY < 1500) {
            link02.style.display = 'none';
    } else {
        link02.style.display = 'block';
    }
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});

