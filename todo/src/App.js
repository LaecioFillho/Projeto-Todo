import React, { useState } from 'react';
import { MdAutoDelete } from "react-icons/md";
import './App.css';

const App = () => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    
    const [todos, setTodos ] = useState([]);
    const [value, setValue] = useState("");
    let permission = false;
    

    const submit = () => {
        setTodos([
            ...todos,
            {
                id: new Date().getTime(), 
                title: value, 
                checked: false,
            },
        ]);
        erase();
    }

    function onPermission(todo, permission){

        if(permission == true){
            onDelete(todo);
        }
    }

    function onDelete(todo){
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    const erase = () => {
        setValue("");
    }

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            submit();
            erase();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    }

    const onToggle = (todo) => {
        setTodos(
            todos.map((obj) => (obj.id === todo.id ? {...obj, checked: !todo.checked} : obj))
        );
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
                        <span className={["todo", todo.checked ? "checked" : ""].join(" ")}
                            onClick={() => onToggle(todo)}
                            onKeyPress={() => onToggle(todo)}
                            role="button"
                            tabIndex={0}>
                            {todo.title}
                        </span>
                        <button 
                            className="remove"
                            onClick={() => onPermission(todo, permission = true)}>
                            <MdAutoDelete size={28}/>
                        </button>
                        </li>  
                    ))}
                </ul>
                <div className='permission'>
                    <p>Você deseja excluir?</p>
                    <button 
                    className='onPermission'
                    onClick={() => onPermission(permission = true)}>Sim</button>
                    <button 
                    className='onPermission'
                    onClick={() => onPermission(permission = false)}>Não</button>
                </div>
            </section>
        </section>
    );
};
export default App;
