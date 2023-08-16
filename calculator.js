const express=require("express");
var bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.htm");
});

app.post("/", function(req, res){

    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;

    res.send("The result of calculation is "+ result);
});


app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.htm");
});

app.post("/bmicalculator", function(req, res){

    var weight=Number(req.body.wt);
    var height=Number(req.body.ht);
    var result=weight/(height*height);

    res.send("Your BMI is "+ result);
});


app.listen("3000", function(){
    console.log("server started at port 3000");
})