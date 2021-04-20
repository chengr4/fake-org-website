const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
const lodashId = require("lodash-id");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db._.mixin(lodashId);

app.use(cors());
app.use(express.json());

app.get("/api/organizations", async (req, res) => {
  const data = db.get('organizations').value()

  res.json(data)
})

app.post('/api/login-user', async (req, res) => {
  const user = db.get('users').find(user => user.email === req.body.email).value()
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(req.body.password === user.password) {
      res.send('Success')
    } else {
      res.status(403).send('Not Allowed')
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

app.listen(3001);
