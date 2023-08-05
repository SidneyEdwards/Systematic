import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { useTheme } from '@mui/material/styles';
import { colors } from '../components/theme';
import button from '../components/button';
import Page from '../components/Page';
import { ThemeProvider } from '@mui/material/styles';


const headContent = (
<>
    <title>Affirmations</title>
    <meta name="description" content="Welcome! Log in or Sign Up to Get Started." />
</>
);


export default function LogInAndSignUp() {
return (
    <Page isProtected={false} headContent={headContent} pageStyles={{
    backgroundImage: `url(/apartmentNYC.jpg)`,
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
        }}
    >

    <Grid>
            <Typography variant='h5' style={{ color: colors.white }}>
            </Typography>
            <ThemeProvider theme={button}> 
            <Button
                href='/Login'
                variant='contained'
                style={{ marginRight: '55px', marginTop: 300 }} 
            > Login
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={button}> 
            <Button
                href='/SignUp'
                variant='contained'
                style={{ marginRight: 250, marginTop: 300 }} 
            > Sign-Up
            </Button>
            </ThemeProvider>
    </Grid>
    </Box>
    </Page>
);
}
