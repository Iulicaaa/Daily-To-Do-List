import "normalize.css";
import Layout from "./components/Layout";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import styled from "styled-components";
import "./font.css";
// import ProgressBar from "./components/ProgressBar";

type Todo = {
  id: number;
  name: string;
  complete: boolean;
  createdAt: Date;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<number>(0);
  console.log("todos", todos);

  const createTodo = (name: string) => {
    const newTodo = {
      id: Date.now(),
      name: name,
      complete: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return;

    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.complete = !todo.complete;
    setTodos(newTodos);
    setCompletedTodos(newTodos.filter((todo) => todo.complete).length);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
    setCompletedTodos(0);
  };

  const sortedTodos = [...todos].sort((a, b) => {
    // Sort primarily by completion status
    if (a.complete !== b.complete) {
      return a.complete ? 1 : -1;
    }

    // If completion status is the same, sort by creation time
    return a.createdAt < b.createdAt ? 1 : -1;
  });

  return (
    <Layout
      completedTodos={completedTodos}
      totalTodos={todos.length}
      clearCompleted={clearCompleted}
    >
      <Title>Daily To Do List</Title>
      <ToDoForm onSubmit={createTodo} />
      <List>
        {sortedTodos.map((todo) => (
          <Container key={todo.id}>
            <button
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                backgroundColor: todo.complete ? "magenta" : "white",
                border: "1px solid lightgrey",
              }}
              onClick={() => completeTodo(todo.id)}
            >
              {todo.complete && <CheckMarkIcon />}
            </button>
            <p
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
              }}
            >
              {todo.name}
            </p>
          </Container>
        ))}
      </List>
      {/* <ProgressBar
        completedTodos={completedTodos}
        totalTodos={todos.length}
        clearCompleted={clearCompleted}
      /> */}
    </Layout>
  );
}

const Title = styled.h1`
  color: #11175e;
  font-family: Rubik;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
  text-align: left;
  padding-left: 10px;
`;

const CheckMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2.66666 8.66667L5.99999 12L13.3333 4.66667"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto; /* Make it vertically scrollable */
  overflow-x: hidden;
  width: 100%;
  max-width: 590px;
  padding-top: 20px;
`;
