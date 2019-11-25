const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

var myhash;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        
        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
            // res == true
            console.log('Test1 ', res)
        });

    });
});

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        
        bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
            // res == false
            console.log('Test2 ', res)
        });

    });
});

