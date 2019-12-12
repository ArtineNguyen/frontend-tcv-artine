import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

export default function Event() {
    const [titleEvent, setTitleEvent] = useState('')
    const [imgEvent, setImgEvent] = useState('')
    const [bodyEvent, setbodyEvent] = useState('')

    const create_Event = async()=>{
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
        <div class="container">
            <Form onSubmit={(e)=> handleSubmit(e)}>
                <Form.Group className="section-title title-left">
                    <Form.Label >Input Title</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <span>Experience God's Presence</span>
				    <h2>Upcoming Events</h2>
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
			<div class="section-title title-left">
			</div>
			<div class="event-list">
				<div class="el-item">
					<div class="row">
						<div class="col-md-4">
							<div class="el-thubm set-bg" data-setbg="img/event/1.jpg"></div>
						</div>
						<div class="col-md-8">
							<div class="el-content">
								<div class="el-header">
									<div class="el-date">
										<h2>18</h2>
											Dec
									</div>
									<h3>Give To Help Each Child Grow Up Healthy</h3>
									<div class="el-metas">
										<div class="el-meta"><i class="fa fa-user"></i> Vincent John</div>
										<div class="el-meta"><i class="fa fa-calendar"></i> Monday, 08:00 Am </div>
										<div class="el-meta"><i class="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
									</div>
								</div>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
								<a href="" class="site-btn sb-line">Read more</a>
							</div>
						</div>
					</div>
				</div>
            </div>
            <div class="pagination-area">
				<ul class="pageination-list">
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">Next <i class="fa fa-angle-double-right"></i></a></li>
				</ul>
				<p>Page 1 of 08 results</p>
			</div>
        </div>
    )
}
