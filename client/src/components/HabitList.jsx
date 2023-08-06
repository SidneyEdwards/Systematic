import React from 'react';
import { Button } from '@mui/material';


const styles = {
    ul:{
        fontSize: '25px'
    },
    li:{
        fontSize: '25px'
        
    },
    // button:{
    //     backgroundColor: '#da2bb1',
    //     color: 'white',
    //     margin: '5px',
    //     padding: '5px 5px',
    //     textAlign: 'center',
    //     fontSize: '16px',
    // },
}

const HabitList = ({ habits, deleteHabit }) => {
const handleDelete = (index) => {
    deleteHabit(index);
};
const {ul, li, } = styles;
//{button} for API call to add habit to the google calendar


return (
    <ul style= {ul}>
    {habits.map((habit, index) => (
        <li style= {li} key={index}>
        {habit}
        <Button onClick={() => handleDelete(index)}>Delete</Button>
        {/* <button style={button} onClick={() => handleChange(index)}>Add Reminder to Google Calendar</button> */}
        </li>
    ))}
    </ul>
)
}


export default HabitList;