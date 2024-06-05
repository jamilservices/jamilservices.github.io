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

const githubProfile = [
    makeTitle({
        text: "GitHub", size: 3
    }),
    makeLink({
        title: "github: jamilservicos",
        text: "\u0040jamilservicos",
        href: "https://github.com/jamilservicos"
    }),
    makeLink({
        title: "github: jamilservices",
        text: "\u0040jamilservices",
        href: "https://github.com/jamilservices"
    }),
    makeLink({
        title: "github: SimplyBuilder",
        text: "\u0040SimplyBuilder",
        href: "https://github.com/SimplyBuilder"
    }),
];
const npmProfile = [
    makeTitle({
        text: "npmjs", size: 3
    }),
    makeLink({
        title: "npm profile",
        text: "\u0040juliojamil",
        href: "https://www.npmjs.com/~juliojamil"
    }),
    makeLink({
        title: "npm filtered by jamilservices",
        text: "\u0040jamilservices",
        href: "https://www.npmjs.com/org/jamilservices"
    })
];

const facebook = [
    makeTitle({
        text: "Facebook", size: 3
    }),
    makeLink({
        title: "facebook page: JamilServicos",
        text: "\u0040JamilServicos",
        href: "https://www.facebook.com/JamilServicos"
    }),
    makeLink({
        title: "facebook page: JamilServices",
        text: "\u0040JamilServices",
        href: "https://www.facebook.com/JamilServices"
    }),
];
const twitter = [
    makeTitle({
        text: "X (antigo Twitter)", size: 3
    }),
    makeLink({
        title: "x: jamilservicos",
        text: "\u0040jamilservicos",
        href: "https://x.com/jamilservicos"
    }),
    makeLink({
        title: "x: jamilservices",
        text: "\u0040jamilservices",
        href: "https://x.com/jamilservices"
    }),
];
const linkedin = [
    makeTitle({
        text: "Linkedin", size: 3
    }),
    makeLink({
        title: "linkedin: jamilservicos",
        text: "\u0040jamilservicos",
        href: "https://www.linkedin.com/in/jamilservicos/"
    }),
    makeLink({
        title: "linkedin: jamilservicos",
        text: "\u0040jamilservicos",
        href: "https://www.linkedin.com/company/jamilservices"
    }),
];

const privateProjectStruct = {
    element: "ul",
    children: [
        makeItem([makeTitle({
            text: "Frontend App", size: 3
        })]),
        makeItem([makeTitle({
            text: "Backend App", size: 3
        })]),
        makeItem([makeTitle({
            text: "Server Manager", size: 3
        })])
    ]
};

const openSourceStruct = {
    element: "ul",
    children: [
        makeItem(githubProfile),
        makeItem(npmProfile)
    ]
};

const socialStuct = {
    element: "ul",
    children: [
        makeItem(facebook),
        makeItem(twitter),
        makeItem(linkedin)
    ]
};

const main = {
    element: "article",
    attr: {
        class: "home",
    },
    children: [
        makeTitle({
            text: "Social NetWorks"
        }), socialStuct,
        makeTitle({
            text: "Open Source"
        }), openSourceStruct,
        makeTitle({
            text: "Remote Business"
        }), privateProjectStruct
    ]
};

const struct = {
    element: "section",
    dataset: {
        state: "view.main"
    },
    children: [main]
};

export const homeStruct = Object.freeze(struct);