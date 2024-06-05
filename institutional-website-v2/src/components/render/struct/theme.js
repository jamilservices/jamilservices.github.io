'use strict';

const makeTitle = (data = {}) => {
    try {
        const {text = "", size = 2} = data;
        let headerSize = "h2";
        if (Number(size) >= 3 && Number(size) <= 4) headerSize = headerSize.replace("2", size);
        return {
            element: headerSize,
            text
        };
    } catch (err) {
        console.error(err);
    }
    return {};
};

const themeStruct = {
    element: "li",
    attr: {
        class: "list"
    },
    children: [
        makeTitle({text: "Tema", size: 3}),
        {
            element: "input",
            attr: {
                type: "radio",
                name: "theme",
                value: "dark"
            },
            dataset: {
                state: "theme-dark"
            },
            event: {
                type: "click",
                action: "theme-swicth"
            }
        },
        {
            element: "input",
            attr: {
                type: "radio",
                name: "theme",
                value: "light"
            },
            dataset: {
                state: "theme-light"
            },
            event: {
                type: "click",
                action: "theme-swicth"
            }
        }
    ]
};
const sepiaStruct = {
    element: "li",
    attr: {
        class: "list"
    },
    children: [
        makeTitle({text: "Sepia", size: 3}),
        {
            element: "input",
            attr: {
                type: "range",
                name: "sepia",
                id: "sepia",
                min: 0,
                max: 100,
                value: 0
            },
            event: {
                type: "input",
                action: "color-settings"
            }
        }
    ]
};
const grayStruct =  {
    element: "li",
    attr: {
        class: "list"
    },
    children: [
        makeTitle({text: "GrayScale", size: 3}),
        {
            element: "input",
            attr: {
                type: "range",
                name: "gray",
                min: 0,
                max: 100,
                value: 0
            },
            event: {
                type: "input",
                action: "color-settings"
            }
        }
    ]
};

const struct = {
    element: "section",
    attr: {
        class: "settings-color"
    },
    children: [
        makeTitle({text: "Ajuste de cor"}),
        {
            element: "ul",
            attr: {
                class: "slider"
            },
            children: [
                themeStruct,
                sepiaStruct,
                grayStruct
            ]
        }
    ]
};

export const themeSettingsStruct = Object.freeze(struct);