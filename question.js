class Question {
  constructor(id, content) {
    this.save();
    this.id=id;
    this.content=content;
    Question._All.push(this)
  }
  save(){
    this.constructor._All.push(this)
  }

  static All(){
    return this._All;
  }

  static Find(id){
    return this.All().filter(function(question){
     return question.id === id;
   })
  }
}
Question._All =[]

const question = new Question()

Question.All()
