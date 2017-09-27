let fs = require('fs');
let text2png = require('text2png');

//fs.writeFileSync('out.png', text2png('Hello!', {textColor: 'blue'}));

let line = 'line1';
let northbound = 'Arrives in 3 minutes';
let southbound = 'Arrives in 5 minutes';

fs.writeFileSync('test.png', text2png(`${line}\n${northbound}\n${southbound}`, {
	font: '40px Futura', 
	textColor: 'teal',
	bgColor: 'linen',
	lineSpacing: 10,
	padding: 20
}));
