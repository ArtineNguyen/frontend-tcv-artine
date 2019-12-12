import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
export default function Post(props) {
    const [title, setTitle] = useState('')
    const [body, setbody] = useState('')
    const [img, setImg] = useState('')
    // currentUser = props.currentUser
    // history = useHistory()
    // if (!currentUser) history.pushState('/')

    const create_post = async()=>{
        const resp = await fetch('https://127.0.0.1:5000/post/create',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "title": title,
                "body": body,
                "img": img
            })
        })
        if(resp.ok){
            const data = await resp.json()
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        create_post()
    }
    return (
        <div>
            <Form onSubmit={(e)=> handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Input Title</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input body</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setbody(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input image URL</Form.Label>
                    <Form.Control
                        type="url"
                        onChange={(e) => setImg(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Post</Button>
            </Form>
        </div>
    )
}
