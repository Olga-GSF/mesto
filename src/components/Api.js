export class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;

    this._getJsonOrError = this._getJsonOrError.bind(this);
    this._getHeaders = this._getHeaders.bind(this);
  }

  _getJsonOrError(res) {
    if (res.ok) {
      return res.json();
    }

    throw new Error('Ошибка при загрузке данных');
  }

  _getHeaders() {
    return {
      authorization: this._token,
      'Content-Type': 'application/json',
    }
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._getHeaders(),
    })
      .then(this._getJsonOrError)
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._getHeaders(),
    })
      .then(this._getJsonOrError)
  }

  setUserData(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        userName: data.name,
        description: data.about
      })
    })
      .then(this._getJsonOrError)
  }

  createCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._getJsonOrError)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    })
      .then(this._getJsonOrError)
  }

  likeCard(id, liked) {
    return fetch(`${this._url}/cards/likes${id}`, {
      method: 'PUT',
      headers: this._getHeaders(),
      body: JSON.stringify({ liked }),
    })
      .then(this._getJsonOrError)
  }

  disLikeCard(id, liked) {
    return fetch(`${this._url}/cards/likes${id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
      body: JSON.stringify({ liked }),
    })
      .then(this._getJsonOrError)
  }

  setAva(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
      .then(this._getJsonOrError)
  }

}

