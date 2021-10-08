import React from "react";
import { connect } from "react-redux";
import Todo from "../container/Todo";

const TodoList = ({ todoList, filter }) => {
  return (
    <div>
      <h2>Statut du filtre : {filter ? "OUI" : "NON"}</h2>
      <ul>
        {filter
          ? todoList
              .filter((todo) => !todo.resolved)
              .map((todo) => (
                <Todo
                  id={todo.id}
                  description={todo.description}
                  resolved={todo.resolved}
                />
              ))
          : todoList.map((todo) => (
              <Todo
                id={todo.id}
                description={todo.description}
                resolved={todo.resolved}
              />
            ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todo,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(TodoList);
