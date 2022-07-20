export class UserInfo {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  getUserInfo() {
    const info = {
      name: this.name.textContent,
      about: this.description.textContent
    }
    return info;
  }

  setUserInfo(element) {
    this.name.textContent = element.titleElement;
    this.description.textContent = element.subtitleElement;
  }

}