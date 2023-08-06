import * as React from 'react';
import { styled } from '@mui/system';
import Page from '../components/Page';
import button from '../components/button';
import { ThemeProvider } from '@mui/material/styles';
import Posts from '../components/Affirmations/AffirmationsPost';
import { Grid, Box, Button, Card } from '@mui/material';


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

    export default function Affirmations() {
        return (
<Page isProtected={false} pageStyles={{
    backgroundImage: `url(/model-affirmations.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
            }}>

<Container>
    <Grid>
        <Box>
            <StyledCard>
                    <Posts />

    <ThemeProvider theme={button}> 
    <Button
    href='/Dashboard'
    variant='contained'
    size='large'
    style={{ marginRight: 0, marginTop: 300 }} 
    > Back to Your Dashboard
    </Button>
    </ThemeProvider>
                </StyledCard>
            </Box>
        </Grid>
</Container>
</Page>
);
}







