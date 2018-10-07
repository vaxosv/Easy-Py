const fs = require('fs');

function wright(a) {
	fs.writeFile("main1.py", a, (err, data) => {
		if (err) {
			console.log(err)
		}
	})
}

fs.readFile('main.py', (err, data)=>{
	data = data.toString();
	let renderd = data.toString()
		.replace("{", " ")
		.replace(";", " ")
		.replace("}", " ");
	wright(renderd)
	// console.log(renderd);
});

