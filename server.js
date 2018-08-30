const express= require('express');

const hbs = require('hbs');

const fs = require('fs');

var app = express();

const port=process.env.PORT||3000;


app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials')
//to use middleware in application here inbuilt express static middleware


app.use((req,res,next)=>{

    var now= new Date().toString();
    var log= `${now}: ${req.method} ${req.path}`;

    fs.appendFile('server.log',log + '\n',(error)=>{
        if(error)
        {
            console.log('unable to append to file');
        }
    })

    console.log(log);

    next();
})

// app.use((req,res,next)=>{
//     res.render('maintance.hbs',{
//         pageTitle:'Maintance'
//     });
// })

//commments added

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

app.get('/project',(req,res)=>{

    res.render('project.hbs',{
        pageTitle:'Project'
    })
})

app.get('/bad',(req,res)=>{
    res.send({
        error:'unable to fulfill request'
    })
})

app.listen(port,()=>{
    console.log(`server is up on port ${port}`)
});