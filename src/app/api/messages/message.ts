export class Message {
  from: String;
  to: String;
  datetime: Date;
  text: String;

  constructor(
    from: String,
    to: String,
    datetime: Date,
    text: String) {
    this.from = from;
    this.to = to;
    this.datetime = datetime;
    this.text = text;
  }
}
