import { useEffect, useState } from "react";
import { AddNote, Note } from "../../components/AddNote";
import { NotesList } from "../../components/NotesList";
import { api } from "../../services/api";

function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAddNote = () => {
    fechNotes();
  };

  const fechNotes = () => {
    api.get("/notes").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(() => {
    fechNotes();
  }, []);

  return (
    <div>
      <AddNote onAddNote={handleAddNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export { Home };
