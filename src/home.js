import "./style.css";
import list from "./format-list-bulleted.png"
import home from "./home.png"
import add from "./pencil-plus.png"
import {createProjectGroup} from "./projects"


function headerContainer(){
    const headerDiv = document.createElement('div')
    const leftIcons = document.createElement("div")
    const rightIcons = document.createElement("div")
    const listIcon = document.createElement("img")
    const homeIcon = document.createElement("img")
    const addIcon = document.createElement("img")

    listIcon.src = list
    homeIcon.src = home
    addIcon.src = add
    headerDiv.appendChild(leftIcons)
    headerDiv.appendChild(rightIcons)
    leftIcons.appendChild(listIcon)
    leftIcons.appendChild(homeIcon)
    rightIcons.appendChild(addIcon)

    leftIcons.classList.add("home-icon")
    rightIcons.classList.add("home-icon")
    headerDiv.classList.add("header")
    homeIcon.classList.add("home-style")
    addIcon.classList.add("add-style")
    //listIcon.classList.add("openbtn")

    listIcon.addEventListener("click", openNav )
    return headerDiv
}



let collapsibleDiv;
function collapsibleSidebar() {
    collapsibleDiv = document.createElement("div")
    const inbox = document.createElement("btn")
    const today = document.createElement("btn")
    const projects = document.createElement("btn")

    function appendProject() {
        collapsibleDiv.appendChild(createProjectGroup())
    } 
    projects.addEventListener("click", appendProject)

    collapsibleDiv.appendChild(inbox)
    collapsibleDiv.appendChild(today)
    collapsibleDiv.appendChild(projects)
    //collapsibleDiv.appendChild(createProjectGroup())
    collapsibleDiv.classList.add("sidebar")
    collapsibleDiv.setAttribute("id", "mySidebar")

    inbox.textContent = "Inbox"
    inbox.classList.add("btn")
    today.textContent = "Today"
    today.classList.add("btn")
    projects.textContent = "Projects"
    projects.classList.add("btn")

    return collapsibleDiv
}

    let bodyDiv
function main() {
    bodyDiv = document.createElement("div")
    bodyDiv.textContent = "what are we doing today?"
    bodyDiv.classList.add("main")
    
    return bodyDiv
}

function sidebarAndBody() {
    const container = document.createElement("div")
    container.appendChild(collapsibleSidebar())
    container.appendChild(main())

    return container
}

function openNav() {
    collapsibleDiv.style.width = "250px";
    bodyDiv.style.marginLeft = "250px";
}


function createHeader() {
  return  headerContainer()
}

export {createHeader, sidebarAndBody}



// change the color of the sidebar
