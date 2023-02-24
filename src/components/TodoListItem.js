import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="TodoLIstItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <button className="remove">
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default TodoListItem;
