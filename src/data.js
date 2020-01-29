/* eslint-disable no-prototype-builtins */
/* eslint-disable max-len */
// eslint-disable-next-line no-prototype-builtins
export const filtroTipoPokemon = (data, tipo) => data.filter((item) => (item.type.indexOf(tipo) !== -1));
export const busquedaPokemonNombre = (data, nombre) => data.filter((item) => item.name.toLowerCase().startsWith(nombre));
export const filtroAlfabeticoAZ = (data) => data.sort((a, b) => a.name.localeCompare(b.name));
export const filtroAlfabeticoZA = (data) => data.sort((a, b) => b.name.localeCompare(a.name));
export const ordenNumerico = (data) => data.sort((a, b) => a.num.localeCompare(b.num));
export const evolucionCaramelos = (data, nombre, candyUsuario) => {
  let candy = 0;
  let arreglo = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].name === nombre) {
      if (data[i].hasOwnProperty('candy_count') !== -1 && data[i].candy_count > parseInt(candyUsuario, 0) && data[i].hasOwnProperty('next_evolution') !== -1) {
        candy = data[i].candy_count - parseInt(candyUsuario, 0);

        arreglo = [{
          numero: candy, mensaje: `Te faltan ${candy} Caramelos para evolucionar a tu ${data[i].name}...`, mensaje2: `... a un ${data[i + 1].name}.`, img: data[i].img, name: data[i].name, id: data[i].id, num: data[i].num, imgEvo: data[i + 1].img,
        }];
        return arreglo;
      // faltan caramelos
      } if (data[i].hasOwnProperty('candy_count') !== -1 && parseInt(candyUsuario, 0) > data[i].candy_count && data[i].hasOwnProperty('next_evolution') !== -1) {
        candy = candyUsuario - data[i].candy_count;
        arreglo = [{
          numero: candy, mensaje: `¡Puedes evolucionar tu ${data[i].name}...`, mensaje2: `... a un ${data[i + 1].name}!`, img: data[i].img, name: data[i].name, id: data[i].id, num: data[i].num, imgEvo: data[i + 1].img,
        }];
        return arreglo;
      }
      candy = undefined;
      arreglo = [{
        numero: candy, mensaje: `Ya no puedes evolucionar tu ${data[i].name}, te quedan ${candyUsuario} caramelos.`, img: data[i].img, name: data[i].name, id: data[i].id,
      }];
      return arreglo;
    }
  } return arreglo;
};
