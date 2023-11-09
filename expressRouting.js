const express = require('express');

const app = express();
  app.listen(8000, function(){
    console.log('App on port 8000');
  }) 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ************************* Mean, Median and Mode calculation ****************************
function calculateMean(array) {
  var total = 0;
  var count = 0;

  array.forEach(function(item, index) {
      total += item;
      count++;
  });

  return total / count;
}

function calculateMedian(arr) {
  const middle = (arr.length + 1) / 2; 

        const sorted = [...arr].sort((a, b) => a - b); 
        const isEven = sorted.length % 2 === 0; 
      
        return isEven ? (sorted[middle - 1.5] 
            + sorted[middle - 0.5]) / 2 : 
            sorted[middle - 1]; 
}


function calculateMode(arr) {
const mode = {};
  let max = 0, count = 0;

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max;
}
var notNumber;

function checkValidNum(array){
  for(let i = 0; i < array.length; i++){
    
    if(isNaN(array[i])){
      notNumber = array[i];
      return true;
     
    }
        
  }
}
// *********************************************************************************

app.get('/:operation', function(req, res) {
  
  let numsStr = req.query.nums.split(",");
  let numsVal = numsStr.map(Number)
  
 if(checkValidNum(numsStr)){
  return res.status(400).json(` 400 Bad request ${notNumber} is not a number`);
  
 }
 else{
    if (req.params.operation == 'mean') {
    
    return res.json({response: { 
                        operation: req.params.operation,
                        values: calculateMean(numsVal) }});
  }
  else if (req.params.operation == 'median') {
    return res.json({response: { 
                        operation: req.params.operation,
                        values: calculateMedian(numsVal) }});
  }
  else if (req.params.operation == 'mode') {
    return res.json({response: { 
                        operation: req.params.operation,
                        values: calculateMode(numsVal) }});
  }
  else {
    return res.status(400).json('Whoops! Nothing here!');
  }
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

  // app.listen(3000, function(){
  //   console.log('App on port 3000');
  // }) 

  // response: {
  //   operation: "mean",
  //   value: 4
  // }