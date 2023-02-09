import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrap = styled.div`
`;
const ClearAll = styled.div`
  width: 100px;
  margin: 20px auto 0;
  color:#fff;
  font-size: 12px;
  cursor: pointer;
`;
function TodoList({todos, onRemove, onToggle, onClearAll}) {
  return(
    <TodoListWrap>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
      <ClearAll onClick={() => {onClearAll();} }>
        리스트 비우기
      </ClearAll>
    </TodoListWrap>
  );
}
export default TodoList;