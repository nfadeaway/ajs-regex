export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    if (this.username.search(/\d{4,}/) !== -1) {
      return false;
    }
    return /^[^0-9_-][a-zA-Z0-9_-]*[^0-9_-]$/.test(this.username);
  }
}
