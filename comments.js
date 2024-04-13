// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req