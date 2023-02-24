import { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '"리액트를 다루는 기술" 1회 완독', checked: false },
    { id: 2, text: '생활코딩-React 2022 개정판 보기', checked: true },
    { id: 3, text: '[과제] 제품 구매 카드 구현하기', checked: false },
    { id: 4, text: '리액트로 아코디언 구현해보기', checked: false },
    { id: 5, text: '유데미 리액트 강의 보기', checked: false },
    { id: 6, text: 'react 공식문서 튜토리얼 따라해보기', checked: false },
    { id: 7, text: '생활코딩-seomal map에서 react 강의 보기', checked: false },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
