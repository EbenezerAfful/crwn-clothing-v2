import {signInWithGooglePopup, createUserDocumentFromAuth,signInWithGoogleRedirect} from "../../Utils/firebase/firebase.utils";
import SignUpForm from "../../components/SignUp-Form/SignUp-Form.component";

const SignIn=()=>{
  const logGoogleUser = async()=>
    {const {user}=await signInWithGooglePopup(); 
    createUserDocumentFromAuth(user)};
   
   
    

    return(
        <div>
            <h1>
             sIGN IN pAGE
            </h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
        </div>
    );}





export default SignIn;