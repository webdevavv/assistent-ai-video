const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});



function toggleActiveState(item) {
    const icon = item.querySelector('.asks-list-icon');
    const sub = item.querySelector('.asks-list-sub');

    if (icon.classList.contains('active') && sub.classList.contains('active')) {
        icon.classList.remove('active');
        sub.classList.remove('active');
    } else {
        document.querySelectorAll('.asks-list-icon.active, .asks-list-sub.active').forEach(activeItem => {
            activeItem.classList.remove('active');
        });

        icon.classList.add('active');
        sub.classList.add('active');
    }
}

document.querySelectorAll('.often-asks-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.asks-list-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});




document.querySelectorAll('.range-input').forEach((sliderEl) => {
    const valueDisplay = document.querySelector(sliderEl.getAttribute('data-value'));

    // Инициализация текущих значений на старте
    updateSlider(sliderEl, valueDisplay);

    // Добавляем слушатель на изменение
    sliderEl.addEventListener('input', () => updateSlider(sliderEl, valueDisplay));
});

function updateSlider(slider, valueDisplay) {
    const tempSliderValue = slider.value;
    valueDisplay.textContent = tempSliderValue;

    const progress = (tempSliderValue / slider.max) * 100;

    slider.style.background = `linear-gradient(to right, #0057FF ${progress}%, #ccc ${progress}%)`;
}



document.querySelectorAll('.video-block').forEach(block => {
    const playButton = block.querySelector('.playButton');
    const videoPlayer = block.querySelector('.videoPlayer');
    const defaultImage = block.getAttribute('data-image');
    let isPlaying = false;

    // Функция воспроизведения
    function playVideo() {
        block.style.backgroundImage = "none";
        videoPlayer.style.display = "block";
        videoPlayer.play();
        playButton.style.display = "none";
        isPlaying = true;
    }

    // Функция остановки
    function stopVideo() {
        block.style.backgroundImage = `url('${defaultImage}')`;
        videoPlayer.style.display = "none";
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        playButton.style.display = "block";
        isPlaying = false;
    }

    // Если блок имеет класс autoplay, запускаем видео
    if (block.classList.contains('autoplay')) {
        videoPlayer.addEventListener('canplay', () => {
            playVideo();
        });
    }


    // Событие: клик по кнопке воспроизведения
    playButton?.addEventListener("click", () => {
        isPlaying ? stopVideo() : playVideo();
    });

    // Событие: когда видео завершилось
    videoPlayer.addEventListener("ended", stopVideo);
});

