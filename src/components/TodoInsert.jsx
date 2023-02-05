import styled from "styled-components";
import { useState } from "react";

const TodoInsertWrap = styled.div`

`;

function TodoInsert(onInsert) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    onInsert(value);

  };

  
  return ( 
    <TodoInsertWrap>
      <input type="text" placeholder="Write here!" value={ value } onChange={ handleChange }></input>
      <button type="button">추가하기</button>

  

    </TodoInsertWrap>
   );
}

export default TodoInsert;