import React, { useState } from 'react';
import './App.css';

const App = () => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState('');

    const submit = () => {
        erase();
    }

    const  erase = () => {
        setValue(" ");
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
            </section>
        </section>
    );
};
export default App;
