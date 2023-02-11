const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '552452fd04msh5ae50cc23ca007ap1c1a2ejsn27d2546f7d9c',
		'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
	}
};

fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));