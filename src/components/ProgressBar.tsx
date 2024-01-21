import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 100%;
  background: #eee;
`;

const ClearButton = styled.button`
  color: #b1bacb;
  text-align: right;
  font-feature-settings: "liga" off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
`;

interface Props {
  completedTodos: number;
  totalTodos: number;
  clearCompleted: () => void;
}

const ProgressBarAndClearButton: React.FC<Props> = ({
  completedTodos,
  clearCompleted,
}) => (
  <ProgressBarContainer>
    <ProgressBar>{completedTodos} Tasks completed</ProgressBar>
    <ClearButton onClick={clearCompleted}>Clear Completed</ClearButton>
  </ProgressBarContainer>
);

export default ProgressBarAndClearButton;
