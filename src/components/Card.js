
export class Card {
  constructor(info, selector, handleCardClick, userId, handleCardDelete, handleCardLike) {
    this._id = info._id;
    this._ownerId = info.owner._id;
    this.userId = userId;
    this._name = info.name;
    this._link = info.link;
    this._selector = selector;
    this._likes = info.likes;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;
    //console.log(info.likes);
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

  _handleCardLike() {

  }

  _handleLikeButton(likeItem) {
    likeItem.classList.toggle('button_is-active');
  };

  checkLikes() {
    this._likes.array.some((info) => {
      return info.id === this.userId;
    })
  }

  _setLikes(arr) {
    likeNumber.textContent = arr.length;
  }

  _handleButtonDelete() {
    this.element.remove();
    this.element = null;
  }

  _checkForButtonDelete() {
    if (this._ownerId !== "2b46b93d623a1f845b967594") {
      const buttonDelete = this.element.querySelector('.card__button-delete')
      buttonDelete.remove();
      }
  }

  _addEventListeners() {
    const bigImage = this.element.querySelector('.card__image');
    const likeCard = this.element.querySelector('.card__button-like')
    const likeNumber = this.element.querySelector('.card__like-number');
    const buttonDelete = this.element.querySelector('.card__button-delete');
    bigImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });

    likeCard.addEventListener('click', () => {
      this._handleLikeButton(likeCard);
      
      });

      buttonDelete.addEventListener('click', () => this._handleCardDelete(this._id, this.element));
    
  }

  generateCard() {
    this.element = this._getTemplate();
    this.element.querySelector('.card__like-number').textContent = this._likes.length
    this._createCard();
    //this._setLikes();
    this._addEventListeners();
    this._checkForButtonDelete();
    //console.log(this.element);
    return this.element;
  }

}

// if (likeCard.classList.contains('button_is-active')) {// Number - преобразует в числа
//   likeNumber.textContent = Number(likeNumber.textContent) + 1; //клик на активный лайк, = +1 лайк
// }
// else {
//   likeNumber.textContent = Number(likeNumber.textContent) - 1; //клик на активный лайк, = +1 лайк
// }

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