const { Schema, model } = require('mongoose');

function dow(d) {
  switch(d.getDay()) {
    case 0: return "Sunday"; break;
    case 1: return "Monday"; break;
    case 2: return "Tuesday"; break;
    case 3: return "Wednesday"; break;
    case 4: return "Thursday"; break;
    case 5: return "Friday"; break;
    case 6: return "Saturday"; break;
  }
}

async function getQuote() {
  const response = await fetch('https://zenquotes.io/api/today');
  const json = await response.json();
  const qtext = JSON.stringify(json[0].q + " - " + json[0].a);
  console.log(qtext);
  return qtext;
}

const daySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
    },
    mood: {
      type: Schema.Types.ObjectId,
      ref: 'Mood',
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    dayOfWeek: {
      type: String,
      required: true,
      default: dow(new Date),
    },
    date: {
      type: String,
      required: true,
      default: (new Date().getMonth() + 1).toString() + '/' + new Date().getDate().toString()  + '/' + (new Date().getYear() + 1900).toString(),
    },
    quote: {
      type: String,
      default: getQuote(),
    },
    didIDoThat: [{
      habit: {
        type: Schema.Types.ObjectId,
        ref: 'DailyHabit',
      },
      didDo: {
        type: Boolean,
        default: false,
      },
    }],

  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

daySchema.pre('save', async function (next) {
  
  next();
});

const Day = model('Day', daySchema);

module.exports = Day;
