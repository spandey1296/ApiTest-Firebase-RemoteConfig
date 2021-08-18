'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: "AIzaSyBrW7iZVklHVVGxN9kon2xuRMpnYSxT0wQ",
    authDomain: "nodejsproject-4480c.firebaseapp.com",
    databaseURL: "https://nodejsproject-4480c-default-rtdb.firebaseio.com",
    projectId: "nodejsproject-4480c",
    storageBucket: "nodejsproject-4480c.appspot.com",
    messagingSenderId: "350654206530",
    appId: "1:350654206530:web:9e1f5c75bada62a8fdd3db"
    }
}