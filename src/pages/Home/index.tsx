import { useContext, useEffect, useState } from "react";

import { AddNote } from "../../components/AddNote";
import { Header } from "../../components/Header";
import { NotesList } from "../../components/NotesList";
import { useAuth } from "../../contexts/authContext";
import { api } from "../../services/api";
import { INote } from "../../types/global";
import { HomeContainer, HomeContent } from "./styles";

function Home() {
  const [notes, setNotes] = useState<INote[]>([]);
  const { user } = useAuth();

  const handleAddNote = () => {
    fetchNotes();
  };

  const handleNoteEdit = () => {
    fetchNotes();
  };

  const fetchNotes = () => {
    api.get("/notes").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <AddNote onAddNote={handleAddNote} />
        <NotesList notes={notes} onNoteEdit={handleNoteEdit} />
      </HomeContent>
    </HomeContainer>
  );
}

export { Home };
