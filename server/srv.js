/**
 * Created by NileGeek on 5/26/17.
 */
const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname + '../public');
const app = express();



app.listen(3000, (err) => {
    console.log('Error!');
});