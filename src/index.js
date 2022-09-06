export default class Team {
  constructor() {
    this.members = new Set();
  };
  
  add(character) {
    if (this.members.has(character)) {
      throw new Error("Такой игрок уже существует");
    };
    this.members.add(character);
  };
  
  addAll(...characters) {
    for (const elem of characters) {
      this.members.add(elem);
    };
  };
  
  toArray() {
    this.members = Array.from(this.members);
  };
};