// export class Avatar {
//   constructor(info, selector, handleAvatarClick) {
//     this._link = info.link;
//     this._selector = selector;
//     this._handleAvatarClick = handleAvatarClick;
//   }

//   _getTemplate() {
//     const avatarElement = document
//       .querySelector(this._selector)
//       .content
//       .querySelector('.profile__avatar')
//       .cloneNode(true);

//     return avatarElement;
//   }

//   _createAvatar() {
//     const avatarImage = this.element.querySelector('.profile__avatar');
//     avatarImage.src = this._link;
//   }

//   _addEventListeners() {
//     const avatarImage = this.element.querySelector('.profile__avatar');
//     avatarImage.addEventListener('click', () => { this._handleAvatarClick(this._link) });
//   }

//   generateAvatar() {
//     this.element = this._getTemplate();
//     this._createAvatar();
//     this._addEventListeners();
//     return this.element;
//   }

// }