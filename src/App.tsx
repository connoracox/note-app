import "./App.css"
import { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
}
const App = () => {
  const [notes, setNotes] = useState<
    Note[]
  >([
    {
      id: 1, 
      title: "note title 1",
      content: "note content 1"
    },
    {
      id: 2, 
      title: "note title 2",
      content: "note content 2"
    },    
    {
      id: 3, 
      title: "note title 3",
      content: "note content 3"
    },    
    {
      id: 4, 
      title: "note title 4",
      content: "note content 4"
    },
  ]);

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  return(
  <div className="app-container">
    <form className="note-form">
      <input
      value={title}
      onChange={(event)=>
      setTitle(event?.target.value)
    }
      placeholder="Title"
      required
      ></input>
      <textarea 
      placeholder="Notes"
      rows={10}
      required
      ></textarea>
      <button type="submit">
        Add Note
      </button>
    </form>
    <div className="notes-grid">
      {notes.map((note)=> (
      <div className="note-item">
        <div className="notes-header">
          <button>x</button>
        </div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
      ))}
    </div>
  </div>
  )
}

export default App
