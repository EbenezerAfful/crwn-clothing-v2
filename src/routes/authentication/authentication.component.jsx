import SignUpForm from "../../components/SignUp-Form/SignUp-Form.component";
import SignInForm from "../../components/Sign-In-Form copy/Sign-In-Form.component";
import'./authentication.styles.scss'

const Authentication=()=>{
    return(
        <div className="authentication-container">
           <SignInForm/>

            <SignUpForm/>
        </div>
    );}





export default Authentication;