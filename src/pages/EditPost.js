import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { resolve } from 'dns'
export default function EditPost(props) {
    const history = useHistory()
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [img, setImg] = useState()
    const [currentUserid, setCurrentUserid] = useState()
    const getPost = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/single-post/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (resp.ok) {
            const data = await resp.json()
            setTitle(data.title)
            setBody(data.body)
            setImg(data.img)
            setCurrentUserid(data.userid)
            console.log(data)
        }
    }
    useEffect(() => {
        getPost()
    }, [])
    if ((props.currentUser && props.currentUser.id) == currentUserid) history.goBack()
console.log(body, title, img, "here is change")
const editPost= async()=>{
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/edit-post/${id}`,{
        method : "PUT",
        headers: {
            Authorization: localStorage.getItem('token'),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "title" : title,
            "body": body,
            "img": img
        })
    })
    if (resp.ok) history.goBack()
}
const ChangePost = (e)=>{
    e.preventDefault()
    editPost()
}
    return (
        <div>
            <Form onSubmit={(e)=>{ChangePost(e)}}>
                <Form.Group>
                    <Form.Label>Input your Title</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={title}
                        onChange={(p) => setTitle(p.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input your Body</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={body}
                        onChange={(p) => setBody(p.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input your Image</Form.Label>
                    <Form.Control
                        type="url"
                        defaultValue={img}
                        onChange={(p) => setImg(p.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Change</Button>
            </Form>
        </div>
    )
}
