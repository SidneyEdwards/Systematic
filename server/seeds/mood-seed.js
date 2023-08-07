const db = require('../config/connection');
const { DailyHabit, Day, Mood, User } = require('../models');

const moodsArr = [
  {
    numericV: 10,
    stringV: 'Awful'
  },
  {
    numericV: 20,
    stringV: 'Bad'
  },
  {
    numericV: 30,
    stringV: 'Meh'
  },
  {
    numericV: 40,
    stringV: 'Good'
  },
  {
    numericV: 50,
    stringV: 'Fantastic!'
  },
];

db.once('open', async () => {

  await Mood.insertMany(moodsArr);

  console.log('Moods seeded.')
  process.exit(0);

});