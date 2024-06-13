import React, { useState } from 'react';
import TodoValue from './TodoValue';
import './Todolist.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [editedTask, setEditedTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addTaskToArray = (task) => {
        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = task;
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks([...tasks, task]);
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    };

    const editTask = (index, task) => {
        setEditedTask(task);
        setEditIndex(index);
    };

    return (
        <div className='todo-list'>
            <TodoValue addTask={addTaskToArray} />
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <input
                                type='text'
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                                className='task-input'
                            />
                        ) : (
                            <span className='task-text'>{task}</span>
                        )}
                        <button
                            onClick={() => editTask(index, task)}
                            className={`btn edit-btn ${editIndex === index && 'hidden'}`}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => addTaskToArray(editedTask)}
                            className={`btn save-btn ${editIndex !== index && 'hidden'}`}
                        >
                            Save
                        </button>
                        <button onClick={() => deleteTask(index)} className='btn delete-btn'>
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;
