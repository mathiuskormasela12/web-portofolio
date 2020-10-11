class HTTP {
	connect(method, endpoint, data, auth) {
		return fetch('https://web-portolio-api.glitch.me/api' + endpoint, {
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
