import { useEffect, useState } from "react";
import { AddNote } from "../../components/AddNote";
import { NotesList } from "../../components/NotesList";
import { api } from "../../services/api";
import { INote } from "../../types/global";
import { Container } from "./styles";

// import { Container } from "./styles.ts";

function Home() {
  const [notes, setNotes] = useState<INote[]>([]);

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
    <Container>
      <AddNote onAddNote={handleAddNote} />
      <NotesList notes={notes} />
    </Container>
  );
}

export { Home };
