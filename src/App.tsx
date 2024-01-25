import "normalize.css";
import Layout from "./components/Layout";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import styled from "styled-components";
import ProgressBar from "./components/ProgressBar";

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
      {sortedTodos.map((todo) => (
        <Container key={todo.id}>
          <button
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              backgroundColor: todo.complete ? "green" : "gray",
            }}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.complete && <CheckMarkIcon />}
          </button>
          <p
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.name}
          </p>
        </Container>
      ))}

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
`;

const CheckMarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24zm10.293-37.707l-14 14c-.391.391-1.023.391-1.414 0l-7-7c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0L22 24.586l12.879-12.879c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414z" />
  </svg>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
