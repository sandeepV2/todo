//jshint version:es6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")


const app = express();
// set view engine to ejs.
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

var actions = ["Become better", "Now or Never"];

app.listen(3000, function (req, res) {
    console.log("Server starting listnening on 3000");
});

app.get("/", function (req, res) {
    var options = {
        "weekday" : 'long',
        "month" : 'long',
        "day" : "numeric"
    }
    var today = new Date();
    let currentDay = today.toLocaleDateString("en-US", options);
    //const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    var day = currentDay;
    console.log(day);

    res.render("list", {kindOfDay:day , NewItem:actions });
    // if (currentDay == 6 || currentDay == 0) {
    //     res.render("list", {
    //         kindOfDay: day + " Weekend"
    //     })
    // } else {
    //     //res.write("boo!!, you have to work");
    //     //res.sendFile(__dirname + "/todo.html");
    //     res.render("list", {
    //         kindOfDay: day + "Weekday"
    //     })
    //}
    //res.send();
});

// we cannot have multiple sendFile.

app.post("/", (req, res)=>{
    var action = req.body.actionItem;
    actions.push(action);
    // We may try to render here but the scope of
    //action item and kindOfDay wont be as expected.
    //res.render('list', {NewItem : actionItem});
    res.redirect("/");
});