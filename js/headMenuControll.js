import {fadeIn, fadeOut} from "./fadeIO.js";

window.onload = function () {
    const headMenuChbox = document.querySelector("#head-menu-chbox");
    headMenuChbox.addEventListener('input', () => {
        const headMenuView = document.querySelector("#head-menu-view")
        if (headMenuChbox.checked) {
            fadeIn(headMenuView);
        } else {
            fadeOut(headMenuView);
        }
    });
    const mediaArtChbox = document.querySelector("#mediaart-chbox");
    mediaArtChbox.addEventListener('input', () => {
        document.querySelectorAll(".media-art-box").forEach(elem => {
            if (mediaArtChbox.checked) {
                elem.style.display = 'block';
            } else {
                elem.style.display = 'none';
            }
        });
    });
    const videoChbox = document.querySelector("#video-chbox");
    videoChbox.addEventListener('input', () => {
        document.querySelectorAll(".video-box").forEach(elem => {
            if (videoChbox.checked) {
                elem.style.display = 'block';
            } else {
                elem.style.display = 'none';
            }
        });
    });
    const softwareChbox = document.querySelector("#software-chbox");
    softwareChbox.addEventListener('input', () => {
        document.querySelectorAll(".software-box").forEach(elem => {
            if (softwareChbox.checked) {
                elem.style.display = 'block';
            } else {
                elem.style.display = 'none';
            }
        });
    });
}

