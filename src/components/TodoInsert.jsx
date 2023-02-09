import styled from "styled-components";
import { useState } from "react";

const TodoInsertWrap = styled.form`
  display: flex;
  border: 1px solid #fff;
  padding: 10px;
`;
const StyledInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
  background:#3f256e;
  padding: 10px;
  color:#fff;
`;
const StyledButton = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -1px;
  padding: 10px;
  font-weight: bold;
  line-height: 1.3;
  cursor: pointer;
`;

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
      <StyledInput type="text" placeholder="할일을 입력해주세요." value={ value } onChange={ handleChange }></StyledInput>
      <StyledButton type="submit">추가하기</StyledButton>  
    </TodoInsertWrap>
  );
}

export default TodoInsert;