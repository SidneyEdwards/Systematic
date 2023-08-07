const db = require('../config/connection');
const { DailyHabit, Day, Mood, User } = require('../models');

const moodsArr = [
  {
    numericV: 0,
    stringV: 'Awful'
  },
  {
    numericV: 1,
    stringV: 'Bad'
  },
  {
    numericV: 2,
    stringV: 'Meh'
  },
  {
    numericV: 3,
    stringV: 'Good'
  },
  {
    numericV: 4,
    stringV: 'Fantastic!'
  },
];

db.once('open', async () => {

  await Mood.insertMany(moodsArr);

  console.log('Moods seeded.')
  process.exit(0);

});