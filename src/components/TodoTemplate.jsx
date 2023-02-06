import { Children } from "react";
import styled from "styled-components";




const TodoTemplateWrap = styled.div`

`;

// 화면을 가운데 정렬하고, children으로 내부 자식 엘리먼트들을 props로 받아와서 렌더링
function TodoTemplate(props) {
   const { children } = props;
   
   return ( 
      <TodoTemplateWrap>
         <div className="content">{children}</div>
      </TodoTemplateWrap>
   );
}

export default TodoTemplate;

