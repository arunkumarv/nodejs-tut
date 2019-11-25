const fs = require ('fs');

console.log ('Begin');

fs.readFile('README.md', 'utf-8', function (err, data){
    if ( err ) return console.log ( err )
    console.log ( data )
});

console.log ('End');

