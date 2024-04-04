import React, { useState } from 'react';
import { MdAutoDelete } from "react-icons/md";
import './App.css';

const App = () => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const initialTodos = [
        {id: 1, title: "Estudar React", checked: false},
        {id: 2, title: "Estudar JavaScript", checked: false},
        {id: 3, title: "Estudar TypeScript", checked: true},
        {id: 4, title: "Estudar UI/UX", checked: false},
    ];

    const [todos,  ] = useState(initialTodos);
    const [value, setValue] = useState("");

    const submit = () => {
        erase();
    }

    const erase = () => {
        setValue("");
    }

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            erase();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">Todo</h1>
            </header>
            <section className="main">
                <input
                    className="new-todo"
                    placeholder="Digite sua Lista de tarefa"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}>
                </input>
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id.toString()}>
                        <span className="todo">{todo.title}</span>
                        <button className="remove"><MdAutoDelete size={28}/></button>
                        </li>  
                    ))}
                </ul>
            </section>
        </section>
    );
};
export default App;
