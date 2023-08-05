import React, { useState } from 'react';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';
import Page from '../components/Page';
import { Box, Grid, Typography, Button } from '@mui/material';
import button from '../components/button';
import { ThemeProvider } from '@mui/material/styles';


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
    <Page isProtected={false} pageStyles={{
        backgroundImage: `url(neon-bust.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        }}>

<Box
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
        }}
    >

    <div>
    <h1>Habit Tracker</h1>
    <HabitForm addHabit={addHabit} />
    <HabitList habits={habits} deleteHabit={deleteHabit} />
    <ThemeProvider theme={button}> 
    <Button
    href='/Dashboard'
    variant='contained'
    size='large'
    style={{ marginRight: 250, marginTop: 300 }} 
    > Back to Your Dashboard
    </Button>
    </ThemeProvider>
    </div>
    </Box>
    </Page>

);
};

export default App;