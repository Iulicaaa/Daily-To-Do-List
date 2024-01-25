import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  padding-bottom: 20px;
  border-top: 1px solid lightgrey;
  padding: 5px;
  margin-bottom: 20px;
`;

const ProgressBarStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: left;
  height: 20px;
  width: 80%;
  background: transparent;
  color: #b1bacb;
`;

const ClearButton = styled.button`
  color: #b1bacb;
  display: flex;
  text-align: center;
  align-items: left;
  font-feature-settings: "liga" off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
  background-color: transparent;
  border: none;
`;

interface Props {
  completedTodos: number;
  totalTodos: number;
  clearCompleted: () => void;
}

const ProgressBar: React.FC<Props> = ({
  completedTodos,

  clearCompleted,
}) => (
  <ProgressBarContainer>
    <ProgressBarStyled>{completedTodos} Tasks completed</ProgressBarStyled>
    <ClearButton onClick={clearCompleted}>Clear All</ClearButton>
  </ProgressBarContainer>
);

export default ProgressBar;
