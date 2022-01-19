import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  console.log(edit.id);
  if (edit.id) {
    {
      return <TodoForm onSubmit={submitUpdate} />;
    }
  }

  return todos.map((todo, id) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={id}
      >
        <div key={todo.id} onClick={() => submitUpdate()}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    );
  });
}
export default Todo;
