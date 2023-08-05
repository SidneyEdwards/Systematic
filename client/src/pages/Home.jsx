import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
// import { useTheme } from '@mui/material/styles';
import { colors } from '../components/theme';
import button from '../components/button';
import Page from '../components/Page';
import { ThemeProvider } from '@mui/material/styles';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
});

export default function Home(){

  return (
    <Page title={'Home Page'} class-name= 'Home-Page' isProtected={false} pageStyles={{
      backgroundImage: `url(/sign2.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    >
            <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },

          alignItems: 'right',
          justifyContent: 'right',
        }}
      >
    <Container>
      <Grid>
            <Typography variant='h5' style={{ color: colors.white }}>
              <h2></h2>
            </Typography>
            <ThemeProvider theme={button}> 
              <Button
                href='/LogInAndSignUp'
                variant='contained'
                style={{ marginRight: '40px', marginTop: 0 }} 
              > Start Here
              </Button>
            </ThemeProvider>
      </Grid>
    </Container>
    </Box>
</Page>
  );
  };



