export class Card {
  constructor(name, image, link, selector, openCard) {
    this._name = name;
    this._image = image;
    this._link = link;
    this.selector = selector;
    this._openCard = openCard;
    this.isLiked = false;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('#card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _addEventListeners() {
    this._view.querySelector(this._config.cardListDeleteButton)
      .addEventListener('click', (evt) => {
        this._deleteCard(evt);
      });
  }

  handleLikeButton() {
    this.isLiked = !this.isLiked;
  };

  _deleteCard(evt) {
    evt.preventDefault();
    this._view.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
  }

}

// constructor(config, selector, openCard) {
//   this._name = config.cardName;
//   this._image = config.cardImage;
//   this.link = config.link;
//   this.selector = selector;
//   this._openCard = openCard;
//   this.isLiked = false;
// }


ИНДЕКС
import Сard from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './cards.js';

initialCards.forEach((item) => {
  const card = new Card(item.name, item.image);
  const cardElement = card.generateCard();

  cardsItemsElement.prepend(cardElement);
});

// const config = {
//   cardList: '.cards__items',
//   cardListText: '.card__title',
//   cardListDeleteButton: '.card__button-delete',
//   cardName: '.card__title',
//   cardImage: '.card__image',
//   templateCard: '#card-template',
// }


в Card


_handleOpenPopup() {
  popupImage.src = this._link;
  popupElement.classList.add('popup_is-opened');
}
_handleClosePopup() {
  popupImage.src = '';
  popupElement.classList.remove('popup_is-opened');
}

this._element.addEventListener('click', () => {
  this._handleOpenPopup();
});
popupCloseButton.addEventListener('click', () => {
  this._handleClosePopup();
});