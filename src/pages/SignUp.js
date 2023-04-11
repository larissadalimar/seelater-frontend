import AuthForm from "../components/AuthForm";
import { PageStyle } from "../assets/styles/PageStyle";

export default function SignUp(){

    return(
        <>
        <PageStyle>
            <AuthForm type={"sign-up"}/>
        </PageStyle>
        </>
    );
}