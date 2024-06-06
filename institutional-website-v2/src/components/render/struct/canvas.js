'use strict';

import {logoSVGStruct} from "@components/render/struct/logoSVG.js";
import {themeSettingsStruct} from "@components/render/struct/theme.js";

const menuItems = [
    {text: "home", link: "home"},
    {text: "sponsors", link: "sponsors"},
    {text: "sobre", link: "about"}
];

const menuItemsStruct = (mobile = false) => {
    const struct = [];
    for (let i = (menuItems.length - 1); i >= 0; i--) {
        const item = menuItems[i];
        if (item) {
            const {text, link} = item;
            if (text && link) {
                const itemSchema = {
                    element: "a",
                    attr: {
                        href: "./#/" + link
                    },
                    text
                };
                if (mobile) {
                    itemSchema['dataset'] = {nav: "hide-mobile"};
                    itemSchema['event'] = {type: "click", action: "mobile-menu-action"};
                }
                const schema = {
                    element: "li",
                    attr: {
                        class: "item-menu link"
                    },
                    children: [itemSchema]
                };
                struct.push(schema);
            }
        }
        if (i === 0) return struct.toReversed();
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
            children: [
                {
                    element: "li",
                    attr: {
                        class: "item-menu link"
                    },
                    children: [
                        {
                            element: "span",
                            text: "\u2630 menu",
                            dataset: {
                                nav: "show-mobile"
                            },
                            event: {
                                type: "click",
                                action: "mobile-menu-action"
                            }
                        }
                    ]
                }
            ]
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
const mobileMenuStruct = {
    element: "section",
    attr: {
        class: "mobile-menu"
    },
    children: [
        {
            element: "span",
            text: "\u2715",
            attr: {
                class: "link"
            },
            dataset: {
                nav: "hide-mobile"
            },
            event: {
                type: "click",
                action: "mobile-menu-action"
            }
        },
        {
            element: "ul",
            children: menuItemsStruct(true)
        }
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
        {
            element: "input",
            attr: {
                type: "checkbox",
            },
            dataset: {
                state: "menu-mobile-control",
            }
        },
        mobileMenuStruct,
        headerStruct,
        themeSettingsStruct,
        contentStruct,
        footerStruct
    ]
};

export const canvasStruct = Object.freeze(struct);