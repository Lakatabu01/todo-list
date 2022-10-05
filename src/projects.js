import "./style.css";
import {bodyDiv} from "./home"
import del from "./delete-off.png"

let modal
let plusBtn
let newProject
const documentedProjects = document.createElement("ul")
documentedProjects.classList.add("all-projects")


let majorButton = document.createElement("button")
let contentDiv = document.createElement("div")
let centralDiv = document.createElement("div")
  centralDiv.classList.add("central-div")
let buttonId
let current


let array = []
const buttonGroup = document.createElement("div")
buttonGroup.classList.add("a-btn")
 
//code for the elements on the sidebar
function createProjectGroup() {
    const group = document.createElement("div")
    const projectDiv = document.createElement("div")
    
    const btnDiv = document.createElement("div")
    const firstProject = document.createElement("li")
    firstProject.classList.add("odin-button")
    firstProject.style.listStyleType = "none"

    firstProject.addEventListener("click", (e) => {
buttonId = e.target.textContent
const header = document.createElement("p")
firstProject.setAttribute('id', buttonId)

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
     let newSentence = document.createElement("p")
     let newTodoDiv = document.createElement("div")

     newTodoDiv.classList.add("items")
     newTodoDiv.style.flexDirection = "row"
     let deleteIcon = document.createElement("img")
     deleteIcon.src = del
      deleteIcon.style.backgroundColor = "red"

      deleteIcon.onclick = function (){
        newTodoDiv.style.display = "none"
         let recoverArray = JSON.parse(localStorage.getItem(listKey))
         let getIndexOfDeletedItem = recoverArray.indexOf(newSentence.textContent)
  
         if (getIndexOfDeletedItem != -1) recoverArray.splice(getIndexOfDeletedItem, 1)
        localStorage.setItem(listKey, JSON.stringify(recoverArray))
        }

        newSentence.textContent = allTasks[i]
        newTodoDiv.appendChild(newSentence)
        newTodoDiv.appendChild(deleteIcon)
      contentDiv.appendChild(newTodoDiv)
    }
    
}
current = e.target.textContent
})


    const demoProject = document.createElement("button")
    plusBtn = document.createElement("button")

    plusBtn.textContent = " +    New Project"
    plusBtn.setAttribute("id", "myBtn")
    demoProject.textContent = "The Odin Project"
    
    plusBtn.onclick = function() {
        modal.style.display = "block";
      }

    group.appendChild(projectDiv)
    group.appendChild(btnDiv)
    projectDiv.appendChild(documentedProjects)
    firstProject.appendChild(demoProject)
    demoProject.classList.add("project-list")
    
    btnDiv.appendChild(plusBtn)
    documentedProjects.appendChild(firstProject)

    group.classList.add("group")
    plusBtn.classList.add("add-btn")

    group.style.display = "none"
    return group
}

let modalTwo
let spanTwo
//code for form requesting details about the todo item
 function todoPopup() {
  modalTwo = document.createElement("div")
  const modalContent = document.createElement("div")
  spanTwo = document.createElement("span")
  const modalContainer = document.createElement("div")
  const formHeader = document.createElement("h2")
  formHeader.textContent = "New Task"

  modalTwo.appendChild(modalContent)
  modalContent.appendChild(spanTwo)
  modalContent.appendChild(modalContainer)
  modalContainer.appendChild(formHeader)
  modalContainer.appendChild(formContent())
  modalContainer.appendChild(formButtons())

  modalContainer.classList.add("modal-container")
  modalTwo.classList.add("second-modal")
  modalTwo.setAttribute("id", "myModal")
  modalContent.classList.add("todo-popup")
  spanTwo.classList.add("close")
  spanTwo.textContent = "x"

  spanTwo.onclick = function() {
      modalTwo.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modalTwo) {
        modalTwo.style.display = "none";
      }
    }

  return modalTwo
}

const input = document.createElement("input")
const form  = document.createElement("form")
let submitButton = document.createElement("button")
//code requesting project name to be appended to sidebar
function projectForm() {
    modal = document.createElement("div")
    const modalContent = document.createElement("div")
    const span = document.createElement("span")
    const modalContainer = document.createElement("div")

    
    const formDiv = document.createElement("div")
    const label = document.createElement("label")
    const formSpan = document.createElement("span")
    
    const btnDiv = document.createElement("div")
    
    const cancelButton = document.createElement("button")

    form.appendChild(formDiv)
    formDiv.appendChild(label)
    label.appendChild(formSpan)
    label.appendChild(input)
    btnDiv.appendChild(submitButton)
    btnDiv.appendChild(cancelButton)

    label.setAttribute("for", "title")
    input.style.display = "block"
    formSpan.textContent = "Project Title"
    input.setAttribute("type", "text")
    input.setAttribute("id", "title")
    input.setAttribute("placeholder", "The Odin Project")
    
    modal.appendChild(modalContent)
    modalContent.appendChild(span)
    modalContent.appendChild(modalContainer)
    modalContainer.appendChild(form)
    modalContainer.appendChild(btnDiv)
    input.classList.add("project-input")
    submitButton.classList.add("submit-project")
    cancelButton.classList.add("cancel-project")

    modalContainer.classList.add("modal-container")
    btnDiv.classList.add("btn-div")
    label.classList.add("title-label")
    modal.classList.add("modal")
    modal.setAttribute("id", "myModal")
    modalContent.classList.add("modal-content")
    span.classList.add("close")
    span.textContent = "x"
    submitButton.textContent = "Submit"
    cancelButton.textContent = "Cancel"
    submitButton.addEventListener("click", ()=> {
      if (input.value.length > 17){
        alert("Project title should not be more than 17 characters")
      } else if (input.value < 1){
        alert ("Project title should not be less than one character")
      } else{
        appendProject()
        modal.style.display = "none";
        input.value = ""
      }
      })
    cancelButton.addEventListener("click", cancelModal)

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      return modal
}

