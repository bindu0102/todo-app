let array = []
function executetask() {
    let input = document.getElementById("input").value
    array.push(input)
    console.log(array)
    let itemscontainer = document.getElementById("itemscontainer")


    let todoListItems = document.createElement("div")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    let para = document.createElement("p")
    para.innerHTML = input
    todoListItems.classList.add("todo_flex")
    checkbox.classList.add("box")


    todoListItems.appendChild(checkbox)
    todoListItems.appendChild(para)
    itemscontainer.appendChild(todoListItems)

    document.getElementById("input").value = ""

}
