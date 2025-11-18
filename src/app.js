function ExcuseGenerator(who, action, what, when) {
  return who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] 
  + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)] + ".";
}

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const h1 = document.getElementById("excuse");
h1.textContent = ExcuseGenerator(who, action, what, when);

console.log(ExcuseGenerator(who, action, what, when));