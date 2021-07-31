document.addEventListener('DOMContentLoaded', function () {
    var secondarySlider = new Splide('#secondary-slider', {
        rewind: true,
        rewindSpeed: 700,
        gap: 25,
        autoplay: 1,
        padding: 25,
        cover: true,
        isNavigation: true,
        pagination: false,
        arrows: false,
        focus: 'center',
        breakpoints: {
            640: {
                gap: 5,
            },
        }
    }).mount();

    var primarySlider = new Splide('#primary-slider', {
        drag: false,
        type: 'fade',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
    }); // do not call mount() here.

    primarySlider.sync(secondarySlider).mount();

    var thirdSlider = new Splide('#third-slider', {
        rewind: true,
        rewindSpeed: 700,
        gap: 20,
        autoplay: 1,
        cover: true,
        isNavigation: true,
        pagination: false,
        arrows: false,
        focus: 'center',
        breakpoints: {
            640: {
                gap: 20,
            },
            1135: {
                gap: 20,
            },
        }
    }).mount();
});