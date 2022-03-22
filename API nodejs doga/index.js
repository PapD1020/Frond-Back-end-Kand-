const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { json } = require('body-parser');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myschema'
});



app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.get('/', (req, res) => {
    res.send("asd");
});

app.get('/get/customers', (req, res) => {

    const sqlSelect = "SELECT * FROM customers";
    db.query(sqlSelect, (err, result) => {

        if(err){
            console.log("Customers get error: " + err);
        }

        console.log("Result (result.data): " + JSON.stringify(result.data));
        res.send(result);
    });
});

app.get('/get/customers/:customerNumber', (req, res) => {

    const cN = req.params.customerNumber;
    const sqlSelect = "SELECT * FROM customers WHERE customerNumber = " + cN;
    db.query(sqlSelect, (err, result) => {

        if(err){
            console.log("Customers get by email error: " + err);
        }

        console.log("Result (result.data): " + JSON.stringify(result.data));
        res.send(result);
    })
});

/*
app.post('/post/payments/:customerNumber/:checkNumber/:paymentDate/:amount', (req, res) => {

    const customer_number = req.params.customerNumber;
    const check_number = req.params.checkNumber;
    const payment_date = req.params.paymentDate;
    const amount = req.params.amount;

    console.log("customerNumber: " + JSON.stringify(customer_number));

    const sqlInsert = "INSERT INTO `payments`(`customerNumber`, `checkNumber`, `paymentDate`, `amount`) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [customer_number, check_number, payment_date, amount], (err, result) => {

        if(err){
            console.log("Payments INSERT error: " + err);
        }

        console.log("Result (result.data): " + JSON.stringify(result.data));
        res.send(result);
    });
});


app.post('/post/payments/:customerNumber&:checkNumber&:paymentDate&:amount', (req, res) => {

    const customer_number = req.params.customerNumber;
    const check_number = req.params.checkNumber;
    const payment_date = req.params.paymentDate;
    const amount = req.params.amount;

    console.log("customerNumber: " + JSON.stringify(customer_number));

    const sqlInsert = "INSERT INTO `payments`(`customerNumber`, `checkNumber`, `paymentDate`, `amount`) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [customer_number, check_number, payment_date, amount], (err, result) => {

        if(err){
            console.log("Payments INSERT error: " + err);
        }

        console.log("Result (result.data): " + JSON.stringify(result.data));
        res.send(result);
    });
});
*/

app.post('/post/payments', (req, res) =>{
    
    const customer_number = req.body.customerNumber;
    const check_number = req.body.checkNumber;
    const payment_date = req.body.paymentDate;
    const amount = req.body.amount;

    const sqlInsert = "INSERT INTO `payments`(`customerNumber`, `checkNumber`, `paymentDate`, `amount`) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [customer_number, check_number, payment_date, amount], (err, result) => {

        if(err){
            console.log("Payments INSERT error: " + err);
        }

        console.log("Result (result.data): " + JSON.stringify(result.data));
        res.send(result);
    });
});

app.put('/put/update/payments', (req, res) => {

    const customer_number = req.body.customerNumber;
    const check_number = req.body.checkNumber;
    const payment_date = req.body.paymentDate;
    const amount = req.body.amount;

    const sqlUpdate = "UPDATE `payments` SET `checkNumber` =  ?, `paymentDate` = ?, `amount` = ? WHERE customerNumber = ?";
    db.query(sqlUpdate, [check_number, payment_date, amount, customer_number], (err, result) => {

        if(err){
            console.log("Payments Update error: " + err);
        }

        console.log("Result (result.data): " + JSON.stringify(result.data));
        res.send(result);
    });
});


app.listen(3002, () => {
    console.log("Running on port 3002");
});