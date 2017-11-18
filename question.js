class Question {
  constructor(content) {
    this.save();
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

const question = new Question("What's your favorite food?")
question.save()
Question.All()
