const app = require('./src/app');



app.use(require('./src/app/routers/default'));

app.listen(app.get('port'), () => console.log(`****** Conexion Existosa por el puerto ${app.get('port')} ******`))