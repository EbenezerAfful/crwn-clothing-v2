import { useState } from "react";
import { createAuthUserWithEmailPassword,createUserDocumentFromAuth } from "../../Utils/firebase/firebase.utils";
import FormInput from "../Form-Input/Form-Input.component";
import './SignUp-Form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = ()=>{
    const [formFields, setFormFields]= useState(defaultFormFields);
    const{displayName,email,password,confirmPassword}= formFields;
    const restFormfields=()=>{setFormFields(defaultFormFields)}
    const handleChange=(event)=>{const {name ,value}=event.target;
    setFormFields({...formFields,[name]:value});}

    const handleSubmit=async(event)=>{event.preventDefault();
        if(password!== confirmPassword){alert("passwords do not match"); return;}
        try {const {user}= await createAuthUserWithEmailPassword(email,password)
        restFormfields();
        await createUserDocumentFromAuth(user,{displayName})}
        catch (error) {
        if(error.code==='auth/email-already-in-use'){alert('email already in use');} 
        else{console.log('user created encountered an error', error)}}}
        



    return(
        <div className="sign-up-container">
            <h2>Don't have an account??</h2>
            <spam>Sign Up your email and password </spam>
            <form onSubmit={handleSubmit}>
            <FormInput 
            label= {'Dispaly Name'} 
            type="text" required 
            onChange={handleChange} 
            name="displayName" 
            value={displayName}/>

            <FormInput 
            label='Email' 
            type="email" 
            required onChange={handleChange} 
            name="email" 
            value={email}/>

            <FormInput 
            label='Password' 
            type="password" 
            required 
            onChange={handleChange} 
            name="password" 
            value={password}/>

            <FormInput 
            label="Confirm Password" 
            type="password" 
            required onChange={handleChange} 
            name="confirmPassword" 
            value={confirmPassword}/>
            <Button type="submit">Sign Up</Button>
            </form>
            
        </div>
    )

}

export default SignUpForm;