import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Background>
      <Card>
        <Content>{props.children}</Content>
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
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 670px;
  flex-shrink: 0;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  padding: 42px 0px;
`;
