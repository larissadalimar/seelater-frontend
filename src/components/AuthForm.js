import styled from "styled-components";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import logo from "../assets/see-later-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm({type}){

    const navigate = useNavigate();
    const [form, setForm] = useState(type !== "sign-up"? {
        email: '',
        password: ''
    }: {
        email: '',
        confirm_email: '',
        password: '',
        confirm_password: ''
    });

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    function loginOrSignUp(e){
        
        e.preventDefault();
        navigate("/feed");
    }

    return(
        <>
        <AuthComponentStyle>
            <Logo src={logo} alt='logo'/>
            <AuthFormStyle onSubmit={loginOrSignUp}>
                <TextField id="email" name="email" label="E-mail" required variant="standard" type={"email"} value={form.email} onChange={handleForm}/>
                {type === "sign-up"? 
                    <TextField id="email" name="confirm_email" label="Confirm E-mail" required variant="standard" type={"email"} value={form.confirm_email} onChange={handleForm}/> :    
                    <></>
                }
                <TextField id="password" name="password" label="Password" variant="standard" required type={"password"} value={form.password} onChange={handleForm}/>
                {type === "sign-up"? 
                    <TextField id="email" name="confirm_password" label="Confirm Password" required variant="standard" type={"password"} value={form.confirm_password} onChange={handleForm}/> :    
                    <></>
                }
                <Button variant="outlined" type="submit">{type === "sign-up"? "Sign up": "Sign in"}</Button>
            </AuthFormStyle>
        </AuthComponentStyle>
        </>
    );
}

const Logo = styled.img`

    width: 60%;
    height: 30%;
    margin-bottom: 5%;
`
const AuthComponentStyle = styled.div`

    width: 90%;

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`
const AuthFormStyle = styled.form`

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 100%;

    .MuiFormControl-root {
        margin-top: 10%;
        width: 80%;
    }

    .MuiButtonBase-root {
        margin-top: 10%;
    }

`