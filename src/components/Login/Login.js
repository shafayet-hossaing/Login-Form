import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InitializeAuthentication from '../../firebase/Firebase.initialize';
import useUser from '../../hooks/useUser';


InitializeAuthentication()
const Provider = new GoogleAuthProvider()
const auth = getAuth()





const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [user, setUser] = useUser()
    const history = useHistory()


    // Creating User
    const loginUser = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            setUser(user);
            history.push('/home')
        }).catch(error => {
            console.log(error.message);
        })
    }



    // Taking Email
    const inputEmailValue = e => {
        setEmail(e.target.value)
    }

    // Taking Password
    const inputPasswordValue = e => {
        setPassword(e.target.value)
    }



    return (
        <div className="container" style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            
            <Box
                sx={{width: "700px"}}
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={loginUser}
                >
                <Typography variant='h4'sx={{textAlign: "center", marginBottom: '20px', fontWeight: "bold"}} color='primary'>
                    Please Log-In
                </Typography>
                <div>
					<TextField
						id='filled-error'
						label='Email'
                        style={{marginBottom: "25px"}}
                        fullWidth={true}
                        onBlur={inputEmailValue}
					/>
				</div>
                <div>
                    <TextField
                        style={{marginBottom: "25px"}}
                        id="filled-error-helper-text"
                        label="Password"
                        fullWidth={true}
                        onBlur={inputPasswordValue}
                    />
                </div>
                <div>
                <Button type="submit" variant="contained">Login</Button>
                <Link style={{marginLeft: "30px", textDecoration: "none"}} to="/registration">Don't Have An Account?</Link>
                </div>
            </Box>
        </div>
    );
};

export default Login;