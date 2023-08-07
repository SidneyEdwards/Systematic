import Page from "../components/Page";
import { useTheme} from '@mui/material/styles';
import { colors } from '../components/theme';
import { Button, Grid, Container, Box, Typography } from '@mui/material';
import button from '../components/button';
import { ThemeProvider } from '@mui/material/styles';
import {
  BigPictureTasks,
  MoodTracker,
  HabitTracker,
  WhereIsYourTimeSpent,
  HabitsInMotion,
} from '../components/dashboard/app';
import { QUERY_ME } from '../graphql/queries';
import { useQuery } from '@apollo/client'

// ----------------------------------------------------------------------

export default function Dashboard() {
  const theme = useTheme();

  const { data, loading, error } = useQuery(QUERY_ME);

  // console.log(data);
  
  const dailyHabits = data?.me.dailyHabits || [];
  const qtext = data?.me.days[data?.me.days.length].quote || [];


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
            value={'Affirmations Blog ' + qtext}
        >
        </Button>
    </ThemeProvider>
      <Typography variant='h5' style={{ color: colors.white }}>
        <>...</>
      </Typography>

        <Grid item xs={12} md={6} lg={8}>
  <BigPictureTasks
              title="Big Picture Tasks"
              list={dailyHabits}
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
      title="MoodTracker" />
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
                ]}
                chartData={[
                  {
                    name: 'You are Amazing!',
                    type: 'column',
                    fill: 'solid',
                    data: [38, 35, 30, 45, 47, 50, 40, 21],
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
                  { label: 'Call Mom', value: 4344 },
                  { label: '4 Hours of Coding', value: 5435 },
                  { label: '20 minutes of Meditation', value: 1443 },
                  { label: 'Run 3 Miles', value: 4443 },
                ]}
                chartColors={[
                  theme.palette.primary.main,
                  theme.palette.success.light,
                  theme.palette.warning.main,
                  theme.palette.secondary.light,
                ]}
              />
      </Grid>

    </Container>
    </Box>
    </Page>
  );
};
