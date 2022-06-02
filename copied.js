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

const editTask = el => {
  const todoItem = todoTemplate.content;
  const todoEl = todoItem.querySelector('.list__item').cloneNode(true);
  const todoText = todoEl.querySelector('.list__item-text');
  todoText.textContent = el;
  todoEl.querySelector('.list__item-delete-button').addEventListener('click', (evt) => {
    const item = evt.target.closest('.list__item');
    const remove = () => {
      item.remove();
    };
    const translate = () => {
      item.classList.add('todo__deleting-animation');
    };
    translate();
    item.addEventListener('transitionend', () => {
      if (item.classList.contains('todo__deleting-animation') === true) {
        remove(item);
      };
    });