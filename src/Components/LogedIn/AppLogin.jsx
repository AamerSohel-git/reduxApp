import {
    Typography, Grid,
    TextField,
    Paper,
    Button
} from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


export const AppLogin = () => {
    const [userData, setUserData] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleLogin = async() => {
        const response = await axios.post(`http://localhost:7000/api/login`, userData)
        dispatch({ type: "ACCESS_TOKEN", payload: response.data.token })
    }
    return (
        <div>
            <Typography variant='h1'>Redux App Login</Typography>
            <div style={{ padding: 30 }}>
                <Paper>
                    <Grid
                        container
                        spacing={3}
                        direction={'column'}
                        justify={'center'}
                        alignItems={'center'}
                    >
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                name="userName"
                                value={userData?.userName}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                name="password"
                                value={userData?.password}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant='contained'
                                disabled={!userData?.userName || !userData?.password}
                                onClick={handleLogin}
                            > Login </Button>
                        </Grid>
                    </Grid>
                </Paper>

            </div>
        </div>
    )
}
