const epxress = require('express');
const env = require('dotenv');
const app = epxress();

env.config();


//set the middile ware 
app.set('view engine','ejs');
app.use(epxress.urlencoded({extended:true}));
app.use(epxress.static('public'));

//create the array of task 
const tasks = [];



// default routes 
app.get('/',(req,res)=>{
   res.render('index',{tasks});
})


// /add routes 
app.post('/add',(req,res)=>{
    const task = req.body.task;
    // here push the task in to the tasks 
    tasks.push(task);
    // redirect to next page
    res.redirect('/');// goes to the home  page 

})


// delate the task  
app.get('/delete/:index',(req,res)=>{
    const index = req.params.index;
    tasks.splice(index,1);
    res.redirect('/');//again moves to the  home page 

})


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})