function appendProject () {
  if (JSON.parse(localStorage.getItem("button-content"))){
   const temporary = JSON.parse(localStorage.getItem("button-content"))
    array = temporary
  }
  
const newListItem = document.createElement("li")
newListItem.setAttribute('id', "new-item")
newProject = document.createElement("button") 

newProject.classList.add("project-list")
buttonId = input.value
array.push(buttonId)
const header = document.createElement("p")

localStorage.setItem("button-content", JSON.stringify(array))
newProject.setAttribute('id', buttonId)

newProject.addEventListener("click", (e) => {
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
    console.log(allTasks)
    for (let i = 0; i < allTasks.length; i++){
      let newTodoDiv = document.createElement("div")
      newTodoDiv.classList.add("items")
     let newSentence = document.createElement("p")
        newSentence.textContent = allTasks[i]
        newTodoDiv.appendChild(newSentence)
      contentDiv.appendChild(newTodoDiv)
    }
    
}
})  
newProject.textContent = input.value
current = input.value

const newDiv = document.createElement("div")
newListItem.appendChild(newDiv)
newDiv.appendChild(newProject)

documentedProjects.appendChild(newListItem)
}



function cancelModal() {
    modal.style.display = "none";
}

let titleInput
let dateInput
let descriptionInput
let priorityInput
let opt1
let opt2
let opt3

let hiddenInput = document.createElement("input")
// function containing DOM manipulations for user input into the todo form
function formContent() {
    const infoForm = document.createElement("form")

    //DOM code for title input
    const firstFlexDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const titleLabel = document.createElement("label")
    titleLabel.setAttribute ("for", "title")
    const titleSpan = document.createElement("span")
    titleSpan.textContent = "Title"
    titleInput = document.createElement("input")
    titleInput.style.display = "block"
    titleInput.setAttribute("id", "title")

    infoForm.appendChild(firstFlexDiv)
    firstFlexDiv.appendChild(titleDiv)
    titleDiv.appendChild(titleLabel)
    titleLabel.appendChild(titleSpan)
    titleLabel.appendChild(titleInput)

    firstFlexDiv.classList.add("first-flex")
    infoForm.classList.add("info-form")
    titleDiv.classList.add("title-div")
    titleLabel.classList.add("todo-label")
    titleInput.classList.add("title-input")

    //Dom code for Due Date input 
    const dateDiv = document.createElement("div")
    const dateLabel = document.createElement("label")
    dateLabel.setAttribute ("for", "date")
    const dateSpan = document.createElement("span")
    dateSpan.textContent = "Due date:"
    dateInput = document.createElement("input")
    dateInput.style.display = "block"
    dateInput.setAttribute("id", "date")
    dateInput.setAttribute("type", "date")

    dateDiv.classList.add("date-div")
    dateInput.classList.add("date-input")

    firstFlexDiv.appendChild(dateDiv)
    dateDiv.appendChild(dateLabel)
    dateLabel.appendChild(dateSpan)
    dateLabel.appendChild(dateInput)

    // Dom code for description input
    const secondFlexDiv = document.createElement("div")
    const descriptionDiv = document.createElement("div")
    const descriptionLabel = document.createElement("label")
    
    descriptionLabel.setAttribute ("for", "description")
    const descriptionSpan = document.createElement("span")
    descriptionSpan.textContent = "Description:"
    descriptionInput = document.createElement("textarea")
    descriptionInput.style.display = "block"
    
    infoForm.appendChild(secondFlexDiv)
    secondFlexDiv.appendChild(descriptionDiv)
    descriptionDiv.appendChild(descriptionLabel)
    descriptionLabel.appendChild(descriptionSpan)
    descriptionLabel.appendChild(descriptionInput)
    descriptionInput.classList.add("description-input")
    descriptionDiv.classList.add("title-div")

    // Dom code for priority and project input
    const priorityAndProjectDiv = document.createElement("div")
    const priorityDiv = document.createElement("div")
    const priorityLabel = document.createElement("label")
    priorityLabel.setAttribute ("for", "priority")
    const prioritySpan = document.createElement("span")
    prioritySpan.textContent = "Priority"
    priorityInput = document.createElement("select")
    opt1 = document.createElement("option")
    opt2 = document.createElement("option")
    opt3 = document.createElement("option")

    opt1.textContent = "Low"
    opt1.setAttribute("value", "low")
    opt2.textContent = "Medium"
    opt2.setAttribute("value", "high")
    opt3.textContent = "High"
    opt3.setAttribute("value", "high")
    
    secondFlexDiv.appendChild(priorityAndProjectDiv)
    secondFlexDiv.classList.add("first-flex")
    priorityAndProjectDiv.appendChild(priorityDiv)
    priorityDiv.appendChild(priorityLabel)
    priorityLabel.appendChild(prioritySpan)
    priorityLabel.appendChild(priorityInput)
    priorityInput.appendChild(opt1)
    priorityInput.appendChild(opt2)
    priorityInput.appendChild(opt3)
    priorityAndProjectDiv.classList.add("title-div")
    priorityAndProjectDiv.classList.add("both-div")
    priorityInput.classList.add("date-input")

    //const projectDiv = document.createElement("div")
    const projectLabel = document.createElement("label")
    projectLabel.setAttribute ("for", "project")
    const projectSpan = document.createElement("span")
    projectSpan.textContent = "Project"

    //code to append created projects
    
    
    hiddenInput.setAttribute("type", "hidden")
    
   

    return infoForm
}


