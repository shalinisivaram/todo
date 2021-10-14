import React, { useEffect, useState } from 'react';
import AddForm from './components/addform';
import TodoList from './components/todo';
import TodoService from './services/communication';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import './App.css'

const App = () => {
  const [todos,setTodos] = useState([])
  const [newTitle,setNewTitle] = useState('')
  const [newDescription,setNewDescription] = useState('')
  const [newName,setNewName] = useState('')

useEffect(() => {
  TodoService.getAll()
  .then(intialData => {
    setTodos(intialData)
  })
},[])

const headStyle = {
  fontStyle:'italic',
  fontSize:30,
  color:'#3399FF',
  textAlign:'center'
}

const addTodo = (event) => {
  event.preventDefault();
  const todoObject = {
    title:newTitle,
    description:newDescription,
    name:newName,
    id:todos.length+1,
    important:Math.random() < 0.5,
    taskStatus:String
  }

  TodoService.create(todoObject)
  .then(returnedData => {
    setTodos([...todos, returnedData])
    setNewTitle('')
    setNewDescription('')
    setNewName('')
  })
}
const addNewTitle = (event) => {
  console.log(event.target.value)
  setNewTitle(event.target.value)
}
const addNewDescription = (event) => {
  console.log(event.target.value)
  setNewDescription(event.target.value)
}
const addNewName = (event) => {
  console.log(event.target.value)
  setNewName(event.target.value)
}
return(
  <>
    <Router>
      <Navigation/> <br/><br/>
      <Switch>
        <Route path="/todo"> 
          <TodoList headStyle = {headStyle} todos={todos} setTodos={setTodos}/>
        </Route>
        <Route path="/">
          <AddForm headStyle = {headStyle} onSubmit={addTodo} newTitle={newTitle} addNewTitle={addNewTitle} addNewDescription={addNewDescription} 
          addNewName={addNewName} newDescription={newDescription} newName={newName}/>
        </Route>
      </Switch>
    </Router>
  </>
)
}
export default App;
