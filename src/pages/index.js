import './index.css';

import { initialCards } from '../components/cards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
// import { UserInfo } from '../scripts/UserInfo.js';
// import { PopupWithForm } from '../scripts/PopupWithForm.js';
// import { PopupWithImage } from '../scripts/PopupWithImage.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};


//const cardTemplate = document.querySelector('#card-template').content;
const cardTemplate = '#card-template';

const buttonEditProfile = document.querySelector('.profile__button-edit')

const profilePopup = document.querySelector('.popup_type_edit-profile')
const cardPopup = document.querySelector('.popup_type_add-card')
const imagePopup = document.querySelector('.popup_type_big-image')
const popupElements = document.querySelectorAll('.popup')

const buttonCloseProfile = profilePopup.querySelector('.popup__button-close')
const buttonCloseCard = cardPopup.querySelector('.popup__button-close')
const buttonCloseImage = imagePopup.querySelector('.popup__button-close')

const buttonAddCard = document.querySelector('.profile__button-add')

const titleElement = document.querySelector('.profile__title')
const subtitleElement = document.querySelector('.profile__subtitle')
const nameFieldElement = profilePopup.querySelector('.popup__input_name_firstname')
const descriptionFieldElement = profilePopup.querySelector('.popup__input_name_description')

const formElementProfile = profilePopup.querySelector('.popup__form_place_edit')
const formElementCard = cardPopup.querySelector('.popup__form_place_add')
const formEditProfileName = formElementProfile.getAttribute('name');
const formCardName = formElementCard.getAttribute('name');

const cardsItemsElement = document.querySelector('.cards__items')
const nameAddFieldElement = cardPopup.querySelector('.popup__input_name_place')
const linkFieldElement = cardPopup.querySelector('.popup__input_name_link')
const nameNewFieldElement = cardPopup.querySelector('.popup__input_name_place')
const linkNewFieldElement = cardPopup.querySelector('.popup__input_name_link')

const getCardByEvent = evt => evt.currentTarget.closest('.card');

//const buttonSubmitNewCard = formElementCard.querySelector('.popup__button-submit')

function openPopup(popup) {
  popup.classList.add('popup_is-open');
  document.addEventListener('keydown', handlerEsc);
  popup.addEventListener('click', handleOverlay);
};

function closePopup(popup) {
  popup.classList.remove('popup_is-open');
  document.removeEventListener('keydown', handlerEsc);
  popup.removeEventListener('click', handleOverlay);
};

function openProfilePopup() {
  nameFieldElement.value = titleElement.textContent;
  descriptionFieldElement.value = subtitleElement.textContent;
  openPopup(profilePopup);
  formValidate[formEditProfileName].resetValidation();
};

function openCardPopup() {
  openPopup(cardPopup);
  formValidate[formCardName].resetValidation();
};

function handlerEsc(evt) {
  if (evt.key === 'Escape') {
    const popupByEvent = document.querySelector('.popup_is-open')
    closePopup(popupByEvent);
  };
};

function handleOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
}

function editFormProfile(event) {
  event.preventDefault()
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
  closePopup(profilePopup);
};

function addFormCard(evt) {
  evt.preventDefault()
  const cardNew = {
    name: nameNewFieldElement.value,
    link: linkNewFieldElement.value
  };
  renderCard(createCard(cardNew));
  formElementCard.reset();
  closePopup(cardPopup);

};

const info = {
  name: nameAddFieldElement.value,
  link: linkFieldElement.value
}

buttonEditProfile.addEventListener('click', () => openProfilePopup(profilePopup));
buttonCloseProfile.addEventListener('click', () => closePopup(profilePopup));
buttonCloseCard.addEventListener('click', () => closePopup(cardPopup));
buttonCloseImage.addEventListener('click', () => closePopup(imagePopup));
buttonAddCard.addEventListener('click', () => openCardPopup(cardPopup));
formElementProfile.addEventListener('submit', editFormProfile);
formElementCard.addEventListener('submit', addFormCard);


// function handleLikeButton(evt) {
//   evt.target.classList.toggle('button_is-active');
// };

const imagePopupCard = document.querySelector('.popup__big-image')
const imagePopupTitle = document.querySelector('.popup__image-title')

function renderCard(createdCard) {
  cardsItemsElement.prepend(createdCard);
};

const formValidate = {};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(settings, formElement);
    const formNewName = formElement.getAttribute('name');
    formValidate[formNewName] = formValidator;
    formValidator.enableValidation();
  });
}

//создаем экземпляр карточки
const createCard = (info) => {
  const card = new Card(info, cardTemplate, openCard);
  const createdCard = card.generateCard();
  return createdCard;
}

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const createdItem = createCard(item);
    section.addItem(createdItem);
  }
}, cardsItemsElement);

section.renderItems();

//initialCards.forEach((card) => { renderCard(createCard(card)); });

enableValidation();


function openCard(name, link) {
  imagePopupCard.src = link;
  imagePopupTitle.textContent = name;
  imagePopupCard.alt = name;
  openPopup(imagePopup);
};