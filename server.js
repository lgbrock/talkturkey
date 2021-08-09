const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require('helmet')
const morgan = require('morgan');


app.listen(5000, () => {
    console.log("Backend running on port 5000");