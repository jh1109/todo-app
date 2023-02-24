import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // console.log(props.todos);
  // console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
