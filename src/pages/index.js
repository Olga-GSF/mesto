import './index.css';

import { initialCards } from '../components/cards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
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

const cardTemplate = '#card-template';

const buttonEditProfile = document.querySelector('.profile__button-edit');
const titleElement = document.querySelector('.profile__title');
const nameFieldElement = document.querySelector('.popup__input_name_firstname');
const subtitleElement = document.querySelector('.profile__subtitle');
const descriptionFieldElement = document.querySelector('.popup__input_name_description');
const profileForm = document.querySelector('.popup__form_place_edit');
const popupProfileName = profileForm.getAttribute('name');

const buttonAddCard = document.querySelector('.profile__button-add');
const cardForm = document.querySelector('.popup__form_place_add');
const popupCardName = cardForm.getAttribute('name');

const cardsItemsElement = document.querySelector('.cards__items')

const userInfo = new UserInfo(titleElement, subtitleElement);

//экземпляр попапа профиля
const profilePopup = '.popup_type_edit-profile';
const popupProfileWithForm = new PopupWithForm({
  popupSelector: profilePopup,
  callbackSubmitForm: (formData) => {
    userInfo.setUserInfo(formData)
    popupProfileWithForm.close();
  }
});
popupProfileWithForm.setEventListeners();

// открытие попапа профиля
buttonEditProfile.addEventListener('click', () => {
  const userInfoProfile = userInfo.getUserInfo();
  nameFieldElement.value = userInfoProfile.name;
  descriptionFieldElement.value = userInfoProfile.description;
  formValidate[popupProfileName].resetValidation();
  popupProfileWithForm.open();
})

//добавление Карточки
const cardPopup = '.popup_type_add-card';
const popupCardWithForm = new PopupWithForm({
  popupSelector: cardPopup,
  callbackSubmitForm: (formData) => {
    const createdCard = createCard(formData)
    section.addItem(createdCard);
    popupCardWithForm.close();
  }
})
popupCardWithForm.setEventListeners();

// открытие Карточки

buttonAddCard.addEventListener('click', () => {
  popupCardWithForm.open();
  formValidate[popupCardName].resetValidation();
})

//экземпляр попапа с Картинкой
const bigImagePopup = '.popup_type_big-image';
const popupWithImage = new PopupWithImage({ popupSelector: bigImagePopup });
popupWithImage.setEventListeners();

//открытие картинки
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const createdItem = createCard(item);
    section.addItem(createdItem);
  }
}, cardsItemsElement);

//создаем экземпляр карточки
const createCard = (item) => {
  const card = new Card(item, cardTemplate, handleCardClick);
  const createdCard = card.generateCard();
  return createdCard;
}

section.renderItems();

enableValidation();

//initialCards.forEach((card) => { renderCard(createCard(card)); });

//const profilePopup = document.querySelector('.popup_type_edit-profile')
//const cardPopup = document.querySelector('.popup_type_add-card')
//const imagePopup = document.querySelector('.popup_type_big-image')
// const popupElements = document.querySelectorAll('.popup')

// const buttonAddCard = document.querySelector('.profile__button-add')

// const titleElement = document.querySelector('.profile__title')
// const subtitleElement = document.querySelector('.profile__subtitle')
// const nameFieldElement = profilePopup.querySelector('.popup__input_name_firstname')
// const descriptionFieldElement = profilePopup.querySelector('.popup__input_name_description')

// const formElementProfile = profilePopup.querySelector('.popup__form_place_edit')
// const formElementCard = cardPopup.querySelector('.popup__form_place_add')
// const formEditProfileName = formElementProfile.getAttribute('name');
// const formCardName = formElementCard.getAttribute('name');

// const nameAddFieldElement = cardPopup.querySelector('.popup__input_name_place')
// const linkFieldElement = cardPopup.querySelector('.popup__input_name_link')
// const nameNewFieldElement = cardPopup.querySelector('.popup__input_name_place')
// const linkNewFieldElement = cardPopup.querySelector('.popup__input_name_link')


// const getCardByEvent = evt => evt.currentTarget.closest('.card');

//const buttonSubmitNewCard = formElementCard.querySelector('.popup__button-submit')

// function editFormProfile(event) {
//   event.preventDefault()
//   titleElement.textContent = nameFieldElement.value;
//   subtitleElement.textContent = descriptionFieldElement.value;
//   closePopup(profilePopup);
// };

// function addFormCard(evt) {
//   evt.preventDefault()
//   const cardNew = {
//     name: nameNewFieldElement.value,
//     link: linkNewFieldElement.value
//   };
//   renderCard(createCard(cardNew));
//   formElementCard.reset();
//   closePopup(cardPopup);

// };

// const info = {
//   name: nameAddFieldElement.value,
//   link: linkFieldElement.value
// }

// function openCard(name, link) {
//   imagePopupCard.src = link;
//   imagePopupTitle.textContent = name;
//   imagePopupCard.alt = name;
//   openPopup(imagePopup);
// };