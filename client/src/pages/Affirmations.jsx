import * as React from 'react';
import { Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { useTheme } from '@mui/material/styles';
import Page from '../components/Page';
import button from '../components/button';
import { ThemeProvider } from '@mui/material/styles';

// import { ThemeProvider } from '@mui/material/styles';

const headContent = (
    <>
        <title>Affirmations</title>
        <meta name="description" content="Welcome! Log in or Sign Up to Get Started." />
    </>
    );

    export default function Affirmations() {
        return (
            <Page isProtected={false} headContent={headContent} pageStyles={{
            backgroundImage: `url(/model-affirmations.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>
    <ThemeProvider theme={button}> 
    <Button
    href='/Dashboard'
    variant='contained'
    size='large'
    style={{ marginRight: 0, marginTop: 300 }} 
    > Back to Your Dashboard
    </Button>
    </ThemeProvider>
    </Page>
);
}