import React from "react";
import { useState} from "react";


const Note = (props) =>{
    
    const [visible,makevisible] = useState(props.value);

    
    const handlechange = (e)=>{
        const val = e.target.value;
        makevisible({...visible,[e.target.name]: val});
       
    }
    console.log(visible)
return (
    <form className="note"  >

        <input name="topic" type="text" value={visible.topic} onChange={handlechange} onBlur={()=>props.onEdit(visible)}/>
        <textarea name='bodytxt' cols="30" rows="4" value={visible.bodytxt} onChange={handlechange} onBlur={()=>props.onEdit(visible)}/>
        <button type="button" onClick={()=>props.onDelete(props.value.key)}>Trash</button> 
    
    </form>

)
    


}
export default Note;