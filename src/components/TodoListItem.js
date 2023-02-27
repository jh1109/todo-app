import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { text, checked, id } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoLIstItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <button type="button" className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
