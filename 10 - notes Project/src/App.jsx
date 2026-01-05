import React, { useState } from 'react'

const App = () => {

  const [note, setNote] = useState("")
  const [description, setDescription] = useState("")
  const [notes, setNotes] = useState([]);
  const [noteIndex, setNoteIndex] = useState(null)


  const handleSubmit = (e) => {
e.preventDefault();

    if(note != "" && description != ""){
          const notesCopied = [...notes];

    if (noteIndex !== null) {
      notesCopied[noteIndex].note = note;
      notesCopied[noteIndex].description = description;
      setNoteIndex(null)
    } else {
      notesCopied.push({ note, description });
    }
    setNotes(notesCopied);
    setNote("");
    setDescription("");
    }else{
      alert("write note before submit");
    }

    


  }

  const handleEdit = (index) => {
    setNoteIndex(index);
    const notesCopied = [...notes];
    setNote(notesCopied[index].note)
    setDescription(notesCopied[index].description)
  }
  const handleDelete = (x) => {

    const notesCopied = [...notes];
    console.log(notesCopied[x]);
    notesCopied.splice(x, 1);
    setNotes(notesCopied);

  }

  return (
    <div className='sections-outer'>

      <form className='input-section' onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <input onChange={(e) => {
          setNote(e.target.value)
        }} value={note} type="text" placeholder='note title' />
        <textarea onChange={(e) => {
          setDescription(e.target.value)
        }} value={description} name="" id="" placeholder='detailed note'></textarea>
        <button>Submit</button>
      </form>
      <div className='notes-section'>

        <div className='note-cards'>

          {notes.map((value, index) => {
            return (
              <div key={index} className='note-card'>
                <h1>Note : {value.note}</h1>
                <p>Description : {value.description}</p>
                <div className='action-buttons'>
                  <button className='edit-btn' onClick={() => {
                    handleEdit(index);
                  }}>Edit</button>
                  <button className='delete-btn' onClick={(() => {
                    handleDelete(index)
                  })}>Delete</button>
                </div>
              </div>
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default App