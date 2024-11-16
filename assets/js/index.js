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




function updateSlider(slider, valueDisplay) {
    const tempSliderValue = slider.value;
    valueDisplay.textContent = tempSliderValue;

    const progress = (tempSliderValue / slider.max) * 100;

    slider.style.background = `linear-gradient(to right, #0057FF ${progress}%, #ccc ${progress}%)`;
}

document.querySelectorAll('.range-input').forEach(sliderEl => {
    const valueDisplay = document.querySelector(sliderEl.getAttribute('data-value'));

    sliderEl.addEventListener('input', () => updateSlider(sliderEl, valueDisplay));

    updateSlider(sliderEl, valueDisplay);
})




document.querySelectorAll('.video-block').forEach(block => {
    const playButton = block.querySelector('.playButton');
    const videoPlayer = block.querySelector('.videoPlayer');
    const defaultImage = block.getAttribute('data-image');
    let isPlaying = false;

    function toggleVideo() {
        if (!isPlaying) {
            block.style.backgroundImage = "none";
            videoPlayer.style.display = "block";
            videoPlayer.play();
            playButton.style.display = "none";
            isPlaying = true;
        } else {
            block.style.backgroundImage = `url('${defaultImage}')`;
            videoPlayer.style.display = "none";
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
            playButton.style.display = "block";
            isPlaying = false;
        }
    }

    playButton.addEventListener("click", toggleVideo);

    videoPlayer.addEventListener("ended", function() {
        block.style.backgroundImage = `url('${defaultImage}')`;
        videoPlayer.style.display = "none";
        videoPlayer.currentTime = 0;
        playButton.style.display = "block";
        isPlaying = false;
    });
});
