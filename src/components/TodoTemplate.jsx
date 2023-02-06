import { Children, useRef, useState } from "react";
import styled from "styled-components";
import TodoHead from "./TodoHead";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";




const TodoTemplateWrap = styled.div`
width: 600px;
margin: 1rem auto;
background: #fff;
border-radius: 10px;
padding: 1rem;

`;

// 화면을 가운데 정렬하고, children으로 내부 자식 엘리먼트들을 props로 받아와서 렌더링
function TodoTemplate(props) { 
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

    const nextId = useRef(0);

    const handleSubmit = (text) => {
      // setTodos([...todos, text]);
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId를 1씩 더하기
    };
   
   return ( 
      <TodoTemplateWrap>
         <TodoHead />
         <TodoInsert onInsert={handleSubmit}/>
         <TodoList todos={todos} />
         
      </TodoTemplateWrap>
   );
}

export default TodoTemplate;

