import React from 'react';
import style from './TodoList.css';

const Todo = ({item, removeItem}) => {
    return (
        <li onClick={ () => removeItem(item.id) }>
            { item.text }
        </li>
    );
}

const TodoList = ({ tasks, remove }) => {
    const todoList = tasks.map(task => {
        return <Todo item={ task } removeItem={ remove } key={ task.id } />
    });

    return (
        <ol>
            { todoList }
        </ol>
    );
};

export default TodoList