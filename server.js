/**
 * Created by ltleelong on 2017/3/26.
 */
let express  =require('express');
let app = express();
let Movie = require('./model');
let path = require('path');

app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);

app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        res.render('index',{movies})

    })
});
app.listen(8080);
