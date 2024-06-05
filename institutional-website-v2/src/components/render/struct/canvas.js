'use strict';

import {logoSVGStruct} from "@components/render/struct/logoSVG.js";
import {themeSettingsStruct} from "@components/render/struct/theme.js";

const menuItems = [
    {text: "home", link: "home"},
    {text: "sponsors", link: "sponsors"},
    {text: "sobre", link: "about"}
];

const menuItemsStruct = () => {
    const struct = [];
    for(let i = (menuItems.length -1); i >= 0; i--){
        const item = menuItems[i];
        if(item) {
            const {text, link} = item;
            if(text && link) {
                const schema = {
                    element: "li",
                    attr: {
                        class: "item-menu link"
                    },
                    children: [
                        {
                            element: "a",
                            attr: {
                                href: "./#/"+ link
                            },
                            text
                        }
                    ]
                };
                struct.push(schema);
            }
        }
        if(i === 0) return struct.toReversed();
    }
};

const navStruct = {
    element: "nav",
    children: [
        {
            element: "ul",
            attr: {
                class: "default-menu"
            },
            children: menuItemsStruct()
        },
        {
            element: "ul",
            attr: {
                class: "compact-menu"
            },
            children: menuItemsStruct()
        }
    ]
};

const menuStruct = {
    element: "section",
    attr: {
        class: "top-menu"
    },
    children: [
        navStruct
    ]
};
const logoStruct = {
    element: "section",
    attr: {
        class: "logo-menu"
    },
    children:[logoSVGStruct]
};

const headerStruct = {
    element: "header",
    children: [
        logoStruct,
        menuStruct
    ]
};
const contentStruct = {
    element: "main",
    dataset: {
        state: "main.canvas"
    }
};
const footerStruct = {
    element: "footer",
    attr: {
        class: "copyright"
    },
    text: "\u00A9 2010 Jamil Services \u00b7 developed by \uff1cjamilservicos\u0040gmail\u2024com\uff1e"
};
const struct = {
    element: "section",
    attr: {
        class: "canvas-container"
    },
    children: [
        headerStruct,
        themeSettingsStruct,
        contentStruct,
        footerStruct
    ]
};

export const canvasStruct = Object.freeze(struct);