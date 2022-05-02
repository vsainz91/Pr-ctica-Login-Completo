const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const cookieCheck = require('./middlewares/cookieCheck')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret:"palabraSecreta",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(cookieCheck);

const userRouter = require('./routes/users');

app.use('/', userRouter);

app.listen(PORT, () => console.log("servidor levantado en puerto: " + PORT))