const todoSubmitButton = document.createElement("button")
  const todoCancelButton = document.createElement("button")
function formButtons() {
  const todoButtonDiv = document.createElement("div")
  

  todoSubmitButton.addEventListener("click", () =>{
    if (titleInput.value.length < 1){
      alert("Todo title should not be less than 1 character")
    } else{
    obj()
    modalTwo.style.display = "none";
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
    }
  })

  todoCancelButton.addEventListener("click", ()=> {
    modalTwo.style.display = "none";
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
  })

  todoButtonDiv.appendChild(todoSubmitButton)
  todoButtonDiv.appendChild(todoCancelButton)

  todoSubmitButton.textContent = "Submit"
  todoCancelButton.textContent = "Cancel"

  todoButtonDiv.classList.add("btn-div")
  todoButtonDiv.style.paddingRight = "11px"
  todoSubmitButton.classList.add("first-btn")
  todoCancelButton.classList.add("second-btn")

  return todoButtonDiv
}


function obj() {
  
class TodoCompilation {
  constructor (title, description, dueDate, priority, project){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    //this.project = project
  }
  
}
let output = new TodoCompilation (titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)

  let listKey = hiddenInput.value
  let window = {}
  let listItem = hiddenInput.value
 

  //code that stores all todo inputs and their time
  if (!JSON.parse(localStorage.getItem("date-store"))){
    let moment = []
    moment.unshift( {title:output.title, date:output.dateInput} )
    localStorage.setItem("date-store", JSON.stringify(moment))
  } else {
    let time = JSON.parse(localStorage.getItem("date-store"))
    time.unshift({title:output.title, date:output.dueDate})
    localStorage.setItem("date-store", JSON.stringify(time))
  }

  

  if (!JSON.parse(localStorage.getItem(listKey))){
    let array2 = []
    window[listItem] = array2
  } else {
    window[listItem] = JSON.parse(localStorage.getItem(listKey))
  }
  
  
  window[listItem].unshift(output.title) 
  localStorage.setItem(listKey, JSON.stringify(window[listItem]))
  
  
  let allTasks = JSON.parse(localStorage.getItem(listKey))   
    let para1
   // newTodoDiv.classList.remove("cut")
   const newTodoDiv = document.createElement("div")
  let deleteIcon = document.createElement("img")
  newTodoDiv.style.flexDirection = "row"
      para1  = document.createElement("p") 
      para1.textContent = allTasks[0]
      contentDiv.appendChild(newTodoDiv)
      newTodoDiv.appendChild(para1)
      
      newTodoDiv.classList.add("items")
      deleteIcon.src = del
    deleteIcon.style.backgroundColor = "red"
    newTodoDiv.appendChild(deleteIcon)

    deleteIcon.onclick = function (){
      newTodoDiv.style.display = "none"
      let recoverArray = JSON.parse(localStorage.getItem(listKey))
      let getIndexOfDeletedItem = recoverArray.indexOf(para1.textContent)
      

      if (getIndexOfDeletedItem != -1) recoverArray.splice(getIndexOfDeletedItem, 1)
      localStorage.setItem(listKey, JSON.stringify(recoverArray))
      
    }
     
 }

export {createProjectGroup, projectForm, input, todoPopup, documentedProjects,
         buttonId, majorButton, submitButton, contentDiv, modalTwo, obj, hiddenInput, todoSubmitButton}


    
