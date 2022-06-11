const cardTemplate = document.querySelector('#card-template').content; //ДОМ элемент темплейт тега карточки

const buttonEditProfile = document.querySelector('.profile__button-edit') //ДОМ элемент тега кнопки

//const popupAll = document.querySelectorAll('.popup'); //ДОМ элемент общего тега попап
const profilePopup = document.querySelector('.popup_type_edit-profile') //ДОМ элемент тега кнопки находим класс для отличия попапаПрофиля
const cardPopup = document.querySelector('.popup_type_add-card') //ДОМ элемент тега кнопки находим класс для отличия попапаДобавления
const imagePopup = document.querySelector('.popup_type_big-image') //ДОМ элемент тега кнопки находим класс для отличия попапаКартинки

const buttonCloseProfile = profilePopup.querySelector('.popup__button-close') //ДОМ элемент тега кнопки находим класс для кнопок Крестика-закрытия попапов
const buttonCloseCard = cardPopup.querySelector('.popup__button-close')
const buttonCloseImage = imagePopup.querySelector('.popup__button-close')

const buttonAddCard = document.querySelector('.profile__button-add') //ДОМ элемент тега кнопки находим класс для кнопки с Плюсом, добавления карточки

const titleElement = document.querySelector('.profile__title') //ДОМ элемент тега кнопки находим класс для Тайтла профиля
const subtitleElement = document.querySelector('.profile__subtitle') //ДОМ элемент тега кнопки находим класс для сабТайтла профиля
const nameFieldElement = profilePopup.querySelector('.popup__input_name_firstname') //ДОМ элемент тега кнопки находим класс для поля ввода имени профиля
const descriptionFieldElement = profilePopup.querySelector('.popup__input_name_description') //ДОМ элемент тега кнопки находим класс для поля ввода описания профиля

const formElementProfile = profilePopup.querySelector('.popup__form') //ДОМ элемент тега кнопки находим класс для формы Профиля
const formElementCard = cardPopup.querySelector('.popup__form_place_add') //ДОМ элемент тега кнопки находим класс для формы Добавления
const cardsItemsElement = document.querySelector('.cards__items') //ДОМ элемент тега кнопки находим класс для Списка карточек - Ul
const nameAddFieldElement = cardPopup.querySelector('.popup__input_name_place') //ДОМ элемент тега кнопки находим класс для поля ввода названия места при Добавлении
const linkFieldElement = cardPopup.querySelector('.popup__input_name_link') //ДОМ элемент тега кнопки находим класс для поля ввода ссылки на карточку

const getCardByEvent = evt => evt.currentTarget.closest('.card'); //КОНС находим по Евенту ближайшую карточку

function openPopup(popup) { //ФУНК общая для Открытия ДОМ элемента тега попапа
  popup.classList.add('popup_is-open'); //добавляем новый модификатор к классу тега popup для Открытия
};

function openProfilePopup() { //ФУНК общая для Открытия ДОМ элемента тега попапаПрофиля
  nameFieldElement.value = titleElement.textContent; //отождествляем Value поляПрофиля с Value тайтла Карточки (из Темплита)
  descriptionFieldElement.value = subtitleElement.textContent;//отождествляем Value поляПрофиля с Value сабтайтла Карточки (из Темплита)
  openPopup(profilePopup) //ФУНК общая для Открытия ДОМ элемента тега попапаПрофиля
};

function closePopup(popup) { //ФУНК общая для закрытия ДОМ элемента тега попапа
  popup.classList.remove('popup_is-open'); //удаляем новый модификатор к классу тега popup для Открытия
};

function editFormProfile(event) { //ФУНК для теша ДОМ элемента тега формыПрофиля
  event.preventDefault() //евент для отмены сброса формы
  titleElement.textContent = nameFieldElement.value; //отождествляем Value поляПрофиля с Value тайтла Карточки (из Темплита)
  subtitleElement.textContent = descriptionFieldElement.value; //отождествляем Value поляПрофиля с Value сабтайтла Карточки (из Темплита)
  formElementProfile.reset(); //очистка формы после сабмита
  closePopup(profilePopup); //ФУНК закрытия тега попапаПрофиля
};

function addFormCard(evt) { //ФУНК для теша ДОМ элемента тега формыДобавления
  evt.preventDefault() //отмена сброса
  const cardNew = { //ФУНК - НЕ понимаю для чего Новая переменная!!!!!!!!
    name: nameAddFieldElement.value, //приравниваем name Картинки к значению поля ввода Названия места
    link: linkFieldElement.value //приравниваем link Картинки к значению поля ввода ссылки места
  };
  createCard(cardNew); //ФУНК для для вызова нового элемента НЕ ПОНИМАЮ как это НАЗЫВААТЬ!!
  formElementCard.reset(); //очистка полей
  closePopup(cardPopup); //закрываем попапДобавления
};

buttonEditProfile.addEventListener('click', () => openPopup(profilePopup)); //ФУНК при клике на кнопкуКарандашик открой ДОМ элемент тега попапПрофиля
buttonCloseProfile.addEventListener('click', () => closePopup(profilePopup)); //ФУНК при клике на кнопкуКрестикПрофиля закрой ДОМ элемент тегапопапПрофиля
buttonCloseCard.addEventListener('click', () => closePopup(cardPopup)); //ФУНК при клике на кнопкуКрестикДобавления закрой ДОМ элемент тега попапДобавления
buttonCloseImage.addEventListener('click', () => closePopup(imagePopup)); //ФУНК при клике на кнопкуКрестикКартинки закрой ДОМ элемент тега попапКартинки
buttonAddCard.addEventListener('click', () => openPopup(cardPopup)); //ФУНК при клике на кнопкуДобавленияПлюсик открой ДОМ элемент тега ДОМ элемент тега попапДобавления
formElementProfile.addEventListener('submit', editFormProfile); //ФУНК при нажатии на СабмитПрофиля Вызови ФУНК заполнения ДОМ элемент тега формыПрофиля
formElementCard.addEventListener('submit', addFormCard); //ФУНК при нажатии на СабмитДобавления Вызови ФУНК заполнения ДОМ элемент тега формыДобавления

function handleLikeButton(evt) { //ФУНК по евенту Меняй класс туда-сюда на Модификатор такой-то
  evt.target.classList.toggle('button_is-active');
};

const imagePopupCard = document.querySelector('.popup__big-image') //ДОМ элемент тега большой картинки
const imagePopupTitle = document.querySelector('.popup__image-title') //тайтл тега тайтла большой картинки
const imagePopupAlt = document.querySelector('.popup__image-title') // Альт тега большой картинки

function renderCard(cardElement) {
  cardsItemsElement.prepend(cardElement);
};

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
  renderCard(cardElement);
  return cardElement;
}

initialCards.forEach(createCard); //для каждого лемента массива вызови ФУНК создания карточки (почему-то без скобок и параметров)

function openCard(element) { //ФУНК открытия ДОМ элемента c параметром element
  imagePopupCard.src = element.link; //отждествление значений линк и нейм для новых КОНС
  imagePopupTitle.textContent = element.name;
  imagePopupAlt.alt = element.name;
  openPopup(imagePopup);
};