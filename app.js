const notifier = require('node-notifier');
const path = require('path');

notifier.notify({
    sound: true,
    wait: true,
    title: 'Demo notification',
    message: 'Hello world',
    icon: path.join(__dirname + './demo.jpeg')
}, function (err, response){
    console.log(response);
});