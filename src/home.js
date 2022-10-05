import "./style.css";
import list from "./format-list-bulleted.png"
import home from "./home.png"
import add from "./pencil-plus.png"
import {createProjectGroup, modalTwo, obj, hiddenInput, contentDiv} from "./projects"
import { format } from "date-fns";

//let hiddenInput = document.createElement("input")
const buttonGroup = document.createElement("div")
let current


let addIcon = document.createElement("img")
function headerContainer(){
    const headerDiv = document.createElement('div')
    const leftIcons = document.createElement("div")
    const rightIcons = document.createElement("div")
    const listIcon = document.createElement("img")
    const homeIcon = document.createElement("img")
    const todoName = document.createElement("h4")
    todoName.style.paddingLeft = "20px"
    todoName.textContent = "Schema"

    

    listIcon.src = list
    homeIcon.src = home
    addIcon.src = add
    headerDiv.appendChild(leftIcons)
    headerDiv.appendChild(rightIcons)
    leftIcons.appendChild(listIcon)
    leftIcons.appendChild(homeIcon)
    //leftIcons.appendChild(todoName)

    leftIcons.classList.add("home-icon")
    rightIcons.classList.add("home-icon")
    headerDiv.classList.add("header")
    homeIcon.classList.add("home-style")
    addIcon.classList.add("add-style")
    //listIcon.classList.add("openbtn")

    homeIcon.addEventListener("click", ()=>{
        document.location.reload()
    })
    listIcon.addEventListener("click", openNav)
    addIcon.addEventListener("click", () => {
        modal.style.display = "block"
    })
    return headerDiv
}


let majorButton = document.createElement("button")

let centralDiv = document.createElement("div")
  centralDiv.classList.add("central-div")
let buttonId

let collapsibleDiv;
function collapsibleSidebar() {
    collapsibleDiv = document.createElement("div")
    const close = document.createElement("btn")
    const inbox = document.createElement("btn")
    const today = document.createElement("btn")
    const projects = document.createElement("btn")


    today.addEventListener("click", todayBodyDiv)

    inbox.addEventListener("click", (e) => {

    buttonId = e.target.textContent
    const header = document.createElement("p")
    inbox.setAttribute('id', buttonId)

    bodyDiv.textContent = ""
    contentDiv.textContent = ""
    header.style.fontSize = "30px"
    header.style.color = "#334155"
    hiddenInput.setAttribute("value", buttonId)  
  
    //event listener for button used to add other tasks to a project
     majorButton.addEventListener("click", () => {
        modalTwo.style.display = "block"
    })

  majorButton.classList.add("major-button")
  buttonGroup.appendChild(majorButton)
  majorButton.textContent = "Add Task"
  contentDiv.appendChild(header)
  header.textContent = e.target.textContent
  
  bodyDiv.appendChild(centralDiv)
  centralDiv.appendChild(contentDiv)
  centralDiv.appendChild(buttonGroup) 
  

  if (localStorage.getItem(e.target.textContent)){
    let listKey = hiddenInput.value
    let allTasks = JSON.parse(localStorage.getItem(listKey)) 
    for (let i = 0; i < allTasks.length; i++){
        let newTodoDiv = document.createElement("div")
     let newSentence = document.createElement("p")
        newSentence.textContent = allTasks[i]
        newTodoDiv.appendChild(newSentence)
      contentDiv.appendChild(newTodoDiv)
    }
    
}
//})  
//newProject.textContent = input.value
current = e.target.textContent
    })
    
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
    //bodyDiv.textContent = "what are we doing today?"
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


 function todayBodyDiv() {
    const header = document.createElement("p")
    bodyDiv.textContent = ""
    contentDiv.textContent = ""
    centralDiv.textContent = ""
    header.style.fontSize = "30px"
    header.style.color = "#334155"
    header.textContent = "Today"

    bodyDiv.appendChild(centralDiv)
    centralDiv.appendChild(contentDiv)
    contentDiv.appendChild(header)
    
    let getStoredDate = JSON.parse(localStorage.getItem("date-store"))

    for (let i = 0; i < getStoredDate.length; i++){
        let presentDay = format(new Date(), 'yyyy-MM-dd')
        if (presentDay == getStoredDate[i].date){
           let todoDIV = document.createElement("div")
           let para1 = document.createElement("p")
           let para2 = document.createElement("p")

           para1.textContent = getStoredDate[i].title
           para2.textContent = getStoredDate[i].date

           todoDIV.appendChild(para1)
           todoDIV.appendChild(para2)
           contentDiv.appendChild(todoDIV)

           todoDIV.style.display = "flex"
           todoDIV.style.flexDirection = "row"
           todoDIV.style.justifyContent = "space-around"
           //todoDIV.style.padding = "5px"
        } //else {console.log("we not yet moving o")}
    }

 }
export {createHeader, sidebarAndBody, bodyDiv, main}

