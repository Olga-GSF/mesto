
export class Card {
  constructor(info, selector, handleCardClick) {
    this._name = info.name;
    this._link = info.link;
    this._selector = selector;
    //this._bigImage = bigImage;
    this._handleCardClick = handleCardClick;
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
    const bigImage = this.element.querySelector('.card__image');
    this.element.querySelector('.card__title').textContent = this._name;
    bigImage.src = this._link;
    bigImage.alt = this._name;

  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle('button_is-active');
  };

  _handleButtontnDelete() {
    this.element.remove();
    this.element = null;
  }

  _addEventListeners() {
    const bigImage = this.element.querySelector('.card__image');
    //console.log(bigImage);
    bigImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });

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