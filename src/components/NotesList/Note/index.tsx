import { useState } from "react";
import { INote } from "../../../types/global";
import { Modal } from "../../shared/Modal";
import { NoteBody } from "./NoteBody";
import { NoteContainer, NoteContent, NoteTitle } from "./styles";

interface NoteProps {
  note: INote;
}

export function Note({ note }: NoteProps) {
  const [isModalOpen, setIsModalIsOpen] = useState(false);

  const openModal = () => {
    setIsModalIsOpen(true);
  };

  const closeModal = () => {
    setIsModalIsOpen(false);
  };

  return (
    <NoteContainer>
      <NoteContent onClick={openModal}>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteBody content={note.text} />
      </NoteContent>
      <Modal isOpen={isModalOpen} onRequesClose={closeModal}>
        <span>
          <h4>{note.id}</h4>
        </span>
        <span>{note.title}</span>
      </Modal>
    </NoteContainer>
  );
}
