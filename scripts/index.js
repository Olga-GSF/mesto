const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector('.profile__button-edit')
const popup = document.querySelector('.popup')
const popupEdit = document.querySelector('.popup_type_edit-profile')
const popupAdd = document.querySelector('.popup_type_add-card')
const popupImage = document.querySelector('popup_type_big-image')
const closePopupButton = document.querySelector('.popup__button-close')
const addButton = document.querySelector('.profile__button-add')
const deleteButton = document.querySelector('.card__button-delete')
const likeButton = document.querySelector('.card__button-like')
const likedElement = document.querySelector('.card__button-like')
const titleElement = document.querySelector('.profile__title')
const subtitleElement = document.querySelector('.profile__subtitle')
const nameFieldElement = document.querySelector('.popup__input_name_firstname')
const descriptionFieldElement = document.querySelector('.popup__input_name_description')
const formElement = document.querySelector('.popup__form')
const cardsItemsElement = document.querySelector('.cards__items')


function openPopup(popup) {
  if (popupEdit) {
    popup.classList.add('popup_type_edit-profile')
    popup.classList.add('popup_is-open')
    nameFieldElement.value = titleElement.textContent;
    descriptionFieldElement.value = subtitleElement.textContent;
  } else if (popupAdd) {
    popup.classList.add('popup_type_add-card')
    popup.classList.add('popup_is-open')
    nameFieldElement.value = titleElement.textContent;
    descriptionFieldElement.value = subtitleElement.textContent;
  } else if (popupImage) {
    popup.classList.add('popup_type_big-image')
    popup.classList.add('popup_is-open')
  }
}

function closePopup(popup) {
  if (popupEdit) {
    popup.classList.add('popup_type_edit-profile')
    popup.classList.remove('popup_is-open')
  } else if (popupAdd) {
    popup.classList.add('popup_type_add-card')
    popup.classList.remove('popup_is-open')
  } else if (popupImage) {
    popup.classList.add('popup_type_big-image')
    popup.classList.remove('popup_is-open')
  }
}

function formEdit(event) {
  event.preventDefault()
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
  closePopup(popup)
}

editButton.addEventListener('click', () => openPopup(popupEdit))
closePopupButton.addEventListener('click', () => closePopup(popup))
addButton.addEventListener('click', () => openPopup(popupAdd))
formElement.addEventListener('submit', formEdit)

function createCard(element) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardsItemsElement.prepend(cardElement);
}
initialCards.forEach(createCard);

function liked(likedElement) {
  likedElement.classList.add('button_is-active')
}

likeButton.addEventListener('click', () => liked(likedElement))

/*function liked(likedElement) {
  likedElement.classList.add('botton_is-active')
}*/

/*likedElement.addEventListener('click', liked(likedElement))*/