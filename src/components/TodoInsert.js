import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value], // value 혹은 onInsert가 바뀔때
  );

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          name="todoContent"
          value={value}
          placeholder="할 일을 입력하세요."
          onChange={onChange}
        ></input>
        <button name="btnTodoInsert" type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
