/* eslint-disable max-len */
export const filtroTipoPokemon = (data, tipo) => data.filter((item) => (item.type.indexOf(tipo) !== -1));
export const busquedaPokemonNombre = (data, nombre) => data.filter((item) => item.name.toLowerCase().startsWith(nombre));
export const filtroAlfabeticoAZ = (data) => data.sort((a, b) => a.name.localeCompare(b.name));
export const filtroAlfabeticoZA = (data) => data.sort((a, b) => b.name.localeCompare(a.name));
export const ordenNumerico = (data) => data.sort((a, b) => a.num.localeCompare(b.num));
// eslint-disable-next-line no-prototype-builtins
export const tieneEvolucion = (data) => data.filter((item) => (item.hasOwnProperty('next_evolution')));
export const caramelos = (data, nombre, candyUsuario) => {
  let candy = 0;
  // let arreglo = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === nombre) {
      // sobran caramelos
      if (data[i].hasOwnProperty('candy_count') !== -1 && data[i].candy_count > parseInt(candyUsuario, 0) && data[i].hasOwnProperty('next_evolution')!== -1) {
        candy = data[i].candy_count - parseInt(candyUsuario, 0);
        
        return [{ numero: candy, mensaje: `Te faltan ${candy} Caramelos para evolucionar a tu ${data[i].name}...`, mensaje2: `... a un ${data[i+1].name}.`, img: data[i].img, name: data[i].name, id: data[i].id, num: data[i].num, imgEvo: data[i+1].img}];
      // faltan caramelos
      } if (data[i].hasOwnProperty('candy_count') !== -1 && parseInt(candyUsuario, 0) > data[i].candy_count && data[i].hasOwnProperty('next_evolution')!== -1) {
        candy = candyUsuario - data[i].candy_count;

       return [{ numero: candy, mensaje: `¡Puedes evolucionar tu ${data[i].name}...`,  mensaje2: `... a un ${data[i+1].name}!`,img: data[i].img, name: data[i].name, id: data[i].id, num: data[i].num, imgEvo: data[i+1].img}];
      } else {
        // no puede evolucionar
        candy = undefined;
        return [{ numero: candy, mensaje: `Ya no puedes evolucionar tu ${data[i].name}, te quedan ${candyUsuario} caramelos.`, img: data[i].img, name: data[i].name, id: data[i].id}];
      }
    }}
};