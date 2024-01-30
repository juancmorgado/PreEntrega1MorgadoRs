import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
    return (
    <ul>
        {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDelete(index)} />
        ))}
    </ul>
    );
};

export default TaskList;