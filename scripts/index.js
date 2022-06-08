const editButton = document.querySelector('.profile__button-edit')

const popup = document.querySelector('.popup')
const profilePopup = document.querySelector('.popup_type_edit-profile')
const cardPopup = document.querySelector('.popup_type_add-card')
const popupImage = document.querySelector('.popup_type_big-image')

const closePopupButton = document.querySelector('.popup__button-close_place_edit')
const closePopupAddButton = document.querySelector('.popup__button-close_place_add')
const closePopupImageButton = document.querySelector('.popup__button-close_place_image')

const addButton = document.querySelector('.profile__button-add')
const deleteButton = document.querySelector('.card__button-delete')

const titleElement = document.querySelector('.profile__title')
const subtitleElement = document.querySelector('.profile__subtitle')
const nameFieldElement = document.querySelector('.popup__input_name_firstname')
const descriptionFieldElement = document.querySelector('.popup__input_name_description')

const formElement = document.querySelector('.popup__form')
const formElementAdd = document.querySelector('.popup__form_place_add')
const cardsItemsElement = document.querySelector('.cards__items')
const nameAddFieldElement = document.querySelector('.popup__input_name_place')
const linkFieldElement = document.querySelector('.popup__input_name_link')

const getCardByEvent = evt => evt.currentTarget.closest('.card');

function openPopup(popup) {
  popup.classList.add('popup_is-open');
  nameFieldElement.value = titleElement.textContent;
  descriptionFieldElement.value = subtitleElement.textContent;
};

function closePopup(popup) {
  popup.classList.remove('popup_is-open');
};

function formEdit(event) {
  event.preventDefault()
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
  closePopup(popup);
};

function formAdd(evt) {
  evt.preventDefault()
  const cardNew = {
    name: nameAddFieldElement.value,
    link: linkFieldElement.value
  };
  createCard(cardNew);
  closePopup(cardPopup);
};

editButton.addEventListener('click', () => openPopup(popup));
closePopupButton.addEventListener('click', () => closePopup(popup));
closePopupAddButton.addEventListener('click', () => closePopup(cardPopup));
closePopupImageButton.addEventListener('click', () => closePopup(popupImage));
addButton.addEventListener('click', () => openPopup(cardPopup));
formElement.addEventListener('submit', formEdit);
formElementAdd.addEventListener('submit', formAdd);

function liked(evt) {
  evt.target.classList.toggle('button_is-active');
};

function openCard(evt) {
  popupImage.querySelector('.popup__big-image').src = evt.querySelector('.card__image').src;
  popupImage.querySelector('.popup__image-title').textContent = evt.querySelector('.card__title').textContent;
  openPopup(popupImage)
}

function createCard(element) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const bigImage = cardElement.querySelector('.card__image');
  bigImage.addEventListener('click', evt => openCard(evt.target.closest('.card')));

  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;

  cardElement.querySelector('.card__button-like').addEventListener('click', liked);

  cardElement.querySelector('.card__button-delete').addEventListener('click', evt => {
    const card = getCardByEvent(evt);
    card.remove();
  });

  cardsItemsElement.prepend(cardElement);

}
initialCards.forEach(createCard);