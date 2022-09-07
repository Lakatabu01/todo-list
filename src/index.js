import { createHeader, sidebarAndBody} from "./home";
import {projectForm} from "./projects"
import "./style.css";
import { todoPopup } from "./todo";

const content = document.querySelector("#main-content")

function initializeTodoList() {
content.appendChild(createHeader())
content.appendChild(sidebarAndBody())
content.appendChild(projectForm())
content.appendChild(todoPopup())
}
initializeTodoList()