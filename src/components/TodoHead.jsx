import styled from "styled-components";
import { useState } from "react";

const TodoHeadWrap = styled.div`

  margin-bottom: 50px;



  .todo-title {
    font-size: 40px;
    font-weight:bold;
    text-align: center;
  }



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
      

      <div>{year} / {month < 10 ? "0" + month : month} / {data < 10 ? "0" + data : data}</div>
      <div>{day}</div>
      <div class="todo-title">TODO LIST</div>
      <p>해야 할 일이 3개 남았습니다.</p>
    </TodoHeadWrap>
  );
}

export default TodoHead;