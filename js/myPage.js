
// GNB 색 변경
const gnbTable = document.getElementById('gnbTable');
const gnbLogo = document.getElementById('logo');
const gnbFontColorATags = document.querySelectorAll('#gnbTable div ul li a');

document.addEventListener('scroll', (e) => {
    if (window.scrollY == 0) {
        gnbTable.style.backgroundColor = 'transparent';
        gnbLogo.src = './images/logo_white.png';
        gnbFontColorATags.forEach((aTag) => {
            aTag.style.color = 'white';
        });
        
    } else if (window.scrollY > 0) {
        gnbTable.style.backgroundColor = 'white';
        gnbLogo.src = './images/logo_black.png';
        gnbFontColorATags.forEach((aTag) => {
            aTag.style.color = 'black';
        });
    }
});

// 동영상 반복재생
// const backVideo = document.getElementById('videoSrc');
// const videos = [
//     './media/site.mp4',
//     './media/office.mp4',
//     './media/typing.mp4'
// ];

// var i = 1;
// window.setInterval(() => {
//     i = parseInt(i);
//     console.log('video길이: ', videos.length);
//     console.log('i: ', i);
//     console.log(i % videos.length);
//     backVideo.src = videos[i % videos.length];
//     i++;
// }, 10000);

// Rader Chart
const mct = document.getElementById('myChart');

const labels = [
    'Java',
    'HTML',
    'CSS',
    'JSP',
    'JavaScript',
    'Oracle SQL'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Skills',
        data: [80, 60, 55, 70, 80, 90],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]

};

const config = {
    type: 'radar',
    data: data,
    option: {
        responsive: false,
        suggestedMin: 50,
        suggestedMax: 100
    }
};


const myChart = new Chart(
    mct,
    config
);

// Carousel
const slideItems = document.getElementById('slideItems');
const slideNum = document.getElementById('slideNum');
const pgBar = document.getElementById('progressBar');

function pageCounter() {
    const numberList = ['01', '02', '03', '04', '01'];
    var i = 0;
    var numSlide = window.setInterval(() => {
        ++i;
        slideNum.innerHTML = numberList[i] + ' / 04';
        if (i == 4) {
            i = 0;
        }
    }, 1000);

    // Stop cycle onhover
    slideItems.addEventListener('mouseover', (e) => {
        clearInterval(numSlide);
    }); 
        
    slideItems.addEventListener('mouseleave', (e) => {
        numSlide = window.setInterval(() => {
            ++i;
            slideNum.innerHTML = numberList[i] + ' / 04';
            if (i == 4) {
                i = 0;
            }
        }, 1000);
    });
};

/* Modal */
// const projectModal = document.getElementById('projectModal');

// modalBody.addEventListener('scrollY', (e) => {
//     console.log(e);
// });

const link02 = document.getElementById('link02');
const progress = document.querySelector('.progress');
const progressBar = document.querySelectorAll('.progress-bar');
console.log(progressBar);
document.addEventListener('scroll', (e) => {

    if (window.scrollY > 800) {
        for (var i; i < progressBar.length; ++i) {

            progressBar[i].style.width = `${progressBar.ariaValueNow}%`

        }
    }

    if (window.scrollY < 1500) {
            link02.style.display = 'none';
    } else {
        link02.style.display = 'block';
    }
});



