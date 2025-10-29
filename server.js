const express = require('express')

const app = express()
app.use(express.json())
app.get('/resume',
    (request,response)=>{
        const resume = {
            'Name' : 'Prathibha',
            'Gender' : 'female',
            'Place' : 'Kundapura',
            'Branch' : 'CSE',
            'College' : 'SCEM'
        }
response.json(resume)
})

app.get('/bio',
    (request,response)=> {
        const bio = {
            "Role":"Software Engineer",
            "Experience":"Fresher",
            "Hobbies":["Reading","Cooking","Traveling"]
        }
        response.json(bio)
    }
)

app.get('/skills',
    (request,response)=> {
        const skills = {
            "Programming Languages":["C","C++","Java","Python","JavaScript"],
            "Web Technologies":["HTML","CSS","ReactJS","NodeJS","ExpressJS"],
            "Databases":["MySQL","MongoDB"]
        }
        response.json(skills)
    }
)

app.get('/users/:userid',
    (request,response)=>{
        const userId = request.params.userid
        console.log(userId)
        response.send(200)
    }
)

app.get('/login',
    (request,response)=>{
        const email = request.query.emailId;
        const password = request.query.password;
        console.log(email)
        console.log(password)
        response.send(200)
    }
)

app.post('/login',
    (request,response)=>{
        const email = request.body.email;
        const password = request.body.password;
        console.log(email)
        console.log(password)
        response.send(200)
    }
)

//localhost:3000/movies?name=Kantara&director=Rishab Shetty&year=2025&producer=Hombale Films&hero=Rishab Shetty
app.get('/movies',
    (request,response)=>{
        const name = request.query.name;
        const director = request.query.director;
        const year = request.query.year;
        const producer = request.query.producer;
        const hero = request.query.hero;
        console.log(name)
        console.log(director)
        console.log(year)
        console.log(producer)
        console.log(hero)
        response.send(200)
    }
)

app.listen(3000,()=>{
    console.log('Server started!!')
})