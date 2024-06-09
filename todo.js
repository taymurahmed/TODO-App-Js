let todoList = [
  {
    item:'buy milk',
    dueDate: '05-10-2024'
  }, 
  {
    item: 'go to college', 
    dueDate: '06-10-2024'
  }
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo_input");
  let inputDate = document.querySelector("#todo_date");
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  todoList.push({
    item: todoItem, 
    dueDate: todoDate
  });
  inputElement.value = "";
  inputDate.value = "";
  displayItems();
}

function displayItems() {
  let containerElements = document.querySelector(".todo_container");

  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;

    //destructure
    let {item, dueDate} = todoList[i];
    newHtml += `<span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn_delete" onclick = "todoList.splice(${i}, 1);
                displayItems();">Delete</Button>`;
  }
  containerElements.innerHTML = newHtml;
}
