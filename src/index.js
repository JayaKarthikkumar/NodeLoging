const express = require("express")
const app = express()
const path = require("path")
const hbs=require('hbs')
const LogInCollection = require("./mongo")


const templatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})


app.post('/signup', async (req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.password
}

await LogInCollection.insertMany([data])

res.render("home")


})


app.listen(3000,()=>{
    console.log("port connected");
})