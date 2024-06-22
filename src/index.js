import _ from "lodash";
import myName from "./myName";
import { functionOne, functionTwo } from "./myModule";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  //   element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Odin-Project example function

  element.textContent = myName("Slim Shady");

  return element;
}

document.body.appendChild(component());
