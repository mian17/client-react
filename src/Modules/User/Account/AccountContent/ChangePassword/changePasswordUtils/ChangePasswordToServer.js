export default class ChangePasswordToServer {
  constructor(old_password, password, password_confirmation) {
    this.old_password = old_password;
    this.password = password;
    this.password_confirmation = password_confirmation;
  }
}
