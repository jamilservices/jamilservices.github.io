'use strict';

import { RouterModule } from '@jamilservices/sb-module-router';
const routers = RouterModule.instance({subpath: true});

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

export default Object.freeze({});