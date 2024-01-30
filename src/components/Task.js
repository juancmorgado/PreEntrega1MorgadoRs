import React, { useState } from 'react';

const Task = ({ task, onDelete }) => {
const [completed, setCompleted] = useState(false);

const handleToggleComplete = () => {
    setCompleted(!completed);
};

return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {task} 
    <button onClick={onDelete}>Eliminar</button>
    <button onClick={handleToggleComplete}>
        {completed ? 'Marcar Incompleta' : 'Marcar Completa'}
    </button>
    </li>
);
};

export default Task;