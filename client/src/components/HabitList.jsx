import React from 'react';
import { Button } from '@mui/material';


const styles = {
    ul:{
        fontSize: '25px'
    },
    li:{
        fontSize: '25px'
        
    }
}

const HabitList = ({ habits, deleteHabit }) => {
const handleDelete = (index) => {
    deleteHabit(index);
};
const {ul, li} = styles;



return (
    <ul style= {ul}>
    {habits.map((habit, index) => (
        <li style= {li} key={index}>
        {habit}
        <Button onClick={() => handleDelete(index)}>Delete</Button>
        </li>
    ))}
    </ul>
)
}


export default HabitList;