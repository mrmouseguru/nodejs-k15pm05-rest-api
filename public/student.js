export default class Student {
  
  constructor(data) {
    //compy all key/values from data to this
    Object.assign(this, data);
  }

  static async load(id){
   let res = await fetch(`/api/students/${id}`);
   let obj = await res.json();
   return new Student(obj);
  }

  async listCourse(){
    let res = await fetch("/api/students/mchang/courses");
    let json =  await res.json();
    return json.courses;
  }
}
