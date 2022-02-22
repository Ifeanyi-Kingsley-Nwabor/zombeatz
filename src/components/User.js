import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { listTodos } from "../graphql/queries";
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "../graphql/mutations";
import Links from "./Links";
import Carousel from "./Carousel";
import Slider from "./Slider";

const initialFormState = { name: "", description: "" };
const User = () => {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchTodos();
  }

  async function fetchTodos() {
    const apiData = await API.graphql({ query: listTodos });
    const todosFromAPI = apiData.data.listTodos.items;
    await Promise.all(
      todosFromAPI.map(async (todo) => {
        if (todo.image) {
          const image = await Storage.get(todo.image);
          todo.image = image;
        }
        return todo;
      })
    );
    setTodos(apiData.data.listTodos.items);
  }

  async function createTodo() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createTodoMutation,
      variables: { input: formData },
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setTodos([...todos, formData]);
    setFormData(initialFormState);
  }

  async function deleteTodo({ id }) {
    const newTodosArray = todos.filter((todo) => todo.id !== id);
    setTodos(newTodosArray);
    await API.graphql({
      query: deleteTodoMutation,
      variables: { input: { id } },
    });
  }
  return (
    <div className="container">
      <div className="user_page">
        <Slider />
        <Authenticator>
          {({ signOut, user }) => (
            <div className="row">
              <div className="col s12 l8 ">
                <h1>Welcome {user.username}</h1>
              </div>
              <div className=" signout col s12 l4">
                <button onClick={signOut}>Sign out</button>
              </div>
            </div>
          )}
        </Authenticator>
        <hr />
        <div className="container">
          <div className="row content">
            <div className="col s12">
              <div className="row">
                <div className="card-panel column">
                  <input type="file" onChange={onChange} />
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Todo Title"
                    value={formData.name}
                  />

                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Todo description"
                    value={formData.description}
                  />
                  <button style={{ marginTop: 30 }} onClick={createTodo}>
                    New Todo
                  </button>
                </div>
              </div>
              <div className="row ">
                <div
                  todos={todos}
                  className=" my_todos column"
                  style={{ marginBottom: 20 }}
                >
                  {todos.map((todo) => (
                    <div
                      className="card-panel hoverable col s12 m6 l3"
                      key={todo.id || todo.name}
                    >
                      <p>
                        <b>{todo.name}</b>
                      </p>
                      <p className="todo_text">{todo.description}</p>
                      {todo.image && (
                        <img
                          src={todo.image}
                          style={{ width: 100 }}
                          alt="todo"
                        />
                      )}
                      <button
                        style={{ marginBottom: 10 }}
                        onClick={() => deleteTodo(todo)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <Carousel />
        <hr />
        <Links />
      </div>
    </div>
  );
};

export default User;
