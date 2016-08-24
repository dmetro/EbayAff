var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT|| 5000;


app.set('views','./src/views');
//app.set('view engine','html');
 //   res.render('index')
app.use(express.static(path.join(__dirname, 'public')));
var portfolio = express.Router();



app.use('/PortFolio',portfolio);

portfolio.route('/')
    .get(function(req,res){
        res.send('Hello Porftolios');
    });
    
portfolio.route('/Ports')
    .get(function(req,res){
        res.send('Hello Portfolio 1');
    });

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/src/views/index.html'));
});

app.get('/getuser',function(req,res) {
    res.send('User: Dima Gorlov' );
});

app.listen(port,function (params) {
    console.log('running at port :', port);

});