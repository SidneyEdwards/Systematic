import React, { useState } from 'react';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';
import Page from '../components/Page';

import button from '../components/button';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Grid, Box, Button, Card } from '@mui/material';

const App = () => {
const [habits, setHabits] = useState([]);

const addHabit = (habit) => {
    setHabits([...habits, habit]);
};

const deleteHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
};

const StyledCard = styled(Card)({
    padding: '20px',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
    borderRadius: '15px',
    backgroundColor: 'rgba(0,0,0,.4)',
    color: 'white'

});

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    minHeight: '100vh',
});

return (
    <Page isProtected={false} pageStyles={{
        backgroundImage: `url(neon-bust.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        }}>
<Container>
<Grid>
<Box
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'left',
        justifyContent: 'center',
        padding: 20,

        }}
    >

<StyledCard>
    <h1>Habit Tracker</h1>
    <HabitForm addHabit={addHabit} />
    <HabitList habits={habits} deleteHabit={deleteHabit} />
    <ThemeProvider theme={button}> 
    <Button
    href='/Dashboard'
    variant='contained'
    size='medium'
    style={{ marginRight: 250, marginTop: 300 }} 

    > Back to Your Dashboard
    </Button>
    </ThemeProvider>
    </StyledCard>
    </Box>
    </Grid>
    </Container>
    </Page>

);
};

export default App;