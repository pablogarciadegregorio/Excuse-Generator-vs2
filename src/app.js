/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function getrandom(a) {
    var numeroAleatorio = Math.floor(Math.random() * a.length);

    return numeroAleatorio;
  }

  let quien = who[getrandom(who)];
  let accion = action[getrandom(action)];
  let que = what[getrandom(what)];
  let cuando = when[getrandom(when)];

  document.getElementById("excuse").innerHTML =
    quien + " " + accion + " " + que + " " + cuando;
};
