function NotesPage({ notes, deleteNote, editNote }) {
  return (
    <div>
      <h2>Notlar</h2>
      {notes.length === 0 ? (
        <p>Henüz not yok.</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note}
              <button onClick={() => editNote(index)} style={{ marginLeft: 10 }}>Düzenle</button>
              <button onClick={() => deleteNote(index)} style={{ marginLeft: 5, backgroundColor: 'red' }}>Sil</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesPage;
