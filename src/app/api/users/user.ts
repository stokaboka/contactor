export class User {
  id: String;
  nickName: String;
  firstName: String;
  middleName: String = '';
  lastName: String;
  image: String;

  constructor(
    id: String = '',
    nickName: String = '',
    firstName: String = '',
    middleName: String = '',
    lastName: String = '',
    image: String = ''
  ) {
    this.id = id;
    this.nickName = nickName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.image = image;
  }

}
