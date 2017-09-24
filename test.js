let fs = require('fs');
let text2png = require('text2png');

//fs.writeFileSync('out.png', text2png('Hello!', {textColor: 'blue'}));

fs.writeFileSync('test.png', text2png('Example\nText', {
	font: '80px Futura', 
	textColor: 'teal',
	bgColor: 'linen',
	lineSpacing: 10,
	padding: 20
}));
