import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrap = styled.div`

`;

function TodoList({todos}) {
  return(
    <TodoListWrap>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
      
    </TodoListWrap>
  );
}

export default TodoList;