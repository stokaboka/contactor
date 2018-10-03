export class User {
  id: String;
  nickName: String;
  firstName: String;
  middleName: String = '';
  lastName: String;

  constructor(
    id: String,
    nickName: String,
    firstName: String,
    middleName: String,
    lastName: String,
  ) {
    this.id = id;
    this.nickName = nickName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

}
