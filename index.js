const input = document.querySelector('#item')
const todoButton = document.querySelector('#add')
const todoList = document.getElementById('todo-list')

document.querySelector("form").addEventListener('submit', addTodo)


function addTodo(event) {
    event.preventDefault()
    const newLi = document.createElement('li')
    const liValue = input.value
    newLi.innerText = liValue
    const delButton = document.createElement('button')
    delButton.innerText = 'x'
    delButton.addEventListener('click', removeTodo)
    newLi.append(delButton)
    todoList.appendChild(newLi)
    input.value = ''
}

function removeTodo(event){
    event.target.parentNode.remove()
}
