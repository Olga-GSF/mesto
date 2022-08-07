
export class Card {
  constructor(info, selector, handleCardClick) {
    this._name = info.name;
    this._link = info.link;
    this._selector = selector;
    //this._bigImage = bigImage;
    this._handleCardClick = handleCardClick;
    //this._token = settings.token; // owner._id см в консоли
    // this._userId = userId;
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

  _handleLikeButton(likeItem) {
    likeItem.classList.toggle('button_is-active');
  };

  _handleButtontnDelete() {
    this.element.remove();
    this.element = null;
  }

  _addEventListeners() {
    const bigImage = this.element.querySelector('.card__image');
    const likeCard = this.element.querySelector('.card__button-like')
    const likeNumber = this.element.querySelector('.card__like-number');
    //console.log(bigImage);
    bigImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });


    likeCard.addEventListener('click', () => {
      this._handleLikeButton(likeCard);
      if (likeCard.classList.contains('button_is-active')) {// Number - преобразует в числа
        likeNumber.textContent = Number(likeNumber.textContent) + 1; //клик на активный лайк, = +1 лайк
      }
      else {
        likeNumber.textContent = Number(likeNumber.textContent) - 1; //клик на активный лайк, = +1 лайк
      }
      });
      
    //   this.element.querySelector('.card__button-delete').addEventListener('click', (evt) => {
    //   this._handleButtontnDelete(evt);
    // });
  }

  generateCard() {
    this.element = this._getTemplate();
    this._createCard();
    this._addEventListeners();
    return this.element;
  }

}

// setLikeNumber(data) {
//      return String(data.likes.length);
//       }
  
//       _setLikeListener() {
//           const like = this.element.querySelector(".photos__like");
//           
//           const likesNum = this.element.querySelector('.photos__like-number');
//           
//           like.addEventListener("click", () => {
//               this._changeLikeStatus(like);
//           if (like.classList.contains('photos__like_active')) {
//               likesNum.textContent = Number(likesNum.textContent) + 1; //при нажатии активного лайка, добавляется 1 лайк
//           }
//           else {
//               likesNum.textContent = Number(likesNum.textContent) - 1; //при повторном нажатии лайка, убирается 1 лайк. Number - преобразует в числа
//           }
//           }
//       )}