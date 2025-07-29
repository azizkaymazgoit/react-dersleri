import { useDispatch, useSelector } from "react-redux";
import css from "./Todo.module.css";
import { addTodo, updateTodo } from "../redux/store";
import { useState } from "react";

const Todo = () => {
  const todoList = useSelector((state) => {
    return state.todos;
  });

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id) => {
    dispatch(updateTodo(id));
  };

  const handleDeleteTodo = (id) => {};

  return (
    <div className={css.todoContainer}>
      <h2>Yapılacaklar Listesi</h2>
      <div className={css.inputGroup}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Bir şeyler yaz..."
          className={css.input}
        />
        <button onClick={handleAddTodo} className={css.addButton}>
          Ekle
        </button>
      </div>

      <ul className={css.todoList}>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={`${css.todo} ${todo.tamamlandi ? css.completed : ""}`}
          >
            <span>{todo.text}</span>
            <div className={css.buttons}>
              <button onClick={() => handleToggleTodo(todo.id)}>
                {todo.tamamlandi ? "Geri Al" : "Tamamla"}
              </button>
              <button
                className={css.silBtn}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
