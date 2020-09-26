import React from "react";

class Note extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            note:this.props.value,
            
        };
        
    }
   
    handlechange = (e)=>{
        console.log(e.target)
        const val = e.target.value;
        this.setState({
            ...this.state.note, [e.target.name]: val
          });
    }

    
render(){
    console.log("xwc",this.state.note);
    return (
        <form className="note"  >
    
            <input name="topic" type="text" key="1" value={this.state.note.topic} onChange={this.handlechange} onBlur={()=>this.props.onEdit(this.state.note)}/>
            <textarea name='bodytxt' cols="30" rows="4" value={this.state.note.bodytxt} onChange={this.handlechange} onBlur={()=>this.props.onEdit(this.state.note)}/>
            <button type="button" onClick={()=>this.props.onDelete(this.props.value.key)}>Trash</button> 
        
        </form>
    
    )
}
    


}
export default Note;