const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },

    friends: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
    },
    dailyHabits: {
      type: [Schema.Types.ObjectId],
      ref: 'DailyHabit',
    },
    days: {
      type: [Schema.Types.ObjectId],
      ref: 'Day',
    },
    currentMood: {
      type: Schema.Types.ObjectId,
      ref: 'Mood',
      required: true,
    },

  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  if (this.isModified('currentMood')) {
    if(this.days.length) {
      this.days[this.days.length - 1].mood = this.currentMood;
    }
  }
  this.updatedAt = Date.now;

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
