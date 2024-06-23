export default class Post {
  constructor(title, img) {
    this.img = img;
    this.date = new Date();
    this.title = title;
  }

  toString() {
    return JSON.stringify(
      {
        date: this.date.toJSON(),
        img: this.img,
        title: this.title,
      },
      null,
      2
    );
  }
}
