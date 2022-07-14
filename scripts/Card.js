
export class Card {
  constructor(info, selector, openCard, bigImage) {
    this._name = info.name;
    this._link = info.link;
    this._selector = selector;
    this._openCard = openCard;
    this._bigImage = bigImage;

  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _createCard() {
    this._bigImage = this.element.querySelector('.card__image');
    this.element.querySelector('.card__title').textContent = this._name;
    this._bigImage.src = this._link;
    this._bigImage.alt = this._name;
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle('button_is-active');
  };

  _handleButtontnDelete() {
    this.element.remove();
    this.element = null;
  }

  _addEventListeners() {
    this._bigImage.addEventListener('click', () => { this._openCard(this._name, this._link) });

    this.element.querySelector('.card__button-like').addEventListener('click', this._handleLikeButton);

    this.element.querySelector('.card__button-delete').addEventListener('click', (evt) => {
      this._handleButtontnDelete(evt);
    });
  }

  generateCard() {
    this.element = this._getTemplate();
    this._createCard();
    this._addEventListeners();
    return this.element;
  }

}