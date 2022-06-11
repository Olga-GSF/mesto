// const imagePopupCard = document.querySelector('.popup__big-image')
// const imagePopupTitle = document.querySelector('.popup__image-title')
// const imagePopupAlt = document.querySelector('.popup__image-title')

// function openCard(cardElement) {
//   imagePopupCard.src = cardElement.querySelector('.card__image').src;
//   imagePopupTitle.textContent = cardElement.querySelector('.card__title').textContent;
//   imagePopupAlt.alt = cardElement.querySelector('.card__title').textContent;
//   openPopup(imagePopup);
// };

// function createCard(element) {
//   const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
//   const bigImage = cardElement.querySelector('.card__image');
//   bigImage.addEventListener('click', () => openCard(cardElement));

//   bigImage.src = element.link;
//   cardElement.querySelector('.card__title').textContent = element.name;
//   cardElement.querySelector('.card__title').alt = element.name;

//   cardElement.querySelector('.card__button-like').addEventListener('click', handleLikeButton);

//   cardElement.querySelector('.card__button-delete').addEventListener('click', evt => {
//     const card = getCardByEvent(evt);
//     card.remove();
//   });

//   cardsItemsElement.prepend(cardElement);

// }
// initialCards.forEach(createCard);

const imagePopupCard = document.querySelector('.popup__big-image') //КОНС находим классы Значений картинки попапаКартинки
const imagePopupTitle = document.querySelector('.popup__image-title')
const imagePopupAlt = document.querySelector('.popup__image-title')

function openCard(cardElement) { //ФУНК с параметрами link и name для открытия попапаКартинки НЕ ПОНИМАЮ!!!!!!!
  imagePopupCard.src = cardElement.src; //приравниваем значение ссылки к картинке из попапаКартинки НЕПРАВИЛЬНО 
  imagePopupTitle.textContent = element.textContent; //приравниваем значение name к картинке из попапаКартинки НЕПРАВИЛЬНО 
  imagePopupAlt.alt = cardElement.textContent; //приравниваем значение Альта к картинке из попапаКартинки НЕПРАВИЛЬНО 
  openPopup(imagePopup); //ФУНК открытия попапКартинки
};

// function renderCard(cardElement) {
//   cardsItemsElement.prepend(cardElement);
// };

function createCard(element) { //ФУНК создания карточки по Темплиту
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //приравниваем Новую КОНС к значению класса card
  const bigImage = cardElement.querySelector('.card__image'); //КОНС находим класс Картинки...но наверное НЕПРАВИЛЬНОЕ название КОНС

  // bigImage.src = element.link; //ЧТо-то пыталась со Значениями и КОНСтантами
  // bigImage.alt = element.name;

  bigImage.addEventListener('click', () => openCard(element.name, element.link)); //ФУНК при клике на КАртинку вызови ФУНК openCard с параметрами

  bigImage.src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name; //приравниваем link и name к классу найденном в cardElement
  cardElement.querySelector('.card__image').alt = element.name;

  cardElement.querySelector('.card__button-like').addEventListener('click', handleLikeButton); //ФУНК при клике вызови ФУНК смены класса туда-сюда

  cardElement.querySelector('.card__button-delete').addEventListener('click', evt => { //ФУНК при клике НЕ ПОНИМАЮ (точнее знаю что это но не понимаю почему так)
    const card = getCardByEvent(evt);
    card.remove();
  });

  cardsItemsElement.prepend(cardElement); //ФУНК добавления карточки спереди
  //return cardElement;
}
initialCards.forEach(createCard); //ФУНК для каждой карточки ихз массива вызови ФУНК создания карточки (НЕ ПОНИМАЮ, почему без скобок и параметров!!!)

function addCard(image, title) {
  const cardFull = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardFull.querySelector('.element__image');
  cardImage.src = image;
  cardImage.alt = title;
  cardFull.querySelector('.element__title').textContent = title;
  cardFull.querySelector('.element__like').addEventListener('click', likeCard);
  cardFull.querySelector('.element__delete').addEventListener('click', removeCard);
  cardImage.addEventListener('click', () => scaleImage(cardImage));
  return cardFull;
};

function renderCard(elementPlace, element) {
  elementPlace.prepend(element);
};

initialCards.forEach((item) => {
  const element = addCard(item.link, item.name);
  renderCard(cardElements, element);
});


// function renderCard(cardElement) {
//   cardsItemsElement.prepend(cardElement);
// };



const imagePopupCard = document.querySelector('.popup__big-image') //ДОМ элемент тега большой картинки
const imagePopupTitle = document.querySelector('.popup__image-title') //тайтл тега тайтла большой картинки
const imagePopupAlt = document.querySelector('.popup__image-title') // Альт тега большой картинки

function createCard(element) { //ФУНК для создания карточки по ДОМ элементу Темплита тега card
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const bigImage = cardElement.querySelector('.card__image'); //КОНС находим класс Картинки в ДОМ элемнте тега card
  bigImage.addEventListener('click', () => openCard(element));//ФУНК при клике на КАртинку вызови ФУНК openCard с параметрами ДОМ элемента тега Темплита

  bigImage.src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name; //находим значения для ДОМ элемента
  cardElement.querySelector('.card__title').alt = element.name;

  cardElement.querySelector('.card__button-like').addEventListener('click', handleLikeButton); //при клике на ДОМ элемент с таким классом вызови ФУНК подстановки Модификатора

  cardElement.querySelector('.card__button-delete').addEventListener('click', evt => { //при клике на ДОМ элемент с таким классом вызови ФУНК удаления карточки ниже
    const card = getCardByEvent(evt);
    card.remove();
  });

  //return cardElement;
  cardsItemsElement.prepend(cardElement); //ФУНК выбора ДОМ элемента их списка ДОМ элементов и Добавление нового спереди
}

initialCards.forEach(createCard); //для каждого лемента массива вызови ФУНК создания карточки (почему-то без скобок и параметров)

function openCard(element) { //ФУНК открытия ДОМ элемента c параметром element
  imagePopupCard.src = element.link; //отждествление значений линк и нейм для новых КОНС
  imagePopupTitle.textContent = element.name;
  imagePopupAlt.alt = element.name;
  openPopup(imagePopup);
};

// function renderCard(cardElement) {
//   cardsItemsElement.prepend(cardElement);
// };

