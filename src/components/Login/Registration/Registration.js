import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InitializeAuthentication from '../../../firebase/Firebase.initialize';


InitializeAuthentication()
const Provider = new GoogleAuthProvider()
const auth = getAuth()





const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const history = useHistory()


    // Creating User
    const registerUser = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            settingUserName()
            alert('Registration Successfully Done')
            history.push('/login')
        }).catch(error => {
            setError(error.message);
        })
    }



    // Setting UserName
    const settingUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name 
        }).then(result => {
            
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



    // Taking Name 
    // const takeName = (e) => {
    //     setName(e.target.value)
    // }



    return (
        <div className="container" style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={registerUser}
                >
                <Typography variant='h4'sx={{textAlign: "center", marginBottom: '30px', fontWeight: "bold"}} color='primary'>
                    Please Register
                </Typography>
                <div>
                    <TextField
                    style={{marginRight: "25px", marginBottom: "20px"}}
                    id="outlined-error"
                    label="First Name"
                    onBlur={(e) => setName(e.target.value)}
                    />
                    <TextField
                    id="outlined-error-helper-text"
                    label="Last Name"
                    onBlur={(e) => setName(name + " " + e.target.value)}
                    />
                </div>
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
                <Button type="submit" variant="contained">Submit</Button>
                <Link style={{marginLeft: "30px", textDecoration: "none"}} to="/login">Already Registered?</Link>
                </div>
            </Box>
        </div>
    );
};

export default Registration;