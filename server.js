const express= require('express');

var app = express();

//to use middleware in application here inbuilt express static middleware
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

    res.send('<h1>Hello express!<//h1>');
})

app.get('/about',(req,res)=>{

    res.send({
        name:'parth',
        likes:[
            'travel',
            'food'
        ]
    });
})

app.get('/bad',(req,res)=>{
    res.send({
        error:'unable to fulfill request'
    })
})

app.listen(3000,()=>{
    console.log('server is up on port 3000')
});