const { Schema, model } = require('mongoose');

const moodSchema = new Schema(
  {
    numericV: {
      type: Number,
      required: true,
      min: 0,
      max: 40,
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
    case 10:
      this.stringV = "Awful";
      break;
    case 20:
      this.stringV = "Bad";
      break;
    case 30:
      this.stringV = "Meh";
      break;
    case 40:
      this.stringV = "Good";
      break;
    case 50:
      this.stringV = "Fantastic!";
      break;
  }
  next();
});

const Mood = model('Mood', moodSchema);

module.exports = Mood;
