import '/Users/pappy/pappy_clothing/src/components/Form-Input/styles/Form-Input.styles.scss'

const FormInput=({label,...otherprops})=>{
    return(<div className="group"> 
          <input className="form-input" {...otherprops}/>
         { label &&
           (<label className={`${otherprops.value.length ?'shrink':''}form-input-label`}>{label}</label>)}
    
    </div>);
};



export default FormInput;