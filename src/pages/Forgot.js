import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
export default function Forgot() {
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')

    const sendEmail = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/forgot-password`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'email': email })
        })
        if (resp.ok) {
            const data = await resp.json();
            if (data.success) {
                setState(data.right)
            }
            if (!data.success) {
                setState(data.wrong)
            }
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        sendEmail()
    }
    return (
        <Container md={{ span: 6, offset: 3 }}>
            {/* <Form >
                <Form.Label>input your email</Form.Label>
                <Form.Control type="email" name="email" />
                <Button type="submit">pls work</Button>
                <p>{state}</p>
            </Form> */}
            <Form>
                <Form.Group onChange={e => setEmail(e.target.value)} onSubmit={(e) => handelSubmit(e)} controlId="formBasicEmail">
                    <Form.Label>Input your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send New Password
                </Button>
            </Form>
        </Container>
    )
}
