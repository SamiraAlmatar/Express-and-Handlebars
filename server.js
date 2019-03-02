const express = require('express');
const expHandle = require('express-handlebars');

const app = express();

app.engine('handlebars', expHandle({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req, res) =>{
    res.render('index');
});

app.get('/:id/:username',(req, res) =>{
    res.render('user', {
        id : req.params.id,
        username : req.params.username
    });
});

app.get('/index', (req,res) =>{
    // app.use(express.static('./index.handlebars'));
    res.render('../index');
});

app.listen(8080, () =>{
    console.log('the server just started on port 8080');
});