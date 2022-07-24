export class UserInfo {
  constructor(name, description) {
    this.name = name;
    this.description = description;
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