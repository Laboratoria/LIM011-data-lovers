// function to get y show data using template
export const showTemplate = (objDataPotter) => {
  const template = document.createElement('article');
  template.className = 'card-data';
  template.innerHTML = `
    <div class='card-details'>
      <img class='img-card' src='${objDataPotter.image}'/>
    </div>
    <div class='card-description'> 
      <h2 class='features' id='name'>${objDataPotter.name}</h2>
      <h3 class='features' id='house'>~ ${objDataPotter.house} ~</h3>
      <button class='btn-general features btn-knowmore' type='submit'>DESCUBRE MAS</button> 
    </div> `;
  const buttonElem = template.querySelector('button');
  // event to get data and create modal using template
  buttonElem.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const cardPotter = `
      <div class="popup" id="popup">
      <section class = "header-modal">
      <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
      <img class='img-modal-card' src='${objDataPotter.image}'/>
      <h2 class='features' id='name'>${objDataPotter.name}</h2>
      <h3 class='features' id='house'>~ ${objDataPotter.house} ~</h3>
      <section/>
      <section class = "main-modal">
        <h2 class='modal-features' id='name'>${objDataPotter.name}</h2>
      <section/>`;
    overlay.innerHTML = cardPotter;
    document.querySelector('.modal').appendChild(overlay);
    const popup = overlay.querySelector('.popup');
    overlay.classList.add('active');
    popup.classList.add('active');
    const closePopup = overlay.querySelector('.btn-cerrar-popup');
    closePopup.addEventListener('click', () => {
      overlay.classList.remove('active');
      popup.classList.remove('active');
    });
  });
  return template;
};
// function to go through for each object
export const showMainData = (listdataPotter) => {
  listdataPotter.forEach((objDataPotter) => {
    document.querySelector('.data-characters').appendChild(showTemplate(objDataPotter));
  });
};
export function filterHouse(dataPotter, houseSelected) {
  const dataFilterHouse = dataPotter.filter((data) => (data.house === houseSelected));
  return dataFilterHouse;
}
export function filterRole(dataPotter, roleSelected) {
  const dataFilterRole = dataPotter.filter((data) => (
    data.hogwartsStudent.toString() === roleSelected));
  return dataFilterRole;
}
