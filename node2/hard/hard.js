
const express = require("express");
const app = express();
const data = require('./public/employees.json')

app.use(express.json());

 //GET
app.get('/',(req,res) => {
    res.status(200).send('Hello Employees!!!');
});

app.get("/employees", (req, res) => {
    if (!data && !data.employees) {
      res.status(404).send(`Couldnt find the employees`);
    }
    res.status(200).send(data.employees);
  });


  app.get("/employees/:id", function (req, res) {
    const sData = data.employees.find(e => e.id === parseInt(req.params.id));
    if (!sData) {
      res.status(404).send(`Couldnt find the employees id`);
    }
        res.status(200).send(sData);
  });

  // POST
  app.post("/employees", function (req, res) {
    const sData = {
      id: data.employees.length + 1,
      name: req.body.name,
      salary: req.body.salary,
      job: req.body.job
    };
    if (!sData) {
      res.status(404).send(`Couldnt add student`);
    }
  
    data.employees.push(sData);
  
    res.status(200).send(sData);
  
  });

// PUT 
app.put('/employees/:id',(req,res)=>{
  const employee = data.employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) {
    res.status(404).send(`Couldnt find that employee try again`)

  const {error} = validateEmployee(req.body); 
  if (error){
    res.status(400).send(error.details[0].message);
    return;
  }}

  employee.name = req.body.name;
  employee.salary = req.body.salary;
  employee.department = req.body.department;
  res.status(200).send(employee);
});



// DELETE
  app.delete('/employees/:id', function(req,res){
    const sData = data.employees.find(function (student) {
        return parseInt(req.params.id) === student.id;
      });

      if (!sData) {
        res.status(404).send(`Couldnt find the student id`);
      }

      const index = data.employees.indexOf(sData)

      data.employees.splice(index,1)

      res.send(sData)

})


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
})