import styled from "styled-components";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

const TodoInsertWrap = styled.form`
display:flex;

`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  flex: 1;


`;
const StyledButton = styled.button``;

// 새로운 항목을 입력하고 추가할 수 잇는 컴포넌트
function TodoInsert({onInsert}) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); // value 값 초기화

    // submit 이벤트가 발생시키는 새로고침을 방지
    e.preventDefault();
  };

  return ( 
    <TodoInsertWrap onSubmit={ handleSubmit}>
      <StyledInput type="text" placeholder="Write here!" value={ value } onChange={ handleChange }></StyledInput>
      <StyledButton type="submit"><CiEdit/></StyledButton>  

    </TodoInsertWrap>
  );
}

export default TodoInsert;