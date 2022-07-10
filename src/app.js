/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extencion = [".com"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let m = 0; m < adj.length; m++) {
      for (let v = 0; v < noun.length; v++) {
        for (let x = 0; x < extencion.length; x++) {
          console.log(pronoun[i] + adj[m] + noun[v] + extencion[x]);
        }
      }
    }
  }
};
