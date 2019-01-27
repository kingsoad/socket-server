import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

//Body Parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json() );

//CORS -- Cualquier persona puede llamar sus servicios
server.app.use( cors({ origin: true, credentials: true }) );

// Rutas de Servicio
server.app.use('/', router)


server.start(() => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});