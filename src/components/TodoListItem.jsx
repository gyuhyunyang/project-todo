import { useState } from "react";
import styled, { css } from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { MdCheckCircle, MdOutlineCircle, MdBookmarkAdd, MdBookmarkRemove, MdModeEditOutline } from "react-icons/md";

const TodoListItemWrap = styled.div`
  display: flex; 
  background: #3f3264;
  margin: 5px 0;
  padding: 20px;
  align-items: center;

  svg {
    color:#fff;
  }
`;
const BookMark = styled.div`

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

const Edit = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 10px;

`;

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;

  return ( 
    <TodoListItemWrap>
        <BookMark >
          <MdBookmarkAdd />
          {/* <MdBookmarkRemove /> */}
        </BookMark>  

        <Checkbox checked={checked} onClick={() => {onToggle(id); }}>
          {checked ? <MdCheckCircle /> : <MdOutlineCircle /> }
        </Checkbox>

        <Text checked={checked}>
          {text}
        </Text>

        <Edit>
          <MdModeEditOutline />
        </Edit>

        <Remove onClick={() => {onRemove(id);}}>
          <FiTrash2 />
        </Remove>  
    </TodoListItemWrap>
  );
}
export default TodoListItem;

// 완료하기, 삭제하기, 수정하기, 즐겨찾기

