export class UserInfo {
  constructor(name, description, popupAvatar) {
    this.name = name;
    this.description = description;
    this.popupAvatar = popupAvatar
  }

  setUserAvatar(element) {
    this.popupAvatar.src = element.popupAvatar
  }

  getUserInfo() {
    const info = {
      name: this.name.textContent,
      description: this.description.textContent
    }
    return info;
  }

  setUserInfo(element) {
    this.name.textContent = element.userName;
    this.description.textContent = element.description;
  }

}