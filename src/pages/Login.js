import styled from 'styled-components';
import AuthForm from '../components/AuthForm';

export default function Login(){

    return(
        <>
        <AuthStyle>
            <AuthForm/>
        </AuthStyle>
        </>
    );
}

const AuthStyle = styled.div`

    width:100%;
    height: 100%;
    min-height: 100vh;
`