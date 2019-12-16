import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

export default function Post(props) {
    const [title, setTitle] = useState('')
    const [body, setbody] = useState('')
    const [img, setImg] = useState('')
    const [post, setPost] = useState([])
    // currentUser = props.currentUser
    // history = useHistory()
    // if (!currentUser) history.pushState('/')
    useEffect(() => {
        getPost()
    }, [])  
    const create_post = async () => {
        const resp = await fetch('https://127.0.0.1:5000/post/create', {
            method: "POST",
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "title": title,
                "body": body,
                "img": img
            })
        })
        if (resp.ok) {
            const data = await resp.json()
            getPost()
        }
    }
    const handleSubmit = (p) => {
        p.preventDefault()
        create_post()
    }
    const getPost = async () => {
        const resp = await fetch('https://127.0.0.1:5000/post/render-post', {
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
        if (resp.ok) {
            const data = await resp.json()
            setPost(data)
        }
    }
    const renderPost = post.map(post => {
        return (
            <>
                <h1>{post.title}</h1>
                <img src={post.image} />
                <h2>{post.body}</h2>
                {props.currentUser && props.currentUser.id == post.user_id ? (<>
        <Button onClick={()=> deletePost(post.id)}>Delete</Button>
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>            
                </>) : ""}
            </>
        )
    })
    const deletePost = async(id) => {
        const resp = await fetch(`https://127.0.0.1:5000/post/delete/${id}`,{
        method: 'DELETE',    
        headers:{
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            }
        })
        if (resp.ok) getPost()
    }
    return (
        <div>
            <Form onSubmit={(p) => handleSubmit(p)}>
                <Form.Group>
                    <Form.Label>Input Title</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(p) => setTitle(p.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input body</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(p) => setbody(p.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input image URL</Form.Label>
                    <Form.Control
                        type="url"
                        onChange={(p) => setImg(p.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Post</Button>
            </Form>
            {renderPost}
        </div>
    )
}
