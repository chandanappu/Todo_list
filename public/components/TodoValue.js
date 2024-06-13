import React, { useState } from 'react';
import './todoValue.css';

function TodoValue({ addTask }) {
    const [taskValue, setTaskValue] = useState('');

    const handleClick = () => {
        if (taskValue.trim() !== '') {
            addTask(taskValue);
            setTaskValue(''); // Clear the input field after adding the task
        }
    };

    return (

        <div className='todo-value'>
        <div className='front'>
            
        </div>
        <div className='front1'></div>
        <h1> TODO LIST</h1>
        <div className='input-container'>
            <input
                type='text'
                placeholder='Enter your task'
                value={taskValue}
                onChange={(e) => setTaskValue(e.target.value)}
                className='input'
            />
            <button className='add-btn' onClick={handleClick}>Add</button>
            </div>
        </div>
    );
}

export default TodoValue;
