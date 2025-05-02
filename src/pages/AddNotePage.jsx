import { useState, useEffect } from 'react';

function AddNotePage({ addNote, editing, defaultText }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editing) setText(defaultText);
  }, [editing, defaultText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addNote(text);
    setText('');
  };

  return (
    <div>
      <h2>{editing ? 'Notu Güncelle' : 'Not Ekle'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Not girin..."
        />
        <button type="submit">{editing ? 'Güncelle' : 'Ekle'}</button>
      </form>
    </div>
  );
}

export default AddNotePage;
