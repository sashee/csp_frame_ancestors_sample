const express = require('express')

{
	const noDenyApp = express();

	noDenyApp.get('/iframe.html', (req, res) => res.sendFile(`${__dirname}/iframe.html`));

	noDenyApp.listen(3001);
}
{
	const denyApp = express();

	denyApp.use(function(req, res, next) {
		res.header("Content-Security-Policy", "frame-ancestors 'none';");
		next();
	});

	denyApp.get('/iframe.html', (req, res) => res.sendFile(`${__dirname}/iframe.html`));

	denyApp.listen(3002);
}

{
	const app = express()

	app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

	app.listen(3000);
}