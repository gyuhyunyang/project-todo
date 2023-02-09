import { useState } from "react";
import styled, { css } from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { MdCheckCircle, MdOutlineCircle, MdBookmarkAdd } from "react-icons/md";

const TodoListItemWrap = styled.div`
  display: flex; 
  background: #3f3264;
  margin: 5px 0;
  padding: 20px 30px;

  svg {
    color:#fff;
  }
`;
const Text = styled.div`
  flex: 1;
  align-items: center;
  color:#fff;

  ${props => props.checked && 
    css`
      color:#fff;
      text-decoration:line-through;  
    `}
`;
const Checkbox = styled.div`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;
const Remove = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;

  return ( 
    <TodoListItemWrap>
        {/* <BookMark >
          <MdBookmarkAdd />
        </BookMark>   */}

        <Checkbox checked={checked} onClick={() => {onToggle(id); }}>
          {checked ? <MdCheckCircle /> : <MdOutlineCircle /> }
        </Checkbox>

        <Text checked={checked}>
          {text}
        </Text>

        {/* <Edit onClick={() => {onEdit(id);}}>
          <MdBorderColor />
        </Edit> */}

        <Remove onClick={() => {onRemove(id);}}>
          <FiTrash2 />
        </Remove>  
    </TodoListItemWrap>
  );
}
export default TodoListItem;

// 완료하기, 삭제하기, 수정하기, 즐겨찾기

