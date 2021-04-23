## Vocabulary App

### 1. Clone the Repository
```
git clone https://github.com/Dinesh3098/Vocabulary-App-MERN-Stack.git
```

### 2. Setting Up GraphQL server
Go to server folder and download dependencies
```
cd projbackend
npm i
```
Create a .env file inside server folder and provide the key values mentioned below
```
mongodbUri= YOUR_MONGODB_URI
oxfordAppId= YOUR_OXFORD_APP_ID
oxfordAppKey= YOUR_OXFORD_APP_KEY
```
Run the server
```
npm start
```

### 3. Setting Up Client UI
Go to client folder and download dependencies
```
cd ../projfrontend
npm i
```
Give your server url inside client/src/utils/helper.js
```
const serverUrl = 'YOUR_SERVER_URL'
```
Run the client server
```
npm start
```
