import { mostrarHp } from "url";

/* Manejo de data */

// esta es una función de ejemplo

export const mostrarHp = (data) => {
    let templatePotter = '';
    data.map(obj => {
        templatePotter += `
        <div>
        <div id="${obj.id}" name='potter'>
            <img src="${obj.img}"/>
        </div>
        <p >${obj.name}</p>
        </div>`;
    });

    return templatePotter;
};
