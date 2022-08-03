const express = require('express'),
app = express();
const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/numerals_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;
const romansController = require('./controllers/romansController');
const Roman = require('./models/roman.js');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost ${app.get('port')}`);
});

app.use(express.urlencoded({
    extended: false
})
);

app.use(express.json());
/*

var roman1 = new Roman({
    numeral: 'X',
    value: 10
  });
  
  roman1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
  });
  
  Roman.create(
    {
      numeral: 'C',
      value: 100
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
  );
  */



app.get('/romans', romansController.getAllRomans, (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
});

app.post('/rome', romansController.saveRoman);;