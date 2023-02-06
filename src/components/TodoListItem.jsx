import { useState } from "react";
import styled from "styled-components";

const TodoListItemWrap = styled.div`

`;
const Remove = styled.div`

`;
const Edit = styled.div`

`;

function TodoListItem({ todo }) {
  const { id, text, checked } = todo;


  return ( 
    <TodoListItemWrap>
      <div checked={checked} >{text}</div>
      <Remove></Remove>
      <Edit></Edit>

    </TodoListItemWrap>




  );
}

export default TodoListItem;