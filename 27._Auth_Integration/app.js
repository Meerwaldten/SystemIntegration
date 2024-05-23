import express from 'express';
//import { auth } from 'express-openid-connect';
import pkg from "express-openid-connect"

const { auth, requiresAuth } = pkg

const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8080',
  clientID: '6GHVnZrPXVpOv8NMOq507eql0yYrIA01',
  issuerBaseURL: 'https://dev-827cnykglwzed0fq.us.auth0.com'
};

app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => console.log('Server is running on PORT: ' + PORT));