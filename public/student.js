export default class Student {
  
  constructor(data) {
    //compy all key/values from data to this
    Object.assign(this, data);
    this._uri = `/api/students/${this.id}`;
  }

  static async load(id){
   let res = await fetch(`/api/students/${id}`);
   let obj = await res.json();
   return new Student(obj);
  }

  async listCourse(){
    let res = await fetch(`${this._uri}/courses`);
    let json =  await res.json();
    return json.courses;
  }
}
