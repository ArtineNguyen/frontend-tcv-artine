import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
export default function Forgot() {
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')

    const sendEmail = async () => {
        const resp = await fetch('https://127.0.0.1:5000/forgot-password', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'email': email })
        })
        if (resp.ok) { 
            const data = await resp.json(); 
            if (data.success){
                setState(data.right)
            }
            if (!data.success){
                setState(data.wrong)
            }
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        sendEmail()
    }
    return (
        <div>
            <Form onChange={e => setEmail(e.target.value)} onSubmit={(e) => handelSubmit(e)}>
                <Form.Label>input your email</Form.Label>
                <Form.Control type="email" name="email" />
                <Button type="submit">pls work</Button>
                <p>{state}</p>
            </Form>
        </div>
    )
}
