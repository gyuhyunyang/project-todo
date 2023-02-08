import { useState } from "react";
import styled, { css } from "styled-components";
import { FiBookmark, FiCheck, FiTrash2 } from "react-icons/fi";

const TodoListItemWrap = styled.div`
  display: flex; 
  background: #f6f6f6;
  margin: 5px 0;
  padding: 20px 30px;
`;

const Text = styled.div`
  flex: 1;

  ${props => props.checked && 
    css`
      color:#adb5bd;
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

function TodoListItem({ todo, done, onToggle, onRemove }) {
  const { id, text, checked } = todo;
  const [ bookMark, setBookMark] = useState(false);


  return ( 
    <TodoListItemWrap>
{/* 
        <Bookmark>
          


          {bookMarkIcon === true ? (
              <북마크체크표시완료></북마크체크표시완료>
            ) : (
              <북마크체크표시미완료></북마크체크표시미완료>
            )}





        </Bookmark> */}

        <Checkbox checked={checked} onClick={() => {onToggle(id); }}>
          <FiCheck /> 
        </Checkbox>

{/* 
        <Checkbox checked={checked} onClick={() => {onToggle(id); }}>
        {checked ? <FiCheck /> : <FiCheck /> }
      </Checkbox> */}

        <Text checked={checked}>
          {text}
        </Text>

        
        
        <Remove onClick={() => {onRemove(id);}}>
          <FiTrash2 />
        </Remove>



      
    </TodoListItemWrap>






  );
}

export default TodoListItem;

