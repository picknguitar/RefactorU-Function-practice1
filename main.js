// $(document).on('ready', function() {
  
// });

var tripleFive = function() {
	for(var i=0; i<3; i++) {
	console.log('Five!');
}
}

var lastLetter = function(str) {
	return str[str.length - 1];
}

var square = function(num) {
	return num * num;
}

var negate = function(number) {
	return -number;
}

var toArray = function(a, b, c) {
var array = [a, b, c];
	return array;
}

var startsWithA = function (str) {
	return str[0] === 'a'; 
}

var excite = function(str) {
	return str + '!!!';
}

var sun = function(str) {
	return str.indexOf('sun') !== -1; 
}

var tiny = function(num) {
	return num < 1 && num > 0 === true;
}

var getSeconds = function(str) {
var foo = str.split(':');
return (+foo[0])*60 + (+foo[1]); 
}





