import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
const [habit, setHabit] = useState('');

const handleChange = (event) => {
    setHabit(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
    addHabit(habit);
    setHabit('');
};

return (
    <form onSubmit={handleSubmit}>
    <input type="text" value={habit} onChange={handleChange} placeholder="Enter a new habit" />
    <button type="submit">Add Habit</button>
    </form>
);
};

export default HabitForm;