import styled from "styled-components";
import { useState } from "react";

const TodoInsertWrap = styled.div`

`;

// 새로운 항목을 입력하고 추가할 수 잇는 컴포넌트
function TodoInsert() {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
 
  return ( 
    <TodoInsertWrap>
      <input type="text" placeholder="Write here!" value={ inputValue } onChange={ handleChange }></input>
      <button type="button">추가하기</button>

  

    </TodoInsertWrap>
   );
}

export default TodoInsert;