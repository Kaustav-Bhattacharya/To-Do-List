let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click', addToDo)
let parentList = document.getElementById('parent-list')


//the first appliction of this todo list would be to add a listt item that is being done below

function addToDo(e) {

    if (parentList.children[0].className == 'emptyMsg') {
        parentList.children[0].remove()
    }

    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentTask = currentInput.value

    let newLi = document.createElement('li')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = ` <h3 class="flex-grow-1"> ${currentTask}</h3> 
    <button class ="btn btn-warning mx-3" onclick="editTask(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeTask(this)">Completed</button>`

    parentList.appendChild(newLi)
}

//when a task is complete it can be removed easily by this function 
function removeTask(currElement) {
    currElement.parentElement.remove()
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement('h3')
        newEmptyMsg.textContent = "Let's get Started add your Tasks"
        newEmptyMsg.classList.add("emptyMsg")
        //try to impliment some styling using bootstrap classes.

        parentList.appendChild(newEmptyMsg)
    }
}

//if required to edit an already present task that can be done by below function
function editTask(currElement) {

    //if editing is done it will be stored as a new task
    if (currElement.textContent == 'Done') {
        currElement.textContent = 'Edit'
        let currTaskName = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3')
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currTaskName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    }
    //if edit button is clicked to edit a task this will work
    else {
        currElement.textContent = 'Done'
        let currTaskName = currElement.previousElementSibling.textContent

        let currInput = document.createElement('input')
        currInput.type = "text"
        currInput.placeholder = "To-Do"
        currInput.className = "form-control"
        currInput.value = currTaskName;
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}
