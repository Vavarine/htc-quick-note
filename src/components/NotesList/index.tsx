import { INote } from "../../types/global";
import { Note } from "./Note";
import { NotesListContainer, List } from "./styles";

interface NotesListProps {
  notes: INote[];
}

export function NotesList({ notes }: NotesListProps) {
  console.log(notes);

  return (
    <NotesListContainer>
      <List>
        {notes.map((note) => {
          return <Note note={note} />;
        })}
      </List>
    </NotesListContainer>
  );
}
