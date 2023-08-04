const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// Google Oauth
const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/tasks']
const REDIRECT_URL = process.env.NODE_ENV === 'production' ? 'some deployment url' : `http://localhost:${PORT}/api/google/redirect`
const generateOAuth2Client = () => new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, REDIRECT_URL);
const mainOAuth2Client = generateOAuth2Client();

const { User } = require('./models');
const { title } = require('process');

// --

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})


// window.location.href = localhost:3001/api/google?id=asdasas
app.get('/api/google', (req, res) => {

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'User id required.' })
  }

  const url = mainOAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    state: id
  });

  res.redirect(url);
});

app.get('/api/google/redirect', async (req, res) => {
  const { code, state } = req.query;

  try {
    const { tokens } = await mainOAuth2Client.getToken(code);

    const userData = await User.findByIdAndUpdate(state, {
      tokens
    }, { new: true });


    const url = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/'

    res.redirect(url)

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

});

app.post('/api/google/save-tasks/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const { tokens } = await User.findById(id);

    console.log(tokens);

    if (!tokens?.access_token) {
      return res.status(404).json({ message: 'No access_token' })
    };

    const oAuth2Client = generateOAuth2Client();
    oAuth2Client.setCredentials(tokens);

    const tasks = google.tasks({ version: 'v1', auth: oAuth2Client });

    // Define task details
    const taskToInsert = [
    {
      title: 'Cook Breakfast ',
      notes: '',
    },
    {
      title: 'Make the bed',
      notes: '',
    },
    {
      title: 'Run 1 mile',
      notes: '',
    },
    {
      title: 'Do 10 pushups!',
      notes: '',
    },
    {
      title: 'Do 15 situps!', 
      notes: '',
    },
    {
      title: 'Go to the grocery store',
      notes: '',
    },
    {
      title: 'Walk the dogs',
      notes: '',
    },
    {
      title: 'Clean the house',
      notes: '',
    },
    
  ];

    // Insert the task to the user's tasks list
    for (const task of taskToInsert) {
    await tasks.tasks.insert({ tasklist: '@default', resource: task });
    }

    res.send('Tasks inserted to google calendar successfully.');

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer();

