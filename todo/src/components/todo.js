import React, {  useState } from 'react'
import TodoService from '../services/communication'
import { Button} from 'react-bootstrap'
import { Table,Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const TodoList = ({todos,setTodos,headStyle}) => {
const [showAll,setShowAll] = useState(true)
const toggleImportanceOf = (id) => {
    const todo = todos.find(t => t.id === id)
    const changedTodo = {...todo,important: !todo.important}
    TodoService.update(id, changedTodo)
    .then(returnedTodo => {
        setTodos(todos.map(todo => todo.id !== id ? todo : returnedTodo))
    })
    }
const taskComplete = (id) => {
    const todo = todos.find(t => t.id === id)
    const completedTodo = {...todo,taskStatus :'Completed'}
    TodoService.update(id,completedTodo)
    .then(returnedTodo => {
        setTodos(todos.map(todo => todo.id !== id ? todo :returnedTodo))
    })
}
const buttonStyle = {
    textAlign:'center',
    position:'relative',
    top:25
}

const todoShow = showAll ? todos : todos.filter(todo => todo.important === true)

   return (
        <div>
        <h1 style={headStyle}>Tasks</h1>
        <div style={buttonStyle}>
        <Button varient="primary" size="lg" onClick={() => setShowAll(!showAll)}>Show {showAll?'Important':'All'} Task</Button>
        </div>
        <br/> <br/>
        <Table style={{"fontSize":20}} >
        <Thead>
            <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Task Perfomer</Th>
            <Th>Task Importance</Th>
            <Th>Change Task Importance</Th>
            <Th>Task Status </Th>
            </Tr>
        </Thead>
        <Tbody>
            {todoShow.map(todo =>
                <Tr key={todo.id}>
                    <Td>{todo.title}</Td> 
                    <Td>{todo.description} </Td>
                    <Td>{todo.name}</Td>   
                    <Td>{todo.important ?<p style={{'color':'red', 'fontWeight':'bold'}}> Important </p> : 'Not Important'}</Td> 
                    <Td> <button onClick={() => toggleImportanceOf(todo.id)}>{todo.important ? 'make not important':'make important'}</button></Td>
                    <Td >{todo.taskStatus === 'Completed'? <p style={{"color":'green','fontWeight':'bold'}}>{todo.taskStatus} </p>:'Pending'} {todo.taskStatus === 'Pending' ? <Button 
                     variant="primary" id="status" onClick={() => taskComplete(todo.id)}>Done</Button> : '' }</Td>
                    
                </Tr>
            )}
        </Tbody>
        </Table>
        </div>
    )
}

export default TodoList