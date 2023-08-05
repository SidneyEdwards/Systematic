import * as React from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { useTheme } from '@mui/material/styles';
import { colors } from '../components/theme';
import Page from '../components/Page';

// import { ThemeProvider } from '@mui/material/styles';

const headContent = (
    <>
        <title>Affirmations</title>
        <meta name="description" content="Welcome! Log in or Sign Up to Get Started." />
    </>
    );

    export default function ManageHabits() {
        return (
            <Page isProtected={false} headContent={headContent} pageStyles={{
            backgroundImage: `url(/apartmentNYC.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>
    </Page>
);
}