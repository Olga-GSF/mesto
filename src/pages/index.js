import './index.css';

import { initialCards } from '../components/cards.js';
import { Card } from '../components/Card.js';
//import { Avatar } from '../components/Avatar.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Api } from '../components/Api.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',


  url: 'https://mesto.nomoreparties.co/v1/cohort-47',
  token: '216df983-7365-4312-a47e-9764ea1d99b1'
};

let userId = '';
export const api = new Api(settings.url, settings.token);

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
//const titleElement = document.querySelector('.profile__title');
const nameFieldElement = document.querySelector('.popup__input_name_firstname');
//const subtitleElement = document.querySelector('.profile__subtitle');
const descriptionFieldElement = document.querySelector('.popup__input_name_description');
const profileForm = document.querySelector('.popup__form_place_edit');
const popupProfileName = profileForm.getAttribute('name');

const buttonAddCard = document.querySelector('.profile__button-add');
const cardForm = document.querySelector('.popup__form_place_add');
const popupCardName = cardForm.getAttribute('name');

const cardsItemsElement = document.querySelector('.cards__items')

//const popupAvatar = document.querySelector('.profile__avatar')

//const userInfo = new UserInfo({ titleElement, subtitleElement, popupAvatar });

const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle',
  popupAvatar: '.profile__avatar'
});


//const buttonDelete = document.querySelector('.card__button-delete');

//экземпляр попапа согласия sure
const surePopup = '.popup_type_sure';
const popupWithConfirmation = new PopupWithConfirmation({
  popupSelector: surePopup,
  callbackSubmitForm: (id, element) => {
    api.deleteCard(id)
      .then(() => {
        section.removeCard(element);
        popupWithConfirmation.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
});
popupWithConfirmation.setEventListeners();

//открытие попапа согласия sure
const handleCardDelete = (id, element) => {
  popupWithConfirmation.open(id, element);
}

//создание экземпляра попапа Аватара
const renewAvatar = document.querySelector('.profile__overlay')
const avatarForm = document.querySelector('.popup__form_place_renew')
const popupAvatarName = avatarForm.getAttribute('name');
const renewAvatarPopup = '.popup_type_renew-avatar';

const popupAvatarWithForm = new PopupWithForm({
  popupSelector: renewAvatarPopup,
  callbackSubmitForm: (evt, avatarData) => {
    evt.preventDefault();
    popupAvatarWithForm.renderLoading(true);
    api.setAva(avatarData)
      .then((data) => {
        userInfo.setUserAvatar(data);
        popupAvatarWithForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatarWithForm.renderLoading(false);
      })
  }
})
popupAvatarWithForm.setEventListeners();

//открытие попапа Аватара
renewAvatar.addEventListener('click', () => {
  popupAvatarWithForm.open();
  formValidate[popupAvatarName].resetValidation();
})

//экземпляр попапа профиля
const profilePopup = '.popup_type_edit-profile';
const popupProfileWithForm = new PopupWithForm({
  popupSelector: profilePopup,
  callbackSubmitForm: (evt, data) => {
    evt.preventDefault();
    popupProfileWithForm.renderLoading(true);
    api.setUserData(data)
      .then((data) => {
        userInfo.setUserInfo({
          userName: data.name,
          description: data.about
        });
        popupProfileWithForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfileWithForm.renderLoading(false);
      })

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

//экземпляр попапа добавления Карточки
const cardPopup = '.popup_type_add-card';
const popupCardWithForm = new PopupWithForm({
  popupSelector: cardPopup,
  callbackSubmitForm: (evt, data) => {
    evt.preventDefault();
    popupCardWithForm.renderLoading(true);
    api.createCard(data)
      .then((data) => {
        const createdCard = createCard(data)
        section.addItemPrepend(createdCard);
        popupCardWithForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupCardWithForm.renderLoading(false);
      })
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

//создаем экземпляр карточки
const createCard = (item) => {
  const card = new Card(item, cardTemplate, handleCardClick, userId, handleCardDelete);
  const createdCard = card.generateCard();
  return createdCard;
}

//создаем экземпляр класса section
const section = new Section({
  items: [],
  renderer: (item) => {
    const createdItem = createCard(item);
    section.addItemAppend(createdItem);
  }
}, cardsItemsElement);

api.getInitialCards()
  .then((items) => {
    section.renderItems(items)
  })
  .catch((err) => {
    console.log(err);
  })

api.getUserData()
  .then((data) => {
    userInfo.setUserInfo({
      userName: data.name,
      description: data.about
    })
    userInfo.setUserAvatar(data)
  })
  .catch((err) => {
    console.log(err);
  })

//section.renderItems();

enableValidation();

// const card = document.querySelector(settings.cardList);

// const cardList = new CardList(settings, createCard);
//cardListForm.render(card)

// Promise.all([
//   api.getInitialCards(),
//   api.getUserData(),
// ])
//   .then(([items]) => {
//     cardList.setItems(items);
//     cardList.render(card);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

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