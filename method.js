const express = require('express');
const app = express();

// Middleware to parse JSON in the request body
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Initialize an empty object to store users
let users = [{
    id: 1,
    name: "khush_1"
}, {
    id: 2,
    name: "khush_2"
}, {
    id: 3,
    name: "khush_3"
}, {
    id: 4,
    name: "khush_4"
},];

// app.get('/users', (req, res) => {
//     res.send(users);
// });

app.post('/users', (req, res) => {
    // Assuming the request body contains JSON data
    const newUser = req.body;

    // Store the user in the users object
    users = req.body;
    console.log('New user added:', newUser);

    res.json({
        message: 'Data sent successfully',
        user: req.body
    });
});
//update->patch
app.patch('/users', (req, res) => {
    console.log("req body", req.body);
    let dataTobeUpdated = req.body;
    for (key in dataTobeUpdated) {
        users[key] = dataTobeUpdated[key]
    }
    res.json({
        message: "data updated succesfully",
    })
})

app.delete('/users', (req, res) => {
    users = {};
    res.json({
        message: 'user deleted',
        user: users
    })
})
app.get('/users', (req, res) => {
    console.log(req.query)
    // console.log(req)

    res.json({"user id is ": users});
});
app.get('/users/:username', (req, res) => {
    console.log(req.params.username)
    console.log(req.params)

    res.send("user id is ");
});


function getUser(req, res){
    console.log(req.query)
    // console.log(req)

    res.json({"user id is ": users});
}

function postUser(req, res){
    const newUser = req.body;

    // Store the user in the users object
    users = req.body;
    console.log('New user added:', newUser);

    res.json({
        message: 'Data sent successfully',
        user: req.body
    });
}

function updateUser(req, res){
    console.log("req body", req.body);
    let dataTobeUpdated = req.body;
    for (key in dataTobeUpdated) {
        users[key] = dataTobeUpdated[key]
    }
    res.json({
        message: "data updated succesfully",
    })
}

function deleteUser(req, res){
    users = {};
    res.json({
        message: 'user deleted',
        user: users
    })
}

//mini app

const userRouter = express.Router();
app.use('/user', userRouter);

userRouter.route('/').get(getUser).post(postUser).patch(updateUser).delete(deleteUser); // path specific middleware

userRouter.route('/:id').get(getUserByid)

function getUserByid(req, res){
    console.log(req.params.username)
    console.log(req.params)

    res.send("user id is ");
}