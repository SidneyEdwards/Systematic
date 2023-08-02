const { Schema, model } = require('mongoose');

const moodSchema = new Schema(
  {
    numericV: {
      type: Number,
      required: true,
      min: 0,
      max: 4,
      unique: true,
    },

    stringV: {
      type: String,
    }
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

moodSchema.pre('save', async function (next) {
  switch(this.numericV) {
    case 0:
      this.stringV = "Awful";
      break;
    case 1:
      this.stringV = "Bad";
      break;
    case 2:
      this.stringV = "Meh";
      break;
    case 3:
      this.stringV = "Good";
      break;
    case 4:
      this.stringV = "Fantastic!";
      break;
  }
  next();
});

const Mood = model('Mood', moodSchema);

module.exports = Mood;
