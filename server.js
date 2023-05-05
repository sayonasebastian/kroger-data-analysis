// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const usersRouter = require('./server/router');
const dataRouter = require('./server/dataRouter');

const PORT = 8080

const app = express();

app.use(cors());
app.use(helmet());
const currentHost = "https://kroger-app-main.azurewebsites.net/"
const currentHost_1 = "https://kroger-app.azurewebsites.net/"
const cspConfig = {
  directives: {
    'connect-src': [currentHost,currentHost_1],
  },
};

app.use(helmet.contentSecurityPolicy(cspConfig));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.use('/data', dataRouter);

app.use(express.static(process.cwd()+"/frontend/build/"));

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Error has occured')
})

// app.use(function (req, res, next) {
//   res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
//   //res.status(404).send('Error has occured 404')
// })


app.get('*', (req,res) =>{
  res.sendFile(process.cwd()+"/frontend/build/index.html");
});

// app.get('/login', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/login.js");
// });
// app.get('/register', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/register.js");
// });
// app.get('/forget-password', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/forgotPassword.js");
// });
// app.get('/home', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/home.js");
// });
// app.get('/dashboard', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/dashboard.js");
// });
// app.get('/dashboardCustHNum', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/dashboard_using_custom_hNum.js");
// });
// app.get('/upload', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/custom-data-set-upload.js");
// });
// app.get('/demoFactDashboard', (req,res) => {
//   res.sendFile(process.cwd()+"/frontend/src/components/demographic_factors_dashboard.js");
// });
//app.get("*", (_, res) => res.sendFile(process.cwd()+"/frontend/build/index.html"));

app.listen(PORT, function () {
  console.log(`Server is running on:${PORT} in: ${process.cwd()}`)
})