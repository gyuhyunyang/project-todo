import styled from "styled-components";
import TodoHead from "./TodoHead";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";


// 투두리스트의 레이아웃설정 컴포넌트

const TodoTemplateWrap = styled.div`


`;

function TodoTemplate() {
  
  return ( 
    <TodoTemplateWrap>
       <TodoHead />
       <TodoList />
       <TodoInsert />


    </TodoTemplateWrap>
   );
}

export default TodoTemplate;

