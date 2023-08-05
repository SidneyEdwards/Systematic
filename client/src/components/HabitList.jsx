import React from 'react';

const HabitList = ({ habits, deleteHabit }) => {
const handleDelete = (index) => {
    deleteHabit(index);
};

return (
    <ul>
    {habits.map((habit, index) => (
        <li key={index}>
        {habit}
        <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
    ))}
    </ul>
);
};

export default HabitList;