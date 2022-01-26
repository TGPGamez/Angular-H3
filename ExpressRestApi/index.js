const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const fs = require('fs');
const path = 'data.json';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Dictators!')
});

app.post('/post_dictator', function(req, res) {
    let newObject = { "name": req.body.name, "lastname": req.body.lastname, "birthday": req.body.birthday, "description": req.body.description };
    
    if (newObject.name && newObject.birthday && newObject.lastname) {
      let rawData = fs.readFileSync(path);
      let jsonData = JSON.parse(rawData);

      jsonData['dictators'].push(newObject);
      
      let newData2 = JSON.stringify(jsonData);
      fs.writeFile(path, newData2, err => {
        if(err) throw err;

        console.log('Created dictator');
        console.log('- Name: ' + newObject.name);
        console.log('- Lastname: ' + newObject.lastname);
        console.log('- Birthday: ' + newObject.birthday);
        console.log('- Desc: ' + newObject.description);
      });
      
      res.end(JSON.stringify(newObject)); 
    } else {
      res.end('The required data is not set');
    }
});

app.listen(port, () => {
  console.log(`Dictators listening on port ${port}`)
});

app.get('/list_dictators', function(req, res) {
  let rawData = fs.readFileSync(path);
  let jsonData = JSON.parse(rawData);

  console.log('Recieved \'GET\' request for /list_dictators.');
  res.send(JSON.stringify(jsonData['dictators']));
});

app.delete('/delete_dictator', function(req, res) {
  let index = req.query.ids;

  if (index) {
    let rawData = fs.readFileSync(path);
    let jsonData = JSON.parse(rawData);

    if (jsonData.dictators[index] != null) {
      console.log('Deleted:' + jsonData.dictators[index].name);
      delete jsonData.dictators[index];
      let filteredArray = { "dictators": jsonData.dictators.filter(function (e) {
        return e != null;
      })};
      fs.writeFileSync(path, JSON.stringify(filteredArray));
      res.end('Deleted ' + index);  
    } else {
      res.send('Could not find any data');
    }
  } else {
    res.end('The required data is not set');
  }
});