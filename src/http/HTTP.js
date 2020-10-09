class HTTP {
	connect(method, endpoint, data, auth) {
		return fetch('http://127.0.0.1:3000/api' + endpoint, {
			method: method.toUpperCase(),
			headers: {
				"auth": auth
			},
			body: data
		})
		.then(response => response.json())
		.then(response => response)
	}
}

export default new HTTP();
