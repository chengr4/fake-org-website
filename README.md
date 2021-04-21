# Fake Org. website

## How to use the project?

### Step 1: Install packages for both client and server

**Server**
```
cd server
yarn install

or

cd server 
npm install
```

**Client**
```
yarn install

or

npm install
```

### Step2: Run both server and client

**Server**
```
// in server folder
yarn run dev-start

or

npm run dev-start
```

**Client**
```
yarn start

or

npm start
```

### Step3: Start to use

## About authentication

Email: admin@test.com

Password: password123

> You can change it in `server/db.json`

## Questions

1. not sure if the way of wrapping botton is proper [1]
2. not sure the right way to instead `<div>` tag
3. I believe `<form>` tag should stay standard

## Can be better

+ Better CSS
+ repair string ID in the server made by `lodash-id`

## References

1. [React Material UI + Router redirect button](https://stackoverflow.com/questions/55796665/react-material-ui-router-redirect-button)
2. [Cross-Origin Request Blocked with React and Express](https://stackoverflow.com/questions/50968152/cross-origin-request-blocked-with-react-and-express)
