import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrap = styled.div`

`;

const ClearAll = styled.div`
  width: 100px;
  margin: 0 auto;
`;

function TodoList({todos, onRemove, onToggle}) {
  return(
    <TodoListWrap>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}

      <ClearAll>
        <button type="button">Clear All</button>
      </ClearAll>



      
    </TodoListWrap>
  );
}

export default TodoList;