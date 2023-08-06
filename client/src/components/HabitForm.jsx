import React, { useState } from 'react';
import {Button} from '@mui/material';


const styles = {
input:{
    fontSize: '20px'
}
}

const {input} = styles;

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
    <input style= {input} type="text" value={habit} onChange={handleChange} placeholder="Enter a new habit" />

    <Button type="submit">Add Habit
    </Button>
    </form>

);
};

export default HabitForm;