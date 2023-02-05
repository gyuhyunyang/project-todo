import React, { useState } from 'react';
import TodoHead from './components/TodoHead';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      text: '방 청소',
      checked: true
    },
    {
      id: 2,
      text: '책 읽기',
      checked: true
    },
    {
      id: 3,
      text: '장 보기',
      checked: false
    }
  ]);

  return (
    <>
      <TodoTemplate />
    </>
  );
}

export default App;