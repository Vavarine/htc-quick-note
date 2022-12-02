import { INote } from "../../types/global";
import { Note } from "./Note";
import { NotesListContainer, List } from "./styles";

interface NotesListProps {
  onNoteEdit: () => void;
  notes: INote[];
}

export function NotesList({ notes, onNoteEdit }: NotesListProps) {
  return (
    <NotesListContainer>
      <List>
        {notes.map((note) => {
          return <Note key={note.id} note={note} onNoteEdit={onNoteEdit} />;
        })}
      </List>
    </NotesListContainer>
  );
}
