import "./style.css"
import  {documentedProjects} from "./projects"
import  {buttonId, majorButton, submitButton, contentDiv, modalTwo, hiddenInput} from "./projects"
import  {bodyDiv} from "./home"
import del from "./delete-off.png"

// code for calling and displaying all data save on the local storage
const data = JSON.parse(localStorage.getItem("button-content"))
const header = document.createElement("p")

function setStyles() {
    
    for (let i = 0; i < data.length; i++ ){

    const savedListItem = document.createElement("li")
    savedListItem.setAttribute('id', "new-item")
    const savedDiv = document.createElement("div")
    const savedProject = document.createElement("button") 
    savedProject.classList.add("project-list")
    savedProject.setAttribute('id', buttonId)
    savedProject.textContent = data[i]
    savedProject.addEventListener("click", (e) => {
        bodyDiv.textContent = ""
        contentDiv.textContent = ""
        const centralDiv = document.createElement("div")
        header.style.fontSize = "30px"
        header.style.color = "#334155"
        const buttonGroup = document.createElement("div")

        hiddenInput.setAttribute("value", e.target.textContent)
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
      })  
      savedProject.addEventListener("click", recallTaskFromStorage)
    savedListItem.appendChild(savedDiv)
    savedDiv.appendChild(savedProject)
    documentedProjects.appendChild(savedListItem)
    }
}

//code that checks if selected projects have tasks saved in the local storage
function recallTaskFromStorage (e){
    //
    if (localStorage.getItem(e.target.textContent)){
        //contentDiv.classList.add("body-header")
        let listKey = e.target.textContent
        let allTasks = JSON.parse(localStorage.getItem(listKey))
        for (let i = 0; i < allTasks.length; i++){
            let newSentence = document.createElement("p")
            //newSentence.style.display = "inline"
            let newTodoDiv = document.createElement("div")
            newTodoDiv.classList.add("items")
            newTodoDiv.style.flexDirection = "row"
            let deleteIcon = document.createElement("img")
            deleteIcon.src = del
             deleteIcon.style.backgroundColor = "red"

              newSentence.textContent = allTasks[i]
              newTodoDiv.appendChild(newSentence)
              newTodoDiv.appendChild(deleteIcon)    
              contentDiv.appendChild(newTodoDiv)

              deleteIcon.onclick = function (){
                newTodoDiv.style.display = "none"
                 let recoverArray = JSON.parse(localStorage.getItem(listKey))
                 let getIndexOfDeletedItem = recoverArray.indexOf(newSentence.textContent)
          
                 if (getIndexOfDeletedItem != -1) recoverArray.splice(getIndexOfDeletedItem, 1)
                localStorage.setItem(listKey, JSON.stringify(recoverArray))
                }
          }
               
   }
}

export {setStyles, data}