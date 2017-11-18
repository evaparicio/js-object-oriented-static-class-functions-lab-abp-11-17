class Question {
  constructor() {
    this.save()
  }
  save(){
    this.constructor._All.push(this)
  }

  static All() {
    return this._All;
  }
}
User._All = []
