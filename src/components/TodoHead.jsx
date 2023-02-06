import styled from "styled-components";
import { useState } from "react";

const TodoHeadWrap = styled.div`

`;


// 투두리스트 상단(타이틀, 날짜,  해야할일의 갯수 노출)
function TodoHead() {
  
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); 
  const data = today.getDate();
  const week = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday토'];
  const day = week[today.getDay()];
  const hours = today.getHours()
  const minutes = today.getMinutes()



  return ( 
    <TodoHeadWrap>
      <h1>일정관리</h1>

      <div>{year} / {month} / {data}</div>
      <div>{day}</div>
      <div>{hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes}</div>

      <div>해야 할 일이 3개 남았습니다.</div>
    </TodoHeadWrap>
  );
}

export default TodoHead;