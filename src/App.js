import React, { useState } from 'react';
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import TodoHead from './components/TodoHead';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  ${reset} // reset css 적용

  body{
    background: #e7e7e7;
  }
`;
function App() {


  return (
    <>
      <GlobalStyle />
      <TodoTemplate />
    </>
  );
}

export default App;