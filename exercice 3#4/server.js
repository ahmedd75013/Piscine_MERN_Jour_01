var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var PORT = process.env.PORT || 5000

app.use(bodyParser.json());


app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)


const mongoURI = 'mongodb://localhost:27042/user'

mongoose
.connect(mongoURI ,{useNewUrlParser:true})
.then(()=>console.log("MongoDB connected"))
.catch(err =>console.log(err))

var Users = require('./routes/Users')

app.use('/users' , Users)
app.listen(port,() => {
    console.log("Server is running on port : " + port)
})





app.listen(4242);

































app.post("/users", async (req, res,) => {
    const { mail, name, password } = req.body;
    try {
      const fetchUser = await User.findOne({ mail });
      if (fetchUser) {
        return res.status(400).json({ error: 'User account already exist' });
      }
      const user = await User.create({ mail, name, password });
      return res.status(200).json({ error: null, user });
    } catch (err) {
      return res.status(500).json({ user: null, error: err });
    }
});

app.post("/users/login", async (req, res,) => {
    const { mail, password } = req.body;
    try {
      const userFromDB = await User.findOne({ mail, password });
      if (!userFromDB) {
        return res.status(400).json({ error: 'Vos identifiants ne semblent pas corrects.' });
      }
  
      const token = jwt.sign({ id: userFromDB._id }, 'jwt_secret', { expiresIn: '24h' });
      return res
        .status(200)
        .json({ user: userFromDB, token });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
});

(async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/ahmed', { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (e) {
      throw new Error(e);
    }
    app.listen(PORT, () => console.log(`🚀 application ready at ${PORT}`));
  })();