export default class Student {
  
  constructor(data) {
    //compy all key/values from data to this
    Object.assign(this, data);
  }
}
