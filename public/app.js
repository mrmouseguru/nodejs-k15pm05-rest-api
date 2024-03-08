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
   document.querySelector("#results")
   .textContent = text;
  }
}
