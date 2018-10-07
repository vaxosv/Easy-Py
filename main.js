const fs = require('fs');

function write(a) {
	fs.writeFile("main1.py", a, (err, data) => {
		if (err) {
			console.log(err)
		}
	})
}


fs.readFile('min.py', (err, data)=>{
	
	if(err){
		console.log(err);
	}
	
	let renderd = data.toString()
		.replace("{", " ")
		.replace(";", " ")
		.replace("}", " ");
	write(renderd)
	// console.log(renderd);
});

