export class Popup {
  constructor({ popupSelector }) {
    this.popup = document.querySelector(popupSelector);
    this.buttonPopupClose = this.popup.querySelector('.popup__button-close');
  }

  open() {
    this.popup.classList.add('popup_is-open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popup.classList.remove('popup_is-open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  _handleClose() {
    this.popup.addEventListener('mousedown', (evt) => {
      const container = this.popup.querySelector('.popup__content')
      const click = evt.composedPath().includes(container) //composePath возвращает путь к контейнеру
      if (!click) {
        this.close()
      }
    })
  }

  setEventListeners() {
    this.buttonPopupClose.addEventListener('click', () => {
      this.close(this.popup)
    })
    this._handleClose();
  }
}

  // _handleOverlayClose = (evt) => {
  //   if (evt.target.classList.contains('popup')) {
  //     this.close();
  //   }
  // }
