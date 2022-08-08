export class UserInfo {
  constructor({ titleSelector, subtitleSelector, popupAvatar }) {
    this.name = document.querySelector(titleSelector);
    this.description = document.querySelector(subtitleSelector);
    this.popupAvatar = document.querySelector(popupAvatar)
  }

  setUserAvatar(data) {
    this.popupAvatar.src = data.avatar
  }

  getUserInfo() {
    const info = {
      name: this.name.textContent,
      description: this.description.textContent
    }
    return info;
  }

  setUserInfo(data) {
    this.name.textContent = data.userName;
    this.description.textContent = data.description;
  }

  getUserId() {
    return this.id;
  }

  setUserId(data) {
    this.id = data._id
  }

}