import "./style.css";

let modal
let plusBtn
let newProject
const documentedProjects = document.createElement("ul")
documentedProjects.classList.add("all-projects")

function createProjectGroup() {
    const group = document.createElement("div")
    const projectDiv = document.createElement("div")
    
    const btnDiv = document.createElement("div")
    const firstProject = document.createElement("li")
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

const input = document.createElement("input")
function projectForm() {
    modal = document.createElement("div")
    const modalContent = document.createElement("div")
    const span = document.createElement("span")
    const modalContainer = document.createElement("div")

    const form  = document.createElement("form")
    const formDiv = document.createElement("div")
    const label = document.createElement("label")
    const formSpan = document.createElement("span")
    
    const btnDiv = document.createElement("div")
    const submitButton = document.createElement("button")
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
    submitButton.addEventListener("click", appendProject)
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
const newListItem = document.createElement("li")
newProject = document.createElement("button")    
newProject.textContent = input.value

const newDiv = document.createElement("div")
newListItem.appendChild(newDiv)
newDiv.appendChild(newProject)
newProject.classList.add("project-list")
documentedProjects.appendChild(newListItem)

//return projectArray
}


//projectArray.push(newProject.textContent)

function cancelModal() {
    modal.style.display = "none";
}

export {createProjectGroup, projectForm, input}

