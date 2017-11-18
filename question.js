class Question {
  constructor(content) {
    this.save();
    this.content=content;
  }
  save(){
    this.constructor._All.push(this)
  }

  static All(){
    return this._All;
  }
}
Question._All =[]

const question = new Question()

Question.All()
