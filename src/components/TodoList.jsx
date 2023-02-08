import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrap = styled.div`

`;

const ClearAll = styled.div`
  width: 100px;
  margin: 0 auto;
  cursor: pointer;
`;

function TodoList({todos, onRemove, onToggle, onClearAll}) {
  return(
    <TodoListWrap>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}

      <ClearAll onClick={() => {onClearAll();} }>
        Clear All
      </ClearAll>





    
      
    </TodoListWrap>
  );
}

export default TodoList;