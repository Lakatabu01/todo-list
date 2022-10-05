import { createHeader, sidebarAndBody} from "./home";
import {buttonId, form, projectForm} from "./projects"
import "./style.css";
import { todoPopup } from "./projects";
import {data, setStyles} from "./display"

const content = document.querySelector("#main-content")

function initializeTodoList() {
content.appendChild(createHeader())
content.appendChild(sidebarAndBody())
content.appendChild(projectForm())
content.appendChild(todoPopup())
}
initializeTodoList()


if (data) {
   setStyles();
  console.log("name found")
  } else {
    console.log("name not found")
  }

  
  