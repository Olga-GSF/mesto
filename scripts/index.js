const cardTemplate = document.querySelector('#card-template').content; //ДОМ элемент темплейт тега карточки

const buttonEditProfile = document.querySelector('.profile__button-edit') //ДОМ элемент тега кнопки

const popup = document.querySelectorAll('.popup'); //ДОМ элемент общего тега попап
const profilePopup = document.querySelector('.popup_type_edit-profile') //КОНС находим класс для отличия попапаПрофиля
const cardPopup = document.querySelector('.popup_type_add-card') //КОНС находим класс для отличия попапаДобавления
const imagePopup = document.querySelector('.popup_type_big-image') //КОНС находим класс для отличия попапаКартинки

const buttonCloseProfile = document.querySelector('.popup__button-close_place_edit') //КОНС находим класс для кнопок Крестика-закрытия попапов
const buttonCloseCard = document.querySelector('.popup__button-close_place_add')
const buttonCloseImage = document.querySelector('.popup__button-close_place_image')

const buttonAddCard = document.querySelector('.profile__button-add') //КОНС находим класс для кнопки с Плюсом, добавления карточки
const buttonDelete = document.querySelector('.card__button-delete') //КОНС находим класс для Мусорки

const titleElement = document.querySelector('.profile__title') //КОНС находим класс для Тайтла профиля
const subtitleElement = document.querySelector('.profile__subtitle') //КОНС находим класс для сабТайтла профиля
const nameFieldElement = document.querySelector('.popup__input_name_firstname') //КОНС находим класс для поля ввода имени профиля
const descriptionFieldElement = document.querySelector('.popup__input_name_description') //КОНС находим класс для поля ввода описания профиля

const formElementProfile = document.querySelector('.popup__form') //КОНС находим класс для формы Профиля
const formElementCard = document.querySelector('.popup__form_place_add') //КОНС находим класс для формы Добавления
const cardsItemsElement = document.querySelector('.cards__items') //КОНС находим класс для Списка карточек - Ul
const nameAddFieldElement = document.querySelector('.popup__input_name_place') //КОНС находим класс для поля ввода названия места при Добавлении
const linkFieldElement = document.querySelector('.popup__input_name_link') //КОНС находим класс для поля ввода ссылки на карточку

const getCardByEvent = evt => evt.currentTarget.closest('.card'); //КОНС находим по Евенту ближайшую карточку

function openPopup(popup) { //ФУНК общая для Открытия попапа
  popup.classList.add('popup_is-open'); //добавляем новый модификатор к классу popup для Открытия
};

function openProfilePopup() { //ФУНК для Открытия попапаПрофиля
  nameFieldElement.value = titleElement.textContent; //отождествляем Value поляПрофиля с Value тайтла Карточки (из Темплита)
  descriptionFieldElement.value = subtitleElement.textContent;//отождествляем Value поляПрофиля с Value сабтайтла Карточки (из Темплита)
  openPopup(profilePopup) //ФУНК открытия попапаПрофиля (вызываем открытия параметра Конкретного)
};

function closePopup(popup) { //ФУНК общая для Закрытия попапа
  popup.classList.remove('popup_is-open'); //удаляем новый модификатор к классу popup для Открытия
};

function editFormProfile(event) { //ФУНК для формыПрофиля
  event.preventDefault() //евент для отмены сброса формы
  titleElement.textContent = nameFieldElement.value; //отождествляем Value поляПрофиля с Value тайтла Карточки (из Темплита)
  subtitleElement.textContent = descriptionFieldElement.value; //отождествляем Value поляПрофиля с Value сабтайтла Карточки (из Темплита)
  formElementProfile.reset(); //очистка формы после сабмита
  closePopup(profilePopup); //ФУНК закрытия попапаПрофиля
};

function addFormCard(evt) { //ФУНК для формыДобавления
  evt.preventDefault() //отмена сброса
  const cardNew = { //ФУНК - НЕ понимаю для чего Новая переменная!!!!!!!!
    name: nameAddFieldElement.value, //приравниваем name Картинки к значению поля ввода Названия места
    link: linkFieldElement.value //приравниваем link Картинки к значению поля ввода ссылки места
  };
  createCard(cardNew); //ФУНК вызова этой Новой КОНС
  formElementCard.reset(); //очистка полей
  closePopup(cardPopup); //закрываем попапДобавления
};

buttonEditProfile.addEventListener('click', () => openPopup(profilePopup)); //ФУНК при клике на кнопкуКарандашик открой попапПрофиля
buttonCloseProfile.addEventListener('click', () => closePopup(profilePopup)); //ФУНК при клике на кнопкуКрестикПрофиля закрой попапПрофиля
buttonCloseCard.addEventListener('click', () => closePopup(cardPopup)); //ФУНК при клике на кнопкуКрестикДобавления закрой попапДобавления
buttonCloseImage.addEventListener('click', () => closePopup(imagePopup)); //ФУНК при клике на кнопкуКрестикКартинки закрой попапКартинки
buttonAddCard.addEventListener('click', () => openPopup(cardPopup)); //ФУНК при клике на кнопкуДобавленияПлюсик открой попапДобавления
formElementProfile.addEventListener('submit', editFormProfile); //ФУНК при нажатии на СабмитПрофиля Вызови ФУНК заполнения формыПрофиля
formElementCard.addEventListener('submit', addFormCard); //ФУНК при нажатии на СабмитДобавления Вызови ФУНК заполнения формыДобавления

function handleLikeButton(evt) { //ФУНК по евенту Меняй класс туда-сюда на Модификатор такой-то
  evt.target.classList.toggle('button_is-active');
};

const imagePopupCard = document.querySelector('.popup__big-image')
const imagePopupTitle = document.querySelector('.popup__image-title')
const imagePopupAlt = document.querySelector('.popup__image-title')

function createCard(element) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const bigImage = cardElement.querySelector('.card__image');
  bigImage.addEventListener('click', () => openCard(element));

  bigImage.src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__title').alt = element.name;

  cardElement.querySelector('.card__button-like').addEventListener('click', handleLikeButton);

  cardElement.querySelector('.card__button-delete').addEventListener('click', evt => {
    const card = getCardByEvent(evt);
    card.remove();
  });

  //return cardElement;
  cardsItemsElement.prepend(cardElement);
}

initialCards.forEach(createCard);

function openCard(element) {
  imagePopupCard.src = element.link;
  imagePopupTitle.textContent = element.name;
  imagePopupAlt.alt = element.name;
  openPopup(imagePopup);
};

// function renderCard(cardElement) {
//   cardsItemsElement.prepend(cardElement);
// };