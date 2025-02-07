import React, { useState } from 'react';
import './To-dopage.css';
import { FaTrash } from 'react-icons/fa'; // Import trash icon from react-icons


const ToDoPage = () => {
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]); // State to store tasks

    // Function to add tasks
    const handleAddTask = () => {
        if (inputText.trim()) {  
            setTasks([...tasks, inputText]); // Add task
            setInputText(""); // Clear input
        }
    };

    // Function to delete a task
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task at index
        setTasks(updatedTasks);
    };

    return (
        <div className='main-container'>
            <input 
                type="text" 
                className='input-box' 
                placeholder='Enter your todo'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()} // Add task on Enter key press
            />
            <button 
                className='add-btn' 
                onClick={handleAddTask} // Add task on button click
            >
                +
            </button>

            {/* Display the list of tasks */}
            <ul className='task-list'>
                {tasks.map((task, index) => (
                    <li key={index} className='task-item'>
                        {task}
                        <FaTrash 
                            className="delete-icon" 
                            onClick={() => handleDeleteTask(index)} // Delete task
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoPage;
