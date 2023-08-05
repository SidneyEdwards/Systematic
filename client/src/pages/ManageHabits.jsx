import * as React from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { useTheme } from '@mui/material/styles';
// import { colors } from '../components/theme';
import Page from '../components/Page';

// import { ThemeProvider } from '@mui/material/styles';



    export default function ManageHabits() {
        return (
            <Page isProtected={false} pageStyles={{
            backgroundImage: `url(/neon-bust.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>
                    <div className="wrapper">
    <h1>Create a New Habit</h1>
    <form>
    <fieldset>
        <label>
        <p>Habit</p>
        <input name="name" />
        </label>
    </fieldset>
    <button type="submit">Submit</button>
    </form>
    </div>

    <div>Current Habits</div>

    </Page>
);
}