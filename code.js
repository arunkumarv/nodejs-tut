const fs = require ('fs');

console.log ('Begin');

var promise = new Promise (function(resolve, reject){
    fs.readFile('README.md', 'utf-8', function (err, data){
        if ( err ) return reject ( err )
        resolve ( data )
    });
});

promise
    .then( function(d){ console.log(d); console.log('end'); })
    .catch( function(e){ console.log(e); console.log ( 'end' )})

