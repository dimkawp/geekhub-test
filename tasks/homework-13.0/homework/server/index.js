const express = require('express');
const bodyParser = require('body-parser');
const App = express();
const Admin = {
    login: 'admin',
    password: 'admin'
};

App.use(bodyParser.json());
App.post('/api/user/login', (request, response) => {
    const login = request.body.login;
    const password = request.body.password;

    if (Admin.login === login && Admin.password === password) {
        return response.send(
            {user: {admin: 'true',link: 'link'}}
        );
    }
    else {
        return response.json(
            {admin: 'false'}
        )
    }
    return response.json();
});
App.listen(4000, () => {
    console.log('sever is started');
})