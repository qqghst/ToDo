import React from 'react';
import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo : (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, completed, removeTodo, toggleTodo } = props;

    return (
        <div>
            <input type="checkbox" checked={completed} />
            {title}
            <button>x</button>
        </div>
    )
}

export default TodoItem