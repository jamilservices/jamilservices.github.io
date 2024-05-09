'use strict';

const mainText = {
    element: "img",
    attr: {
        src: "./assets/svg/logo.svg"
    }
};

const helloWordExample = [
    mainText,
    {
        element: "h4",
        text: "come soon...."
    }
];

export const comeSoonPage = Object.freeze(helloWordExample);