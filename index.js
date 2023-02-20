const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {

    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + '%'
    // By setting the initial background size to 160%, the background image is initially scaled up to be larger than its natural size.As the user scrolls down the page, the code reduces the background-size value based on the scroll position, causing the background image to gradually scale down. This effect can be used to create a sense of depth and motion

    // the number 12 is arbitary and we can select any number. If a larger value were used (e.g. 20), the background-size value would be reduced more quickly as the user scrolls, which could result in a more abrupt scaling effect. Conversely, if a smaller value were used (e.g. 6), the background-size value would be reduced more slowly, which could result in a less noticeable effect.

    bgImageEl.style.opacity = 1 - window.pageYOffset / 800
    // window.pageYOffset returns the number of pixels that the document has been scrolled vertically from the top.

    // 800 is a constant value that sets the speed at which the opacity changes in response to the scrolling. A higher value will make the opacity change more slowly, while a lower value will make it change more quickly.

    // When the user is at the top of the page, window.pageYOffset is 0 and the opacity is set to 1 (fully visible). As the user scrolls down the page, the opacity decreases, making the background image progressively more transparent.
});
