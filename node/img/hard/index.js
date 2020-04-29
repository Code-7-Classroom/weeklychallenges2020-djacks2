let express = require('express')
let app = express()
let data = require('./public/lesson.json.js.js')
app.get('/test', function(req,res){
    res.send("Hi everbody")
})
app.get('/employees', (req,res) => {
    if(!data){
        res.status(404).send(`Couldnt find the employee`)
    }
    res.send(data)
})
app.get('/employees/:id', function (req,res){
    const sData = data.employees.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if(!sData){
        res.status(404).send(`Couldnt find the employee id`)
    }
    res.send(sData)
})
app.delete('/employees/:id', function (req,res){
    const sData = data.employees.find(function(employee){
        return parseInt(req.params.id) === employee.id;
    });
    
    if(!data){
        res.status(404).send(`Couldnt find the employees`);
    }


const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
});
