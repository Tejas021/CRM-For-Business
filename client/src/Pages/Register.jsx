import React, { useState } from 'react'
import '../styles/auth.scss'
import {
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    TextField
}
    from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { publicRequest } from '../axios';
import { setUser } from '../redux/reducers/auth';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    let navigate = useNavigate();


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await publicRequest.post('/auth/register', { username,email, password })
            console.log(res.data)
            dispatch(setUser(res.data))
            if (checked) {
                localStorage.setItem("x-auth-token", res.data.accessToken)
            }
            setError('')
            navigate("/");
        } catch (err) {
            // setError(err.response.data)
            console.log(err)
        }
    }

    return (
        <div>
            <div className='authForm'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <TextField
                        name="username"
                        type="text"
                        label="Username"
                        required
                        className='inpts'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <TextField
                        name="email"
                        type="email"
                        label="Email"
                        required
                        className='inpts'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <TextField
                        name="password"
                        type={show ? "text" : "password"}
                        label="Password"
                        required
                        className='inpts'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {
                                        show ?
                                            <VisibilityIcon style={{ cursor: 'pointer' }} onClick={() => setShow(!show)} /> :
                                            <VisibilityOffIcon style={{ cursor: 'pointer' }} onClick={() => setShow(!show)} />
                                    }
                                </InputAdornment>
                            ),
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChange} />}
                        label="Remember me"
                    /><br />
                    <p>Dont have an Account?<Link to='/login'><span style={{
                        textDecoration: 'underline', marginLeft: '2%'
                    }}>Login</span></Link></p>
                    <Button className='btn' type='submit' variant="contained">Register</Button>
                </form>
            </div>
            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
        </div>
    )
}

export default Register