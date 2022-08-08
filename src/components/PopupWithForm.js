import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({ popupSelector, callbackSubmitForm }) {
    super({ popupSelector });
    this._callbackSubmitForm = callbackSubmitForm;
    this._popupForm = this.popup.querySelector('.popup__form');
    this._popupInput = this.popup.querySelectorAll('.popup__input');

    this._buttonSubmit = this._popupForm.querySelector('.popup__button-submit');
    this._savingText = this._buttonSubmit.textContent;

    this.renderLoading = this.renderLoading.bind(this);
  }

  _getInputValues() {
    this._inputValues = {}; //новый объект
    this._popupInput.forEach((input) => { //перебираем инпуты
      const value = input.value;
      const inputName = input.name;
      this._inputValues[inputName] = value;
    })
    return this._inputValues;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Сохранение...';
    }
    else {
      this._buttonSubmit.textContent = this._savingText;
    }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      this._callbackSubmitForm(evt, this._getInputValues());

    })
  }

}