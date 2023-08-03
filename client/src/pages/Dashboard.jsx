import Page from "../components/Page";
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  BigPictureTasks,
  AppNewsUpdate,
  ProgressTimeLine,
  WhereIsYourTimeSpent,
  HabitsInMotion,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Dashboard() {
  const theme = useTheme();

  return (
    <>
    <Page>
      <Helmet>
        <title> Affirmations Dashboard </title>
      </Helmet>
      <Container maxWidth="xl">
        <Grid>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back!
        </Typography>
            <HabitsInMotion
              title="HabitsInMotion"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
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

          <Grid item xs={12} md={6} lg={4}>
            <WhereIsYourTimeSpent
              title="Percentage of Tracked Habits"
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


          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Good News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.avatar(),
                description: faker.name.avatar(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <ProgressTimeLine
              title="Progress Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Down to 200 Lb!',
                  'Graduated from BootCamp!',
                  'Flight Scheduled for EuroTrip!',
                ][index],
                type: `Update${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <BigPictureTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Be a good Student!' },
                { id: '2', label: 'Make Time for Friends and Family' },
                { id: '3', label: 'Travel More!' },

              ]}
            />
          </Grid>
      </Container>
    </Page>
    </>
  );
}
