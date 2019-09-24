const app =  require('./config/server');

require('./app/routes/news')(app);

//server  
/**
 * npm init --yes   iniciar el proy
 * npm i express ejs mysql body-parser descargar paquetes necesarios
 * npm start   Inicia el servidor
 */
app.listen(app.get('port'),() => {
    console.log('Server Iniciado on port', app.get('port'));
});