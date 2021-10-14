const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to',url)
mongoose.connect(url,{})
.then(result => {
    console.log('connected to DB')
})
.catch(error => {
    console.log('error connecting to DB')})

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    name:String,
    important:Boolean,
    taskStatus:String
})

todoSchema.set('toJSON',{
    transform:(document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Todo',todoSchema)