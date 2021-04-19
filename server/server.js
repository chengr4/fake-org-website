/*if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}*/

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
const lodashId = require("lodash-id");
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db._.mixin(lodashId);

app.use(cors());
app.use(express.json());

/*const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

//app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))*/

app.post('/api/login-user', async (req, res) => {
  const user = db.get('users').find(user => user.name === req.body.name).value()
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(req.body.password === user.password) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

app.post("/api/organizations", async (req, res) => {
  try {
    const address = {
      name: req.body.name,
      address: {
        street: req.body.address.street,
        apt: req.body.address.apt,
        city: req.body.address.city,
        state: req.body.address.state,
        zipcode: req.body.address.zipcode,
      },
    };
    db.get("organizations").insert(address).write();
    res.status(200).send();
  } catch {
    res.status(500).send();
  }
});

/*function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}*/

app.listen(3001);
