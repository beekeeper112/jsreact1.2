import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AddNotePage from './pages/AddNotePage';
import NotesPage from './pages/NotesPage';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  const addNote = (note) => {
    if (editIndex !== null) {
      const updated = [...notes];
      updated[editIndex] = note;
      setNotes(updated);
      setEditIndex(null);
    } else {
      setNotes([...notes, note]);
    }
    navigate('/notes');
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  const editNote = (index) => {
    setEditIndex(index);
    navigate('/add');
  };

  return (
    <div style={{ padding: 20 }}>
      <nav>
        <Link to="/add">Not Ekle</Link>
        <Link to="/notes">Notlar</Link>
      </nav>
      <Routes>
        <Route
          path="/add"
          element={
            <AddNotePage
              addNote={addNote}
              editing={editIndex !== null}
              defaultText={notes[editIndex] || ''}
            />
          }
        />
        <Route
          path="/notes"
          element={
            <NotesPage
              notes={notes}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
