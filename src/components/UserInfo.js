export class UserInfo {
  constructor({ titleSelector, subtitleSelector, popupAvatar }) {
    this.name = document.querySelector(titleSelector);
    this.about = document.querySelector(subtitleSelector);
    this.popupAvatar = document.querySelector(popupAvatar)
  }

  setUserAvatar(data) {
    this.popupAvatar.src = data.avatar
  }

  getUserInfo() {
    const info = {
      name: this.name.textContent,
      about: this.about.textContent,
    }
    return info;
  }

  setUserInfo(data) {
    this.name.textContent = data.name;
    this.about.textContent = data.about;
  }

  getUserId() {
    return this.id;
  }

  setUserId(data) {
    this.id = data._id
  }

}