import React from "react"
import CreateArea from "./CreateArea"
import NoteEdit from "./NoteEdit"
//import Footer from "./Footer";


class Notes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: [{ key:0,topic:"hello", bodytxt:"do it"},
            { key:0,topic:"finnaly", bodytxt:"sucsses"},
            { key:0,topic:"bjbjhb", bodytxt:"do it"},
            { key:0,topic:"finnaly", bodytxt:"sucsses"}
        ]
        };
        
    }
    componentDidMount=()=>{
        if(JSON.parse(localStorage.getItem("saveMyNotes"))){
            this.setState({notes: JSON.parse(localStorage.getItem("saveMyNotes"))})
        }
    }
    componentDidUpdate=()=>localStorage.setItem("saveMyNotes",JSON.stringify(this.state.notes))
    handleChange =(var1) => {
        
        let chk=0;
        (var1.topic===''&&var1.bodytxt==='')?chk+=1:chk=0;
        this.state.notes.map(note=> (note.topic===var1.topic&&note.bodytxt===var1.bodytxt)?chk+=1:chk+=0)
        if(chk===0){
            this.setState( prevState => ({
                notes: [...prevState.notes, var1]
            })) 
        }   
    }
    
    handleEdit =(event)=>{
        
        let notes = [...this.state.notes];
        let index =event.key;
        notes[index] = {...event}
        this.setState({notes});  
    }

    handledelete = (notekey) =>{
        
        const notes = this.state.notes.filter(n => n.key !== notekey);
        this.setState({notes});
        
    }

    render() {
       console.log("rendered",this.state.notes)
        return (
            <div>
                 <CreateArea value={this.handleChange}  />
                 {this.state.notes.map((note,index) =>
                <NoteEdit key={note.key=index} value={note} onEdit={this.handleEdit} onDelete={this.handledelete} /> )}
            </div>
            
        )
    }


}

export default Notes;