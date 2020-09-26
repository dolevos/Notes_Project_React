import React from "react";
//import NoteEdit from "./NoteEdit"

class NoteEdit extends React.Component{
    
constructor(props) {
    super(props);
    this.state = {
        
        
    }
    console.log("wrrrw1",this.props);
}
handleChange=(event)=> {
    const val = event.target.value;
    this.setState({
        ...this.state, [event.target.name]: val
      });
}

render(){
    console.log("wrrrw",this.state);
    return (
        <form className="note" onBlur={()=>this.props.onEdit(this.state)}>
    
            <input name="topic" type="text" key="1" value={this.props.value.topic} onChange={this.handleChange} />
            <textarea name='bodytxt' cols="30" rows="4" value={this.props.value.bodytxt} onChange={this.handleChange}/>
            <button type="button" onClick={()=>this.props.onDelete(this.props.value.key)}>Trash</button>
        
        </form>
    
    )
    
}

}
export default NoteEdit;