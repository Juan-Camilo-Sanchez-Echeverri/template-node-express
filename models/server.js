import cors from 'cors';
import express, { static as static_, json } from 'express';
import router from '../routes/usuarios.js';

export class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usuariosPath = '/api/usuarios';

		// Middlewares
		this.middlewares();
		// Routes
		this.routes();
	}

	middlewares() {
		// CORS
		this.app.use(cors());

		// Parse and read body
		this.app.use(json());

		// Public directory
		this.app.use(static_('public'));
	}

	routes() {
		this.app.use(this.usuariosPath, router);
	}

	listen() {
		this.app.listen(this.port, () =>
			console.log(`listening on http://localhost:${this.port}`)
		);
	}
}
