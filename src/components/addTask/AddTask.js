import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { addtask } from "../redux/action/action"

const AddTask = () => {
    const [newtext, setNewText] = useState("")
    const despatch = useDispatch()

    const handelChange = (e) => {
        e.preventDefault();
        if (newtext) {
            despatch(addtask({ id: Math.random, text: newtext, isDone: false }));
            setNewText("")
        } else {
            alert("hello")
        }


    }
    return (
        <div style={{ width: "300px", display: "flex" }}>
            <Form >
                <Form.Group >

                    <Form.Control placeholder="Add Task" onChange={(e) => setNewText(e.target.value)} value={newtext} />

                </Form.Group>


            </Form>
            <Button variant="primary" type="submit" onClick={handelChange} style={{ marginLeft: "30px" }}>
                Add
            </Button>




        </div>
    )
}

export default AddTask