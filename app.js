import TodoHeader from './components/TodoHeader.js';
import TodoColumn from './components/TodoColumn.js';
import Todo from './components/Todo.js';
import TodoCount from './components/TodoCount.js';

const app = () => {
  new TodoColumn('todo');
  new TodoColumn('ing');
  new TodoColumn('complete');

  new TodoHeader();

  // 하나의 객체
  const todos = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];

  if (todos !== null) {
    localStorage.setItem('todos', JSON.stringify(todos));
    dataLoad(todos);
  }
};

const dataLoad = todos => {
  // todos 배열에서 status(ing,todo,complete)를 각각 필터링하여 그에 맞는 배열에 넣는다.

  const ingArr = todos.filter(todo => todo.status === 'ing');
  const todoArr = todos.filter(todo => todo.status === 'todo');
  const completeArr = todos.filter(todo => todo.status === 'complete');

  ingArr.forEach(todo => {
    const newTodo = new Todo(todo);
    document.querySelector(`.ing`).insertAdjacentHTML('afterend', newTodo.render());
  });

  todoArr.forEach(todo => {
    const newTodo = new Todo(todo);
    document.querySelector(`.todo`).insertAdjacentHTML('afterend', newTodo.render());
  });

  completeArr.forEach(todo => {
    const newTodo = new Todo(todo);
    document.querySelector(`.complete`).insertAdjacentHTML('afterend', newTodo.render());
  });

  new TodoCount(ingArr.length);
  new TodoCount(todoArr.length);
  new TodoCount(completeArr.length);

  // todos.forEach(e => {
  //   const newTodo = new Todo(e);
  //   if (e.status == 'ing') {
  //     document.querySelector(`.ing`).insertAdjacentHTML('afterend', newTodo.render());
  //   } else if (e.status == 'todo') {
  //     document.querySelector(`.todo`).insertAdjacentHTML('afterend', newTodo.render());
  //   } else if (e.status == 'complete') {
  //     document.querySelector(`.complete`).insertAdjacentHTML('afterend', newTodo.render());
  //   }
  // });
};

app();
