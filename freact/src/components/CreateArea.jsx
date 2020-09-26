import React from "react";
//import { useState } from "react";
import { useForm} from "react-hook-form"
import { useState} from "react";


const CreateArea = (props) =>{

    const {register,handleSubmit,reset} = useForm();
    const [visible,makevisible] = useState('hidden');


    const handleBlure = (data)=>{
        props.value(data)
        makevisible("hidden")
       reset();
    }
    
   
    return (
        
        <form className="create-note"  action=""  onMouseLeave={handleSubmit(handleBlure,reset)}>
            <input name="topic" placeholder="subject" autoComplete="off" type="input" onFocus={()=>makevisible("")} ref={register}  />
            <textarea name="bodytxt" placeholder="here is txt" id="" cols="30" rows="10" ref={register} hidden={visible} />
            <input hidden="hidden" />
        </form>
      
    )
}

export default CreateArea;