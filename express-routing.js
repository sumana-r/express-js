const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:operation', function(req, res) {
  
  let numsVal = req.query;
  console.log(numsVal)
  

  if (req.params.operation == 'mean') {
    return res.json({response: { 
                        operation: req.params.operation,
                        values: 4 }});
  }
  else if (req.params.operation == 'median') {
    return res.json({response: { 
                        operation: req.params.operation,
                        values: 4 }});
  }
  else if (req.params.operation == 'mode') {
    return res.json({response: { 
                        operation: req.params.operation,
                        values: 4 }});
  }
  else {
    return res.status(400).json('Whoops! Nothing here!');
  }
  
});

// app.get('/median', function(req, res) {
//     const nums = req.query;
//     return res.send('Dogs go brk brk');
//   });

//   app.get('/mode', function(req, res) {
//     const nums = req.query;
//     return res.send('Dogs go brk brk');
//   });

  app.listen(3000, function(){
    console.log('App on port 8000');
  }) 

  // response: {
  //   operation: "mean",
  //   value: 4
  // }