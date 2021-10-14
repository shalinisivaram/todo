const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(cors())
const Todo = require('./models/todo')

app.get('/api/todos',(request,response) => {
    Todo.find({}).then(todos => {
        response.json(todos)
    })
})

app.post('/api/todos',(request,response)=>{
    const body = request.body

    const todo = new Todo({
        title:body.title,
        description:body.description,
        name:body.name,
        important:false,
        taskStatus:'Pending'
    })
    todo.save().then(savedtodo => {
        response.json(savedtodo)
    })
})

app.delete('/api/todos/:id',(request,response) =>{
    Todo.findByIdAndRemove(request.params.id)
    .then(result => {
        response.status(404).end()
    })
})

app.get('/api/todos/:id',(request,response) => {
    Todo.findById(request.params.id)
    .then(todo => {
        response.json(todo)
    })
})

app.put('/api/todos/:id',(request,response) => {
    const body = request.body
    const todo = {
        title:body.title,
        description:body.description,
        name:body.name,
        important:body.important,
        taskStatus:body.taskStatus
    }
    Todo.findByIdAndUpdate(request.params.id,todo,{new:true})
    .then(updatedTodo => {
        response.json(updatedTodo)
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT,() =>{
    console.log(`server runing in port ${PORT}`)
})