// TODO: Test this.
// This is a change.

import { domain } from 'spooder';

domain('testdomain.net', server => {
	server.route('/test', (req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello World!');
	});
});