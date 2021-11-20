let videoBg = document.querySelector('.header__bg-video'),
    video = document.querySelector('.header__video'),
    source = video.querySelectorAll('source');

// скорость воспроизведения
//video.playbackRate = 1.2;

let errorCount = 0;
source.forEach(element => {
    element.addEventListener('error', function () {
        errorCount++;
        if (source.length == errorCount) {

            videoBg.classList.remove('_active');
        }
    });
})

video.addEventListener('ended', function () {
    videoBg.style.opacity = '0';
    videoBg.style.visibility = 'hidden';

});

videoBg.addEventListener('click', function () {
    videoBg.style.opacity = '0';
    videoBg.style.visibility = 'hidden';

});