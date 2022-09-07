import { addIcon } from "./home";
import { input } from "./projects";
import "./style.css";

export let modal
export let span 
function todoPopup() {
    modal = document.createElement("div")
    const modalContent = document.createElement("div")
    span = document.createElement("span")
    const modalContainer = document.createElement("div")
    const formHeader = document.createElement("h2")
    formHeader.textContent = "New Task"

    modal.appendChild(modalContent)
    modalContent.appendChild(span)
    modalContent.appendChild(modalContainer)
    modalContainer.appendChild(formHeader)
    modalContainer.appendChild(formContent())
    modalContainer.appendChild(formButtons())

    modalContainer.classList.add("modal-container")
    modal.classList.add("modal")
    modal.setAttribute("id", "myModal")
    modalContent.classList.add("todo-popup")
    span.classList.add("close")
    span.textContent = "x"

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

function formContent() {
    const infoForm = document.createElement("form")

    //DOM code for title input
    const firstFlexDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const titleLabel = document.createElement("label")
    titleLabel.setAttribute ("for", "title")
    const titleSpan = document.createElement("span")
    titleSpan.textContent = "Title"
    const titleInput = document.createElement("input")
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
    const dateInput = document.createElement("input")
    dateInput.style.display = "block"
    dateInput.setAttribute("id", "date")
    dateInput.setAttribute("type", "datetime-local")

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
    const descriptionInput = document.createElement("textarea")
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
    const priorityInput = document.createElement("select")
    const opt1 = document.createElement("option")
    const opt2 = document.createElement("option")
    const opt3 = document.createElement("option")

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

    const projectDiv = document.createElement("div")
    const projectLabel = document.createElement("label")
    projectLabel.setAttribute ("for", "project")
    const projectSpan = document.createElement("span")
    projectSpan.textContent = "Project"

    //work in progress
    const projectInput = document.createElement("select")
    const projectOpt1 = document.createElement("option")
    projectOpt1.textContent = "Inbox"
    projectInput.appendChild(projectOpt1)

    const projectOpt2 = document.createElement("option")
    projectOpt2.textContent = "The Odin Project"
    projectInput.appendChild(projectOpt2)
    //bug is likely to be somewhere around here
    
    
    let projectArray = []
    addIcon.onclick = function () {
      let randomWord
     projectArray = ["inbox", "The Odin Project"]
        if (input.value != null){
          randomWord = input.value 
          projectArray.unshift(randomWord)
          //for (let i = 0; i < projectArray.length; i++ ){
            const projectOpt3 = document.createElement("option")
            projectOpt3.textContent = projectArray[0]
            projectInput.appendChild(projectOpt3)
          //}
        } else return
    }
    
   


    //const projectOpt1 = document.createElement("option")
    //const projectOpt2 = document.createElement("option")
    //const projectOpt3 = document.createElement("option")
    projectInput.style.display = "block"
    projectInput.setAttribute("id", "project")

   //projectOpt1.textContent = projectArray[1] 
   //projectOpt2.textContent = projectArray[0] 

    priorityAndProjectDiv.appendChild(projectDiv)
    projectDiv.appendChild(projectLabel)
    projectLabel.appendChild(projectSpan)
    projectLabel.appendChild(projectInput)
   // projectInput.appendChild(projectOpt1)
    //projectInput.appendChild(projectOpt2)
    //projectInput.appendChild(projectOpt3)

    projectInput.classList.add("date-input")
    projectDiv.classList.add("project-div")
    

    return infoForm
}

function formButtons() {
  const todoButtonDiv = document.createElement("div")
  const todoSubmitButton = document.createElement("button")
  const todoCancelButton = document.createElement("button")

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


export {todoPopup}