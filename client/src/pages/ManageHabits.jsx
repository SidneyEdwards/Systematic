import React, { useState } from 'react';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';

const App = () => {
const [habits, setHabits] = useState([]);

const addHabit = (habit) => {
    setHabits([...habits, habit]);
};

const deleteHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
};

return (
    <div>
    <h1>Habit Tracker</h1>
    <HabitForm addHabit={addHabit} />
    <HabitList habits={habits} deleteHabit={deleteHabit} />
    </div>
);
};

export default App;