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
  .todo-text {
    font-size: 13px;
    text-align: center;
    color: #d0d0d0;
    letter-spacing: -1px;
  }
`;

// 투두리스트 상단
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
      <h1 className="todo-title">📝 ToDo List</h1>
      <p className="todo-text">{nmuber > 0 ? '해야 할 일이 ' + nmuber + ' 개 남았습니다.' : '등록된 할일이 없습니다.' }</p>
    </TodoHeadWrap>
  );
}

export default TodoHead;

// 날짜, 남은할일 출력
