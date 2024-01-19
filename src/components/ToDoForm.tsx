import { useState } from "react";
import styled from "styled-components";

type Props = {
  onSubmit: (name: string) => void;
};

const ToDoForm = (props: Props) => {
  const [name, setName] = useState("");

  const submitForm = () => {
    props.onSubmit(name);
    setName("");
  };

  return (
    <Container>
      <Input
        value={name}
        placeholder="Add new list item"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={submitForm}>Add</Button>
    </Container>
  );
};

export default ToDoForm;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  width: 600px;
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  flex-shrink: 0;
  fill: var(--FFFFFF, #fff);
  stroke-width: 1px;
  stroke: #eee;
  border-color: #eee;
  border-radius: 4px;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  padding-left: 10px;

  &::placeholder {
    color: lightgrey;
  }
`;

const Button = styled.button`
  display: inline-flex;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid var(--Mavi, #2d70fd);
  background: #2d70fd;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
