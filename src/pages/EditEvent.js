import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
export default function EditEvent(props) {
    const history = useHistory()
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [img, setImg] = useState()
    const [currentUserid, setCurrentUserid] = useState()
    const[year, setYear] = useState(0)
    const[month, setMonth] = useState(0)
    const[day, setDay] = useState(0)
    const[hour, setHour] = useState(0)
    const[minute, setMinute] = useState(0)


    const getEvent = async()=>{
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/event/single-event/${id}`,{
            headers:{
                "Content-Type": "application/json",
            }
        })
        if (resp.ok){
            const data = await resp.json()
            setTitle(data.title)
            setBody(data.body)
            setImg(data.img)
            setCurrentUserid(data.userid)
            console.log(data)
        }
    }
    useEffect(() => {
        getEvent()
    }, [])
    const change = async() =>{
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/event/change/${id}`,{
            method :"PUT",
            headers:{
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "title" : title,
                "body": body,
                "img": img,
                "year": year,
                "day": day,
                "month": month,
                "hour": hour,
                "minute":minute
            })
        })
        if (resp.ok) history.goBack()
    }
    const changEvent = (e)=>{
        e.preventDefault()
        change()
    }
    return (
        <div>
            <Form onSubmit={(e)=>changEvent(e)}>
                <Form.Group>
                    <Form.Label>Input your Title</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input your Body</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={body}
                        onChange={(e)=>setBody(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input your Image</Form.Label>
                    <Form.Control
                        type="url"
                        defaultValue={img}
                        onChange={(e)=>setImg(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input year</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) => setYear(e.target.value)}
                        defaultValue={year}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input month</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) => setMonth(e.target.value)}
                        defaultValue={month}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input day</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) => setDay(e.target.value)}
                        defaultValue={day}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input hour</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) => setHour(e.target.value)}
                        defaultValue={hour}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input minute</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) => setMinute(e.target.value)}
                        defaultValue={minute}
                    />
                </Form.Group>
                <Button type="submit">Change</Button>
            </Form>
        </div>
    )
}
