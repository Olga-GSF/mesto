const userTemplate = document.querySelector('#user').content;
const usersOnline = document.querySelector('.users-online');

// клонируем содержимое тега template
const userElement = userTemplate.querySelector('.user').cloneNode(true);

// наполняем содержимым
userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// отображаем на странице
usersOnline.append(userElement);

const editButton = document.querySelector('.profile__button-edit')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__button-close')
const titleElement = document.querySelector('.profile__title')
const subtitleElement = document.querySelector('.profile__subtitle')
const nameFieldElement = document.querySelector('.popup__input_name_firstname')
const descriptionFieldElement = document.querySelector('.popup__input_name_description')
const formElement = document.querySelector('.popup__form')
const addButton = document.querySelector('.profile__button-add')


function createCard() {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = initialCards[i].link;
  cardElement.querySelector('.card__title').textContent = initialCards[i].name;
  createCard.prepend(cardElement);
}

initialCards.forEach(createCard);

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
  }
}

// function closePopup(popup) {
//   if (popupEdit) {
//     popup.classList.add('popup_type_edit-profile')
//     popup.classList.remove('popup_is-open')
//   } else if (popupAdd) {
//     popup.classList.add('popup_type_add-card')
//     popup.classList.remove('popup_is-open')
//   } else if (popupImage) {
//     popup.classList.add('popup_type_big-image')
//     popup.classList.remove('popup_is-open')
//   }
// }

/*const likedElement = document.querySelector('.card__button-like')*/

function openPopup(popupEdit) {
  popupEdit.classList.add('popup_is-open')
  nameFieldElement.value = titleElement.textContent;
  descriptionFieldElement.value = subtitleElement.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_is-open')
}
function formEdit(event) {
  event.preventDefault()
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
  closePopup(popup)
}
// function openPopup(popup) {
//   if (popupEdit) {
//     popup.classList.add('popup_type_edit-profile')
//     popup.classList.add('popup_is-open')
//     nameFieldElement.value = titleElement.textContent;
//     descriptionFieldElement.value = subtitleElement.textContent;
//   } else if (popupAdd) {
//     popup.classList.add('popup_type_add-card')
//     popup.classList.add('popup_is-open')
//     nameFieldElement.value = titleElement.textContent;
//     descriptionFieldElement.value = subtitleElement.textContent;
//   } else if (popupImage) {
//     popup.classList.add('popup_type_big-image')
//     popup.classList.add('popup_is-open')
//   }
// }

function liked(likeElement) {
  likeElement.classList.add('button_is-active');
}
likeElement.addEventListener('click', function (evt)) {
  liked();
};

// function liked(evt) {
//     evt.target.classList.toggle('button_is-active');
// };


const likeElements = document.querySelector('.card__button-like');
likeElements.forEach(function (item) {
  item.addEventListener('click', liked(evt))
});

const popups = [
  {
    name: "edit-profile",
  },
  {
    name: "add-card",
  },
  {
    name: "big-image",
  }
]

//const container = document.querySelector('.container');

const openPopup = (name) => {
  const popupType = document.querySelector(`.popup_type_${name}`);
  popupType.classList.add('popup_is-open');
  closePopupButton.addEventListener('click', closePopup);
  console.log(openPopup);
}
const closePopup = (evt) => {
  evt.target('.popup').classList.remove('popup_is-open');
  evt.target.removeEventListener('click', closePopup);

  const addCard = function (event) {
    event.preventDefault();
    const form = document.forms.new;
    const name = form.elements.name.value;
    const link = form.elements.link.value;
    Card(name, link);
    popup.classList.remove('popup_is-opened');
    form.reset();
  };

  // const addCard = element => {
  //   const card = createCard(element);
  //   cardsItemsElement.insertAdjacentHTML('afterbegin', card)
  //   initialCards.forEach(addCard);
  // };


  // cardElement.querySelector('.card__button-like').addEventListener('click', evt => {
  //   const card = getLikeByEvent(evt);
  //   const likeElement = document.querySelector('.card__button-like')
  //   likeElement.classList.add('button_is-active');
  // });

  function createCard(image, title) {

    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');
    cardImg.src = image;
    cardImg.alt = title;
    cardElement.querySelector('.card__title').textContent = title;

    cardElement.querySelector('.card__button-like').addEventListener('click', likeCard);

    cardElement.querySelector('.card__button-delete').addEventListener('click', evt => {
      const card = getCardByEvent(evt);
      card.remove();
    });

    cardImage.addEventListener('click', () => bigImage(cardImg));
    return cardElement;

    cardsItemsElement.prepend(cardElement);
  };
  initialCards.forEach((cardItem) => {
    const card = addCard(cardItem.link, cardItem.name);
    renderCard(card);
  });


  function likeCard(evt) {
    evt.target.classList.toggle('.button_is-active');
  };

  // function createCard(element) {
  //   const cardTemplate = document.querySelector('#card-template').content;
  //   const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  //   const bigImage = cardElement.querySelector('.card__image');
  //   bigImage.src = element.src;

  //   cardElement.querySelector('.card__image').src = element.link;
  //   cardElement.querySelector('.card__title').textContent = element.name;

  //   const likeElement = cardElement.querySelector('.card__button-like');
  //   likeElement.addEventListener('click', () => {
  //     likeElement.classList.toggle('.button_is-active');
  //   });

  //   cardElement.querySelector('.card__button-delete').addEventListener('click', evt => {
  //     const card = getCardByEvent(evt);
  //     card.remove();
  //   });

  //   cardsItemsElement.prepend(cardElement);
  // }
  // initialCards.forEach(createCard);

  function createCard(image, title) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');
    cardImg.src = image;
    cardImg.alt = title;
    cardElement.querySelector('.card__title').textContent = title;

    cardElement.querySelector('.card__button-like').addEventListener('click', likeCard);

    cardElement.querySelector('.card__button-delete').addEventListener('click', evt => {
      const card = getCardByEvent(evt);
      card.remove();
    });

    cardImage.addEventListener('click', () => bigImage(cardImg));
    return cardElement;

  };
  initialCards.forEach((cardItem) => {
    const card = addCard(cardItem.link, cardItem.name);
    renderCard(card);
  });

  // function bigImage(element) {
//   formImg.src = element.src;
//   formImg.alt = element.alt;
//   formImgTitle.textContent = element.alt;
// };

// popupImage.addEventListener('click', () => bigImage(popupImage));
// function bigImage(element) {
//   openPopup(popupForScaleImg);
//   bigImage.src = element.src;
//   popupImageTitle.textContent = element.text;
// };