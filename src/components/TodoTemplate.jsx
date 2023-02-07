import { Children, useCallback, useRef, useState } from "react";
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
   
   const handleSubmit = useCallback((text) => {
      const todo = {
         id: nextId.current,
         text,
         checked: false
      };
   
      setTodos(todos.concat(todo));
   
      nextId.current += 1; 
      
   },[todos]);

   const handleToggle = useCallback((id) => {
      setTodos(todos.map( (todo) => 
         todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ));
   
   }, [todos])

   

   
   const handleRemove = useCallback((id) => {
         setTodos(todos.filter((todo) => todo.id !==id ));    
   }, [todos]);

   return ( 
      <TodoTemplateWrap>
         <TodoHead />
         <TodoInsert onInsert={handleSubmit}/>
         <TodoList todos={todos} onRemove={handleRemove} onToggel={handleToggle} />

         
         
      </TodoTemplateWrap>
   );
}

export default TodoTemplate;

