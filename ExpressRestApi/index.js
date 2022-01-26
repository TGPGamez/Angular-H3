const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Dictators!')
})

app.post('/dictators', function(req, res) {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const birthday = req.body.birthday;
    const description = req.body.description;
    
    console.log('Created new dictator with name:' + name);

    res.send({'Name': name, 'LastName': lastname, 'Birthday': birthday, 'Description': description})
  })

app.listen(port, () => {
  console.log(`Dictators listening on port ${port}`)
});

app.get('/dictators', function(req, res) {
    console.log('Returned values: ' + res.json);
});