import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ITodo } from './../types/data';
import TodoList from './TodoList';

const App: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputFocus = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputFocus.current !== null) {
            inputFocus.current.focus()
        }
    }, [])

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: inputValue,
            completed: false,
        }])
        setInputValue('') //очищаем value после того как добавили что-то
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
    };

    const handleKeyDownChange: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            addTodo()
        }
    }

    const removeTodo = (id: number): void => {

    }

    const toggleTodo = (id: number): void => {

    }

    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    // onChange={event => setInputValue(event.target.value)} //это управляемый инпут
                    onChange={handleChange}
                    onKeyDown={handleKeyDownChange}
                    ref={inputFocus}
                />
                <button
                    onClick={addTodo}
                >Добавить</button>
                <TodoList
                    items={todos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            </div>

        </div>
    )
}

export default App;
