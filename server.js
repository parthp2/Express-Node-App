const express= require('express');

const hbs = require('hbs');

var app = express();



hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
//to use middleware in application here inbuilt express static middleware
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getcurrentYear',()=>{
    return new Date().getFullYear()
})

hbs.registerHelper('screamIT',(text)=>{
    return text.toUpperCase()
})

app.get('/',(req,res)=>{

   // res.send('<h1>Hello express!<//h1>');

    // res.send({
    //     name:'parth',
    //     likes:[
    //         'travel',
    //         'food'
    //     ]
    // });

    res.render('home.hbs',{
        pageTitle:'Home',
        currentYear:new Date().getFullYear(),
        message:'Parth'
    })
})

app.get('/about',(req,res)=>{

   res.render('about.hbs',{
       pageTitle:'about',
       currentYear:new Date().getFullYear()
   });
})

app.get('/bad',(req,res)=>{
    res.send({
        error:'unable to fulfill request'
    })
})

app.listen(3000,()=>{
    console.log('server is up on port 3000 ')
});