import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, callbackSubmitForm }) {
    super({ popupSelector });
    this._callbackSubmitForm = callbackSubmitForm;
    this._popupForm = this.popup.querySelector('.popup__form');
  }

  open(id, element) {
    this.id = id;
    this.element = element;
    super.open();
    //console.log(this.element);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this.id, this.element)
    })
  }
}