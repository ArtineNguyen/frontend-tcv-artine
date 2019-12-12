import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAlert } from "react-alert"

export default function Login(props) {
    const [effect, seteffect] = useState('cont')
    const [visibleBtn, setVisibleBtn] = useState('visible')
    const [visibleBtn2, setVisibleBtn2] = useState('hidden')
    const [state, setState] = useState('')
    const history = useHistory()
    const alert = useAlert()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState('')
    const changeEffect = () => {
        seteffect('s--signup cont')
        setVisibleBtn('hidden')
        setVisibleBtn2('visible')
    }
    const changeEffect2 = () => {
        seteffect('cont')
        setVisibleBtn2('hidden')
        setVisibleBtn('visible')
    }
    const loginUser = async () => {
        const resp = await fetch('https://127.0.0.1:5000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        if (resp.ok) {
            const data = await resp.json()
            if (data.success) {
                localStorage.setItem('token', data.token)
                alert.show("Successfully")
                history.push("/")
            } else {
                alert.show("Didnt work")
            }
        }
    }

    const signupUser = async () => {
        const resp = await fetch('https://127.0.0.1:5000/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'email': email,
                'password': password,
                'name': name
            })
        })
        if (resp.ok) {
            const data = await resp.json()
            setState(data.message)
        }
    }

    if (props.currentUser) history.push('/')
    console.log(email, password)
    return (
        <div>
            <div>
                <div className={effect}>
                    <div className="form sign-in">
                        <h2>Welcome back,</h2>
                        <label>
                            <span>Email</span>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                        </label>

                        <label>
                            <span>Password</span>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                        </label>
                        <Link to="/forgot" className="forgot-pass">Forgot password?</Link>
                        <button type="submit" className="submit" onClick={loginUser}>Sign In</button>
                        <a href="https://127.0.0.1:5000/loginfacebook/facebook" className="fb-btn">Join with <span>facebook</span></a>
                    </div>
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                                <h2>New here?</h2>
                                <p>Sign up and discover great amount of new opportunities!</p>
                            </div>
                            <div className="img__text m--in">
                                <h2>One of us?</h2>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </div>
                            <div className="img__btn" style={{ visibility: visibleBtn }} onClick={() => { changeEffect() }}>
                                <span className="m--up" >Sign Up</span>

                            </div>
                            <div className="img__btn" onClick={() => { changeEffect2() }} style={{ visibility: visibleBtn2 }}>
                                <span className="m--in" >Sign In</span></div>
                        </div>
                        <div className="form sign-up">
                            <h2>Time to feel like home,</h2>
                            <label>
                                <span>Name</span>
                                <input type="text" onChange={(e) => setName(e.target.value)} />
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <button type="button" className="submit" onClick={() => signupUser()}>Sign Up</button>
                            <p>{state}</p>
                            <a href="https://127.0.0.1:5000/loginfacebook/facebook" className="fb-btn">Join with <span>facebook</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}