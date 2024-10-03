document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById('no-button');
    const sadBearImg = document.getElementById('sadbear');
    const container = document.querySelector('.button-container');

    const gifPaths = [
        'resources/sadbear.gif',
        'resources/sadbear.gif',
        'resources/sadbear2.gif',
        'resources/sadbear3.gif',
        'resources/sadbear4.gif'
    ];

    let currentGifIndex = 0;

    function preloadGifs() {
        gifPaths.forEach(function(path) {
            const img = new Image();
            img.src = path;
        });
    }

    preloadGifs();

    function changeGif() {
        currentGifIndex = (currentGifIndex + 1) % gifPaths.length;
        sadBearImg.src = gifPaths[currentGifIndex];
    }

    function moveButtonRandomly() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const randomTop = Math.random() * (containerRect.height - buttonRect.height);
        const randomLeft = Math.random() * (containerRect.width - buttonRect.width);

        noButton.style.top = randomTop + 'px';
        noButton.style.left = randomLeft + 'px';
    }

    function handleNoButtonClick() {
        changeGif();
        moveButtonRandomly();
    }

    noButton.addEventListener('click', handleNoButtonClick);
    noButton.addEventListener('touchstart', function(event) {
        event.preventDefault();
        handleNoButtonClick();
    });
});