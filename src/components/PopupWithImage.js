import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });

    this._imagePopupCard = this.popup.querySelector('.popup__big-image');
    this._imagePopupTitle = this.popup.querySelector('.popup__image-title');
  }

  open(name, link) {
    this._imagePopupCard.alt = name;
    this._imagePopupCard.src = link;
    this._imagePopupTitle.textContent = name;
    super.open();
  }
}