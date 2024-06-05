'use strict';

import { RouterModule } from '@jamilservices/sb-module-router';
import {NotifyModule} from "@jamilservices/sb-module-notify";
const routers = RouterModule.instance({subpath: true});
const navActions = NotifyModule.instance("nav-action");

routers.register({
    id: "home",
    title: "Jamil Services - Home"
});
routers.register({
    id: "about",
    title: "Jamil Services - Sobre"
});
routers.register({
    id: "sponsors",
    title: "Jamil Services - Patrocinadores"
});

routers.register({
    id: "404",
    redirect: "home"
})
navActions.subscribe({
    id: "store-watch",
    fn: data => {
        const {origin, action} = data;
        if(origin && origin === "nav" && action) {
            routers.navigate(action);
        }
    }
});
export default Object.freeze({});