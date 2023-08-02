const { Schema, model } = require('mongoose');

const habitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    daysOfWeek: {
      type: [{day: String, toDo: Boolean}],
      required: true,
      default: [
        {day: "Monday", toDo: true},
        {day: "Tuesday", toDo: true},
        {day: "Wednesday", toDo: true},
        {day: "Thursday", toDo: true},
        {day: "Friday", toDo: true},
        {day: "Saturday", toDo: true},
        {day: "Sunday", toDo: true},
      ],
    },

  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const DailyHabit = model('DailyHabit', habitSchema);

module.exports = DailyHabit;
