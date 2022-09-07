import "./style.css";
import list from "./format-list-bulleted.png"
import home from "./home.png"
import add from "./pencil-plus.png"
import {createProjectGroup} from "./projects"
import {modal} from "./todo"

let addIcon = document.createElement("img")
function headerContainer(){
    const headerDiv = document.createElement('div')
    const leftIcons = document.createElement("div")
    const rightIcons = document.createElement("div")
    const listIcon = document.createElement("img")
    const homeIcon = document.createElement("img")
    

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

    listIcon.addEventListener("click", openNav)
    addIcon.addEventListener("click", () => {
        modal.style.display = "block"
    })
    return headerDiv
}

let collapsibleDiv;
function collapsibleSidebar() {
    collapsibleDiv = document.createElement("div")
    const close = document.createElement("btn")
    const inbox = document.createElement("btn")
    const today = document.createElement("btn")
    const projects = document.createElement("btn")
    
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }

    collapsibleDiv.appendChild(close)
    collapsibleDiv.appendChild(inbox)
    collapsibleDiv.appendChild(today)
    collapsibleDiv.appendChild(projects)
    collapsibleDiv.appendChild(createProjectGroup())
    collapsibleDiv.classList.add("sidebar")
    collapsibleDiv.setAttribute("id", "mySidebar")

    close.classList.add("closebtn")
    close.addEventListener("click", closeNav)
    close.textContent = "x"
    inbox.textContent = "Inbox"
    inbox.classList.add("btn")
    today.textContent = "Today"
    today.classList.add("btn")
    projects.textContent = "Projects"
    projects.classList.add("btn")

    projects.addEventListener("click", ()=>{
        if (document.querySelector(".group").classList.contains("active")){
        document.querySelector(".group").style.display = "none" 
        document.querySelector(".group").classList.remove("active")
        } else {
        document.querySelector(".group").style.display = "flex"
        document.querySelector(".group").classList.add("active")
        }
    })
    return collapsibleDiv
}

    let bodyDiv
function main() {
    bodyDiv = document.createElement("div")
    bodyDiv.textContent = "what are we doing today?"
    bodyDiv.classList.add("main")
    bodyDiv.setAttribute("id", "main")
    
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

export {createHeader, sidebarAndBody, addIcon}

