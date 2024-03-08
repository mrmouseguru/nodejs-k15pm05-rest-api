import Student from "./student.js";

export default class App {
  constructor() {
    this._onClickBetter = this._onClickBetter.bind(this);
    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClickBetter);
  }

  async _onClickBetter(event) {
    // let res = await fetch("myfile.txt");
    // let text = await res.text();
    // let res2 = await fetch("person.json");
    // let obj = await res2.json();
    // let s = `${text}\n${obj.givenName} ${obj.surname}`;
    // document.querySelector("#results").textContent = s;

   let res =  await fetch("/api/text");//return a promise + response
   let text = await res.text();//promise + text data
   let res2 = await fetch("/api/students/mchang");
   let obj = await res2.json();
   document.querySelector("#results")
   .textContent = `${text}\n${obj.givenName} ${obj.surname}`;

   let res3 = await fetch("/api/students/mchang");
   let obj2 = await res3.json();

   let student = new Student(obj2);

   console.log(student);

   let student2 = await Student.load("mchang");//promise
   console.log(student2);
   let courses = await student2.listCourse();
   console.log(courses);

   await student2.declare("CS");
   console.log(student2);
  }
}
