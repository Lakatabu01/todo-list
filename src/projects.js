import "./style.css";

function createProjectGroup() {
    const group = document.createElement("div")
    const projectDiv = document.createElement("div")
    const documentedProjects = document.createElement("ul")
    const btnDiv = document.createElement("div")
    const firstProject = document.createElement("li")
    //const plusIcon = 
    const plusBtn = document.createElement("button")

    plusBtn.style.backgroundColor = "black"
    plusBtn.textContent = "New Project"
    firstProject.textContent = "The Odin Project"

    group.appendChild(projectDiv)
    group.appendChild(btnDiv)
    projectDiv.appendChild(documentedProjects)
    //btnDiv.appendChild(plusIcon)
    btnDiv.appendChild(plusBtn)
    documentedProjects.appendChild(firstProject)

    group.classList.add("group")
    plusBtn.classList.add("add-btn")
    return group
}

export {createProjectGroup}