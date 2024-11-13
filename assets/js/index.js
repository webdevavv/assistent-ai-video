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

const playButton = document.getElementById("playButton");
const videoContainer = document.getElementById("videoContainer");
const videoPlayer = document.getElementById("videoPlayer");

let isPlaying = false;

function toggleVideo() {
    if (!isPlaying) {
        videoContainer.style.backgroundImage = "none";
        videoPlayer.style.display = "block";
        videoPlayer.play();
        playButton.style.display = "none";
        isPlaying = true;
    } else {
        videoContainer.style.backgroundImage = "url('assets/img/convertimage.webp')";
        videoPlayer.style.display = "none";
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        playButton.style.display = "block";
        isPlaying = false;
    }
}

playButton.addEventListener("click", toggleVideo);

videoPlayer.addEventListener("ended", function() {
    videoContainer.style.backgroundImage = "url('assets/img/convertimage.webp')";
    videoPlayer.style.display = "none";
    videoPlayer.currentTime = 0;
    playButton.style.display = "block";
    isPlaying = false;
});