import React from 'react'
import { Form, Button } from 'react-bootstrap'
const AddForm = ({onSubmit,newTitle,newDescription,newName,addNewTitle,addNewDescription,addNewName,headStyle}) => {
    return(
        <div>
            <h1 style={headStyle}> Add New ToDo Task</h1>
            <form method='post' onSubmit={onSubmit}>
            <Form.Group>
            <Form.Control size="lg" as="textarea" value = {newTitle} onChange={addNewTitle} id="title" placeholder="TODO Title"/> <br/>
            <Form.Control size="text" as="textarea" value = {newDescription} onChange= {addNewDescription}  placeholder="Description" id="placeholder"/> <br/>
            <Form.Control size="text" as="textarea" value={newName} onChange={addNewName} id="name" placeholder="Task Perfomer"/> <br/>
            <Button varient="primary" type="text">Save</Button>
            </Form.Group>
                
            </form>
        </div>
    
    )
}




export default AddForm
