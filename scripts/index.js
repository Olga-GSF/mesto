const editButton = document.querySelector('.profile__button-edit')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__button-close')
const titleElement = document.querySelector('.profile__title')
const subtitleElement = document.querySelector('.profile__subtitle')
const nameFieldElement = document.querySelector('.popup__input_name_firstname')
const descriptionFieldElement = document.querySelector('.popup__input_name_description')
const formElement = document.querySelector('.popup__form')
/*const likedElement = document.querySelector('.button_type_like')*/

function openPopup(popup) {
  popup.classList.add('popup__is-open')
  nameFieldElement.value = titleElement.textContent;
  descriptionFieldElement.value = subtitleElement.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup__is-open')
}

function preventDefault(event) {
  event.preventDefault()
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
}

/*function liked(likedElement) {
  likedElement.classList.add('botton_type_active')
}*/

editButton.addEventListener('click', function () {
  openPopup(popup)
})

closePopupButton.addEventListener('click', function () {
  closePopup(popup)
})

formElement.addEventListener('submit', function (event) {
  event.preventDefault()
  closePopup(popup)
})

/*likedElement.addEventListener('click', function () {
  likedElement.style = 'background-image: url(../../../images/UnionHeartLike.svg)';
})*/