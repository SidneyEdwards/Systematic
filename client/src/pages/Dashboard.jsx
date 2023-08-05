import Page from "../components/Page";
// import { faker } from '@faker-js/faker';
import { colors } from '../components/theme';
// @mui
import { Grid, Container, Box, Typography } from '@mui/material';
// components
// import Iconify from '../components/iconify';
// sections
import {
  BigPictureTasks,
  // AppNewsUpdate,
  // ProgressTimeLine,
  // WhereIsYourTimeSpent,
  // HabitsInMotion,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Dashboard() {

return (

<Page title={'Dashboard'} class-name='Dashboard' isProtected={false} pageStyles={{
      backgroundImage: `url(/Pink-Brick.jpg)`,
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
            </Typography>
          <Grid item xs={12} md={6} lg={8}>
            <BigPictureTasks
              title="Big Picture Tasks"
              list={[
                { id: '1', label: 'Be a good Student!' },
                { id: '2', label: 'Make Time for Friends and Family' },
                { id: '3', label: 'Travel More!' },

              ]}
            />
            </Grid>
      </Grid>
    </Container>
    </Box>
</Page>
  );
  };