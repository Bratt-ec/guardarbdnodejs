const dbConnection = require('../../config/dbConnection');
module.exports = app => {
    const conexion = dbConnection();
    app.get('/', (req,res) => {
        conexion.query('SELECT * FROM noticia', (err, result) =>{        
        console.log(result);
            res.render('news/news', {
            news: result
         });
     }); 
    });

app.post('/news', (req, resp) => {
    const {titulo, noticia} = req.body;
    conexion.query('INSERT INTO noticia SET?', {
        titulo: titulo,
        noticia: noticia
    }, (err, result) =>{
        resp.redirect('/');
    });
});
}