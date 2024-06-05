'use strict';

import {CoreModule} from '@jamilservices/sb-core-module';
import {canvasStruct, homeStruct, aboutStruct, sponsorStruct} from "@components/render/struct/main.js";
import {NotifyModule} from '@jamilservices/sb-module-notify';

const document = window.document.querySelector(':root');
const storageKey = 'theme-preference';
let themeMode;

const storeEvents = NotifyModule.instance("page-store");
const navActions = NotifyModule.instance("nav-action");

const pages = {
    "home": homeStruct,
    "sponsors": sponsorStruct,
    "about": aboutStruct,
};
const navigateAction = (e) => {
    if(e?.target?.dataset) {
        const {nav} = e.target.dataset;
        if(nav) {
            navActions.emit({
               origin: "nav",
               action: nav
            });
        }
    }
};
CoreModule.eventRegister("nav-action", navigateAction);
const colorSettings = (e) => {
    if(e?.target?.value && e.target.name) {
        const {value = 0, name} = e.target;
        if(value >= 1) {
            document.style.setProperty('--' + name +'-color', value +"%");
        } else document.style.removeProperty('--'+ name +'-color');

        if(Number(document.style.getPropertyValue("--sepia-color")) === 0
        && Number(document.style.getPropertyValue("--gray-color")) === 0) {
            document.removeAttribute("style");
        }
    }
};
CoreModule.eventRegister("color-settings", colorSettings);

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
};
const setPreference = () => {
    localStorage.setItem(storageKey, themeMode === 'dark' ? 'dark' : 'light');
    const selector = CoreModule.getElementFromStore("theme-"+ themeMode);
    if(selector) selector.checked = true;
    document.setAttribute("class", "theme-"+ themeMode);
};
const themeSwicth = (e) => {
   if(e?.target?.value) {
        const {value} = e.target;
        if(value) {
            themeMode = value;
            setPreference();
        }
    }
};
CoreModule.eventRegister("theme-swicth", themeSwicth );

const renderSection = (section) => {
    const parent = CoreModule.getElementFromStore("main.canvas");
    /**
     * @type {HTMLElement}
     */
    const viewMain = CoreModule.getElementFromStore("view.main");
    if(viewMain) {
        /**
         * remove elements and events recursively
         */
        CoreModule.removeElement(viewMain);
    }
    if (parent && pages[section]) {
        CoreModule.createFromStruct({
            parent,
            struct: pages[section]
        });
    }
};
const renderCanvas = (section = {}) => {
    themeMode = getColorPreference();
    CoreModule.createFromStruct({
        parent: window.document.body,
        struct: canvasStruct
    });
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({matches:isDark}) => {
            themeMode = isDark;
            setPreference();
        });
    setPreference();
    renderSection(section);
};
const renderPage = (section) => {
    /**
     * @type {HTMLElement}
     */
    const parent = CoreModule.getElementFromStore("main.canvas");
    if (parent) {
        renderSection(section);
    } else renderCanvas(section);
};
storeEvents.subscribe({
    id: "render-watch",
    fn: data => {
        const {origin, render} = data;
        if (origin === "page-store") renderPage(render);
    }
});

export default Object.freeze({});