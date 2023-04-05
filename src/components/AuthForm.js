import styled from "styled-components";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export default function AuthForm({type}){

    return(
        <>
        <div>
            <AuthFormStyle>
                <TextField id="email" label="E-mail" required variant="standard"/>
                {type === "sign-up"? 
                    <TextField id="email" label="Confirm E-mail" required variant="standard"/> :    
                    <></>
                }
                <TextField id="password" label="Password" variant="standard" required />
                {type === "sign-up"? 
                    <TextField id="email" label="Confirm-Password" required variant="standard"/> :    
                    <></>
                }
                <Button>{type === "sign-up"? "Sign up": "Sign in"}</Button>
            </AuthFormStyle>
        </div>
        </>
    );
}

const AuthFormStyle = styled.form`

`