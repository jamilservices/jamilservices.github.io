'use strict';

import {CoreModule} from '@jamilservices/sb-core-module';
import {canvasStruct, homeStruct, aboutStruct, sponsorStruct} from "@components/render/struct/main.js";
import {NotifyModule} from '@jamilservices/sb-module-notify';

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
CoreModule.eventRegister("nav-action", navigateAction)

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
    CoreModule.createFromStruct({
        parent: window.document.body,
        struct: canvasStruct
    });
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