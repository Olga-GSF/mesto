const cardTemplate = document.querySelector('#card-template').content;

const buttonEditProfile = document.querySelector('.profile__button-edit')

const popup = document.querySelector('.popup')
const profilePopup = document.querySelector('.popup_type_edit-profile')
const cardPopup = document.querySelector('.popup_type_add-card')
const imagePopup = document.querySelector('.popup_type_big-image')

const buttonCloseProfile = document.querySelector('.popup__button-close_place_edit')
const buttonCloseCard = document.querySelector('.popup__button-close_place_add')
const buttonCloseImage = document.querySelector('.popup__button-close_place_image')

const buttonAddCard = document.querySelector('.profile__button-add')
const buttonDelete = document.querySelector('.card__button-delete')

const titleElement = document.querySelector('.profile__title')
const subtitleElement = document.querySelector('.profile__subtitle')
const nameFieldElement = document.querySelector('.popup__input_name_firstname')
const descriptionFieldElement = document.querySelector('.popup__input_name_description')

const formElementProfile = document.querySelector('.popup__form')
const formElementCard = document.querySelector('.popup__form_place_add')
const cardsItemsElement = document.querySelector('.cards__items')
const nameAddFieldElement = document.querySelector('.popup__input_name_place')
const linkFieldElement = document.querySelector('.popup__input_name_link')

const imagePopupCard = document.querySelector('.popup__big-image')
const imagePopupTitle = document.querySelector('.popup__image-title')
const imagePopupAlt = document.querySelector('.popup__image-title')

const getCardByEvent = evt => evt.currentTarget.closest('.card');

function openPopup(popup) {
  popup.classList.add('popup_is-open');

};
function openProfilePopup() {
  nameFieldElement.value = titleElement.textContent;
  descriptionFieldElement.value = subtitleElement.textContent;
  openPopup(profilePopup)
};

function closePopup(popup) {
  popup.classList.remove('popup_is-open');
};

function editFormProfile(event) {
  event.preventDefault()
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
  formElementProfile.reset();
  closePopup(profilePopup);
};

function addFormCard(evt) {
  evt.preventDefault()
  const cardNew = {
    name: nameAddFieldElement.value,
    link: linkFieldElement.value
  };
  createCard(cardNew);
  formElementCard.reset();
  closePopup(cardPopup);
};

buttonEditProfile.addEventListener('click', () => openPopup(popup));
buttonCloseProfile.addEventListener('click', () => closePopup(popup));
buttonCloseCard.addEventListener('click', () => closePopup(cardPopup));
buttonCloseImage.addEventListener('click', () => closePopup(imagePopup));
buttonAddCard.addEventListener('click', () => openPopup(cardPopup));
formElementProfile.addEventListener('submit', editFormProfile);
formElementCard.addEventListener('submit', addFormCard);

function handleLikeButton(evt) {
  evt.target.classList.toggle('button_is-active');
};



function openCard(cardElement) {
  imagePopupCard.src = cardElement.querySelector('.card__image').src;
  imagePopupTitle.textContent = cardElement.querySelector('.card__title').textContent;
  imagePopupAlt.alt = cardElement.querySelector('.card__title').textContent;
  openPopup(imagePopup);
};

// const imagePopupCard = document.querySelector('.popup__big-image')
// const imagePopupTitle = document.querySelector('.popup__image-title')
// const imagePopupAlt = document.querySelector('.popup__image-title')

// const linkValue = document.querySelector('.card__image')
// const titleValue = document.querySelector('.card__title')

// function openCard(link, name) {
//   imagePopupCard.link = link.src;
//   imagePopupTitle.name = titleValue.textContent;
//   imagePopupAlt.alt = titleValue.name;

//   openPopup(imagePopup);
// };

function createCard(element) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const bigImage = cardElement.querySelector('.card__image');
  bigImage.addEventListener('click', () => openCard(cardElement));

  bigImage.src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__title').alt = element.name;

  cardElement.querySelector('.card__button-like').addEventListener('click', handleLikeButton);

  cardElement.querySelector('.card__button-delete').addEventListener('click', evt => {
    const card = getCardByEvent(evt);
    card.remove();
  });

  cardsItemsElement.prepend(cardElement);

}
initialCards.forEach(createCard);