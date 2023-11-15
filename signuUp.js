const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
function getSignUp(req, res, next) {
    console.log("getSignup executed");
    res.sendFile(__dirname + '/views/signUpForm.html');
};

// Handle signup form submission
function postUser(req, res) {
    const { username, email, password } = req.body;
    console.log(req.body);
    // In a real app, you would typically save the user data to a database here

    res.send(`Signup successful! Welcome, ${username} ${email} ${password}!`);
};

function middleware1(req, res, next) {
    console.log("Middleware1 executed");
    next();
}
function middleware2(req, res, next) {
    console.log("Middleware2 executed");
    next();
}
const userRouter = express.Router();
app.use('/', userRouter);

userRouter.route('/').get(middleware1, getSignUp, middleware2)
userRouter.route('/signup').post(postUser);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
