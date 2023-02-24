import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoLIstItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">"리액트를 다루는 기술" 1회 완독</div>
      </div>
      <button className="remove">
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default TodoListItem;
