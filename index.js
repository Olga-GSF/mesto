const editButton = document.querySelector('.button_type_edit')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.button_type_close')
const titleElement = document.querySelector('.profile__title')
const subtitleElement = document.querySelector('.profile__subtitle')
const nameFieldElement = document.querySelector('.popup__input_name')
const descriptionFieldElement = document.querySelector('.popup__input_description')
const formElement = document.querySelector('.popup__form')

function openPopup(popupElement) {
  popupElement.classList.add('popup_isOpen')
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_isOpen')
}

editButton.addEventListener('click', function () {
  openPopup(popup)
  nameFieldElement.value = titleElement.textContent;
  descriptionFieldElement.value = subtitleElement.textContent;
})

closePopupButton.addEventListener('click', function () {
  closePopup(popup)
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
})

formElement.addEventListener('submit', function (event) {
  event.preventDefault()
  titleElement.textContent = nameFieldElement.value;
  subtitleElement.textContent = descriptionFieldElement.value;
  closePopup(popup)
})
