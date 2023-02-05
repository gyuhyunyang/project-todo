import styled from "styled-components";
import { useState } from "react";

const TodoHeadWrap = styled.div`

`;

// 투두리스트 상단(오늘 날짜와 해야할일의 갯수 표시)
function TodoHead() {

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); 
  const data = today.getDate();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const day = week[today.getDay()];


  return ( 
    <TodoHeadWrap>
      <h1>일정관리</h1>
      <h2>{year}년 {month}월 {data}일 {day}요일</h2>
      <p>해야 할 일이 3개 남았습니다.</p>
    </TodoHeadWrap>
  );
}

export default TodoHead;