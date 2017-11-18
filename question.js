class Question {
  constructor() {
    this.save()
  }
  save(){
    this.constructor._All.push(this)
  }
}
