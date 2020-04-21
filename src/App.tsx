import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./App.scss";
import { TodoProvider } from "./contexts/TodoContext";
function App() {
  return (
    <div className="App">
      <Container className="conatiner" maxWidth="sm">
        <Card>
          <CardContent>
            <h3>Simple TODO App</h3>
            <TodoProvider>
              <TodoForm />
              <TodoList />
            </TodoProvider>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
