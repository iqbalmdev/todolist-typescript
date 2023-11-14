import React from "react";
import "./style.css";
import Todo from "./model";
import SingleTodo from "./SingleTodo";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos:Todo[]
  setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<props> = ({ todos, setTodos,completedTodos,setCompletedTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active tasks</span>

        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>
      {/* <div className="todos remove">
        <span className="todos__heading">completed tasks</span>

        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div> */}
    </div>
  );
};

export default TodoList;
