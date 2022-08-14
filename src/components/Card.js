export class Card {
  constructor(info, selector, userId, handleCardClick, handleCardDelete, { setLikes, delLikes }) {
    this._id = info._id;
    this._ownerId = info.owner._id;
    this._name = info.name;
    this._link = info.link;
    this._likes = info.likes;
    this._selector = selector;
    this.userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;

    this._setLikes = setLikes;
    this._delLikes = delLikes;

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
    this.bigImage = this.element.querySelector('.card__image');
    this.element.querySelector('.card__title').textContent = this._name;
    this.bigImage.src = this._link;
    this.bigImage.alt = this._name;
  }

  _checkLikes() {
    if (this._likes.some((info) => {
      return info._id === this.userId
    })) {
      this.buttonLikeCard.classList.toggle('button_is-active')
    }
  }

  counterLikes(likes) {
    this.likeNumber.textContent = likes.length;
  }


  cardLike() {
    this.buttonLikeCard.classList.add('button_is-active');
  }

  cardDisLike() {
    this.buttonLikeCard.classList.remove('button_is-active');
  }

  _handleButtonDelete() {
    this.element.remove();
    this.element = null;
  }

  _checkForButtonDelete() {
    if (this._ownerId !== this.userId) {
      this.buttonDelete = this.element.querySelector('.card__button-delete')
      this.buttonDelete.remove();
    }
  }

  _addEventListeners() {
    this.bigImage = this.element.querySelector('.card__image');
    //const buttonlikeCard = this.element.querySelector('.card__button-like')
    //const likeNumber = this.element.querySelector('.card__like-number');
    this.buttonDelete = this.element.querySelector('.card__button-delete');
    this.bigImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });

    this.buttonLikeCard.addEventListener('click', () => {
      if (this.buttonLikeCard.classList.contains('button_is-active')) {
        this._delLikes();
        //this.cardDisLike();
      } else {
        this._setLikes();
        //this.cardLike();
      }
    })

    this.buttonDelete.addEventListener('click', () => this._handleCardDelete(this._id, this.element));

  }



  generateCard() {
    this.element = this._getTemplate();

    this.likeNumber = this.element.querySelector('.card__like-number');
    this.likeNumber.textContent = this._likes.length;

    this.buttonLikeCard = this.element.querySelector('.card__button-like');

    this._createCard();
    this._addEventListeners();
    this._checkForButtonDelete();
    this._checkLikes();

    return this.element;
  }

}