console.log ('Hello World');

var sum = function ( a, b ){
    return a + b;
}

var mul = function (a, b){ return a * b; }

var d = function(a, b){return a/b;}(15, 5)
console.log ( 'Division: ', d );

let s = sum ( 4, 5 );
let m = mul ( 4, 5 );

console.log ( 'Sum is : ', s );
console.log ( 'Product is : ', m );

function execute (a, b, method ){ return method(a, b); }
console.log ('Sum is: ', execute(3, 4, sum) )
console.log ('Product is: ', execute(3, 4, mul) )

function square ( number, callback ){
    let out = number * number;
    callback ( out );
}

square ( 4, function( result ){
    console.log ('Square: ', result);
});
