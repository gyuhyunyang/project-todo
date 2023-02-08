import styled from "styled-components";
import { useState } from "react";

const TodoHeadWrap = styled.div`
  margin-bottom: 50px;


  .todo-title {
    font-size: 30px;
    font-weight:bold;
    text-align: center;
    margin-bottom: 30px;
  }

`;


// 투두리스트 상단(타이틀, 날짜,  해야할일의 갯수 노출)
function TodoHead(props) {
  const { todos } = props;
  console.log(props);
  console.log(todos);


  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); 
  const data = today.getDate();
  const week = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = week[today.getDay()];
  const hours = today.getHours()
  const minutes = today.getMinutes()

  const nmuber = todos.filter(todo => todo.checked === false).length;



  







  return ( 
    <TodoHeadWrap>
      <div>{year} / {month < 10 ? "0" + month : month} / {data < 10 ? "0" + data : data}</div>
      <div>{day}</div>
      <div className="todo-title">📝 ToDo List</div>
      <p>해야 할 일이 {nmuber}개 남았습니다.</p> 
{/* 

  {nmuber} < 0 ? '해야 할 일이' + {nmuber} + '개 남았습니다.' : '해야 할 일이 없습니다.' */}
    </TodoHeadWrap>
  );
}

export default TodoHead;
