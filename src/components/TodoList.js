import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  // console.log(props.todos);
  // console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
