import { useState } from "react";
import { api } from "../../../services/api";
import { INote, RawNote } from "../../../types/global";
import { NoteForm } from "../../NoteForm";
import { Modal } from "../../shared/Modal";
import { NoteBody } from "./NoteBody";
import { FiTrash2 } from "react-icons/fi";
import { NoteContainer, NoteContent, NoteGradient, NoteInfo, NoteTitle } from "./styles";
import { globalTheme } from "../../../styles/globalTheme";

interface NoteProps {
  onNoteEdit: () => void;
  note: INote;
}

export function Note({ note, onNoteEdit }: NoteProps) {
  const [isModalOpen, setIsModalIsOpen] = useState(false);

  const lastUpdated = new Date(note.updatedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
  });

  const openModal = () => {
    setIsModalIsOpen(true);
  };

  const closeModal = () => {
    setIsModalIsOpen(false);
  };

  const handleSubmit = async (rawNote: RawNote) => {
    await api.put(`/notes/${note.id}`, rawNote);

    closeModal();
    onNoteEdit();
  };

  const handleDelete = async () => {
    await api.delete(`/notes/${note.id}`);

    onNoteEdit();
  };

  return (
    <NoteContainer>
      <NoteContent onClick={openModal}>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteBody content={note.text} />
      </NoteContent>
      <NoteGradient>
        <NoteInfo>
          <span>Editado em {lastUpdated}</span>
          <button onClick={handleDelete}>
            <FiTrash2 size={18} color={globalTheme.colors.background} />
          </button>
        </NoteInfo>
      </NoteGradient>
      <Modal isOpen={isModalOpen} onRequesClose={closeModal}>
        <NoteForm onSubmit={handleSubmit} note={note} />
      </Modal>
    </NoteContainer>
  );
}
