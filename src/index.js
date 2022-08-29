import { createHeader, sidebarAndBody} from "./home";
import "./style.css";

const content = document.querySelector("#main-content")

function initializeTodoList() {
content.appendChild(createHeader())
content.appendChild(sidebarAndBody())
}
initializeTodoList()