const splide = new Splide('#splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    autoWidth: true,
    gap: 40,
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: 2,
    },
});

splide.mount(window.splide.Extensions);

const splideTwo = new Splide('#splide2', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    autoWidth: true,
    gap: 40,
    arrows: false,
    pagination: false,
    direction: 'rtl',
    autoScroll: {
        speed: 2,
    },
});

splideTwo.mount(window.splide.Extensions);