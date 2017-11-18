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

const question1 = new Question("What's your favorite food?")
const question2 = new Question("What city were you born in?")
const question3 = new Question("What's your favorite TV Show")

Question.All()
