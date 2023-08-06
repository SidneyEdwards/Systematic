import Page from "../components/Page";
import { useTheme} from '@mui/material/styles';
import { colors } from '../components/theme';
import { Button, Grid, Container, Box, Typography } from '@mui/material';
import button from '../components/button';
// import Iconify from '../components/iconify';
import { ThemeProvider } from '@mui/material/styles';
import {
  BigPictureTasks,
  // GoToBlog
  MoodTracker,
  HabitTracker,
  WhereIsYourTimeSpent,
  HabitsInMotion,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Dashboard() {
  const theme = useTheme();

return (

<Page title={'Dashboard'} class-name='Dashboard' isProtected={false} pageStyles={{
      backgroundImage: `url(/pink-brick.jpg)`,
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

<Typography variant='h5' style={{ color: colors.white }}>
            </Typography>
            <ThemeProvider theme={button}> 
            <Button
                href='/ManageHabits'
                variant='contained'
                style={{ marginRight: 250, marginTop: 20 }} 
            > Manage Habits
            </Button>
            </ThemeProvider>
            <Typography variant='h5' style={{ color: colors.white }}>
            <>...</>
</Typography>


    <Typography variant='h5' style={{ color: colors.white }}>
    </Typography>

<Typography variant='h5' style={{ color: colors.white }}>
            </Typography>
            <ThemeProvider theme={button}> 
            <Button
                href='/Affirmations'
                variant='contained'
                style={{ marginRight: 250, marginTop: 0}} 
            > Affirmations Blog
            </Button>
            </ThemeProvider>
            <Typography variant='h5' style={{ color: colors.white }}>
            <>...</>
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
      
    <></>
    <Typography variant='h5' style={{ color: colors.white }}>
      <>...</>
    </Typography>

      <Grid item xs={12} md={6} lg={8}>
    <HabitTracker
    title="HabitsInMotion" />
      </Grid>

      <></>
    <Typography variant='h5' style={{ color: colors.white }}>
      <>...</>
    </Typography>

    <Grid item xs={12} md={6} lg={8}>
    <MoodTracker
    title="HabitsInMotion" />
      </Grid>

  </Grid>
        <Typography variant="h4" sx={{ mb: 5 }}>
        <></>
        </Typography>
        <Grid>
            <HabitsInMotion
              title="HabitsInMotion"
              subheader="Habits Completed (+43%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'You are Amazing!',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },

              ]}
            />
          </Grid>
          <Typography variant="h4" sx={{ mb: 5 }}>
        <></>
        </Typography>
          <Grid item xs={12} md={6} lg={4}>
            <WhereIsYourTimeSpent
              title="Where is My Energy Spent"
              chartData={[
                { label: 'Habit1', value: 4344 },
                { label: 'Habit2', value: 5435 },
                { label: 'Habit3', value: 1443 },
                { label: 'Habit4', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

  </Container>
  </Box>
</Page>
  );
  };