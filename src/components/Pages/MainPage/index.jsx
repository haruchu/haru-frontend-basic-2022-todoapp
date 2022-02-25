import React from 'react'
import styled from "styled-components";
import Title from '../../Atoms/Title'
import TodoCard from '../../Organisms/TodoCard'
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledPageWrapper>
      <Title/>
      <StyledTodoWrapper>
        <TodoCard/>
      </StyledTodoWrapper>
    </StyledPageWrapper>
  );
}

export default MainPage;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;

const StyledTodoWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 500px;
  }
`