import { useState } from "react";
import { api } from "../../services/api";
import { AddNoteContainer, Backdrop, Content } from "./styles";
import { NoteForm } from "../NoteForm";
import { RawNote } from "../../types/global";

interface AddNoteProps {
  onAddNote: () => void;
}

export function AddNote({ onAddNote }: AddNoteProps) {
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);

  const handleSubmit = (note: RawNote) => {
    api
      .post("/notes", note)
      .then(() => {
        onAddNote();
        handleCloseAddNote();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenAddNote = () => {
    setIsAddNoteOpen(true);
  };

  const handleCloseAddNote = () => {
    setIsAddNoteOpen(false);
  };

  return (
    <AddNoteContainer>
      <Backdrop isOpen={isAddNoteOpen} onClick={handleCloseAddNote} />
      <Content isOpen={isAddNoteOpen} onClick={handleOpenAddNote}>
        <NoteForm onSubmit={handleSubmit} />
      </Content>
    </AddNoteContainer>
  );
}
