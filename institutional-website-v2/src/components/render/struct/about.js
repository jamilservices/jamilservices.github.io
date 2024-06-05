'use strict';

const main = {
    element: "article",
    attr: {
        class: "about",
    },
    children: [
        {
            element: "h2",
            text: "A Origem do nome"
        },
        {
            element: "p",
            text: "Jamil Services ou Jamil Servi\u00E7os, \u00E9 como Gerv\u00E1sio J\u00FAnior apresenta seus trabalhos t\u00E9cnicos e de desenvolvimento."
        },
        {
            element: "p",
            text: "O nome surgiu ap\u00F3s uma constante brincadeira de clientes que o chamavam de \"Jamil Servi\u00E7os\", em refer\u00EAncia ao nome \"Jamil\" e aos muitos servi\u00E7os prestados."
        },
        {
            element: "p",
            text: "\"Jamil\" virou um apelido comum entre clientes e amigos, devido ao seu nome art\u00EDstico \"J\u00FAlio Jamil\", que foi adotado ao ser convidado para ser parte de um grupo de Poetas e Escritores da Cidade na \u00E9poca."
        },
        {
            element: "p",
            text: "Anteriormente assinando seus trabalhos como \"Webmaster\" na forma de \"JJWebMaster\", o mesmo ainda se apresentava para outros trabalhos como \"J\u00FAlio Jamil\" devido \u00E0 dificuldade de algumas pessoas em pronunciar \"Gerv\u00E1sio\"."
        },
        {
            element: "p",
            text: "A partir do momento que adotou o nome profissional como \"Jamil Servi\u00E7os\", ele o unificou como representa\u00E7\u00E3o de trabalhos t\u00E9cnicos e de desenvolvimento, criando uma f\u00E1cil refer\u00EAncia para seus clientes."
        },
        {
            element: "p",
            text: "Em 2010, Gerv\u00E1sio J\u00FAnior registrou sua primeira MEI e utilizou o nome \"Jamil Servi\u00E7os\" como nome fantasia. Em 2018, devido a algumas mudan\u00E7as nas regras da MEI, ele baixou a sua antiga MEI e registrou uma nova com altera\u00E7\u00F5es de categoria."
        },
        {
            element: "p",
            text: "Gerv\u00E1sio J\u00FAnior \u00E9 Jamil Servi\u00E7os tanto como pessoa f\u00EDsica quanto jur\u00EDdica."
        },
        {
            element: "p",
            text: "\"Jamil Servi\u00E7os/Services\" pode representar Gerv\u00E1sio J\u00FAnior em seus trabalhos como freelancer tanto como Pessoa Jur\u00EDdica."
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

export const aboutStruct = Object.freeze(struct);