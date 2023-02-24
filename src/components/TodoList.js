import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove }) => {
  // console.log(props.todos);
  // console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
