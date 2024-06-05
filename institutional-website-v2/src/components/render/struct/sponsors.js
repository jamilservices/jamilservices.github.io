'use strict';

const makeLink = (data = {}) => {
    try {
        const {title, text, href = "/#/"} = data;
        if (title && text && href) {
            return {
                element: "a",
                attr: {
                    title, href, target: "_blank"
                },
                text
            };
        }
    } catch (err) {
        console.error(err);
    }
    return {};
};
const makeItem = (children = []) => {
    try {
        if (typeof children === "object" && Array.isArray(children)) {
            return {
                element: "li",
                attr: {
                    class: "list"
                },
                children
            };
        }
    } catch (err) {
        console.error(err);
    }
    return {};
};

const sponsors = {
    element: "ul",
    children: [
        makeItem([makeLink({
            title: "Github Sponsors: jamilservicos",
            text: "Github Sponsors",
            href: "https://github.com/sponsors/jamilservicos"
        })]),
        makeItem([makeLink({
            title: "Patreon: jamilservices",
            text: "Patreon",
            href: "https://www.patreon.com/jamilservices"
        })]),
        makeItem([makeLink({
            title: "opencollective: support-jamilservices",
            text: "OpenCollective",
            href: "https://opencollective.com/support-jamilservices"
        })]),
    ]
}

const main = {
    element: "article",
    attr: {
        class: "sponsors",
    },
    children: [
        {
            element: "h2",
            text: "Como Patrocinar o desenvolvedor?"
        },
        {
            element: "p",
            text: "Como desenvolvedor - Jamil Services - j\u00E1 realizou e ainda realiza diversas contribui\u00E7\u00F5es para projetos OpenSource."
        },
        {
            element: "p",
            text: "Veja algumas maneiras de patrocin\u00E1-lo como desenvolvedor:"
        },
        {
            element: "p",
            attr: {
                class: "list"
            },
            children: [
                sponsors
            ]
        },
    ]
};

const struct = {
    element: "section",
    dataset: {
        state: "view.main"
    },
    children: [main]
};

export const sponsorStruct = Object.freeze(struct);