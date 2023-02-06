import styled from "styled-components";

const TodoListItemWrap = styled.div`

`;

function TodoListItem({ todo }) {
  const { id, text, checked } = todo;

  return ( 
    <TodoListItemWrap>
      {text}

    </TodoListItemWrap>

  );
}

export default TodoListItem;