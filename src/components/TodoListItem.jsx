import { useState } from "react";
import styled, { css } from "styled-components";
import { FiCheck, FiTrash2 } from "react-icons/fi";

const TodoListItemWrap = styled.div`
  display: flex; 
  background: #f6f6f6;
  margin: 5px 0;
  padding: 20px 30px;
`;

const Text = styled.div`
  /* ${props => props.checked && 
    css`
      color:#adb5bd;
      text-decoration:line-through;  
    `} */

`;


const Checkbox = styled.div`
  font-size: 20px;
  margin-right: 10px;


`;

const Remove = styled.div`
  font-size: 1.2rem;
  cursor: pointer;

`;

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;


  return ( 
    <TodoListItemWrap>
        <Text checked={checked}>
          {text}
        </Text>

        <Checkbox checked={checked} onClick={() => {onToggle(id); }}>
          <FiCheck /> 
        </Checkbox>
        
        <Remove onClick={() => {onRemove(id);}}>
          <FiTrash2 />
        </Remove>
    </TodoListItemWrap>

  );
}

export default TodoListItem;