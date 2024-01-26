import styled from "styled-components";
import ProgressBar from "./ProgressBar";

type Props = {
  children: React.ReactNode;
  completedTodos: number;
  totalTodos: number;
  clearCompleted: () => void;
};

const Layout = (props: Props) => {
  const { children, completedTodos, totalTodos, clearCompleted } = props;

  return (
    <Background>
      <Card>
        <Content>{children}</Content>
        <ProgressBar
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          clearCompleted={clearCompleted}
        />
      </Card>
    </Background>
  );
};

export default Layout;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f9ff;
  height: 100vh;
  width: 100vw;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 670px;
  max-width: 1000px;
  max-height: 670px;
  flex-shrink: 0;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  max-width: 610px;
  padding-top: 42px;
`;
