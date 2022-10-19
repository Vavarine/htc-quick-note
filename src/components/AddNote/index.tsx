import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import Placeholder from "@tiptap/extension-placeholder";
import { api } from "../../services/api";
import { Container, SubmitButton } from "./styles";
import { TextEditor } from "./TextEditor";
import { OptionsBar } from "./OptionsBar";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";

export type Note = {
  title: string;
  text: string;
};

interface AddNoteProps {
  onAddNote: () => void;
}

export function AddNote({ onAddNote }: AddNoteProps) {
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Placeholder.configure({
        placeholder: "Criar uma anotação ou lista",
      }),
    ],
  });

  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const note = {
      title: title,
      text: editor ? JSON.stringify(editor.getJSON()) : "",
    };

    api
      .post("/notes", note)
      .then(() => {
        onAddNote();
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

  const handleFileAdition = (file: File) => {
    const formData = new FormData();

    formData.append("image", file);

    console.log(file);

    api.post("/upload", formData).then((response) => {
      const { data } = response;

      editor?.chain().focus().setImage({ src: data.url }).run();
    });
  };

  return (
    <Container isOpen={isAddNoteOpen}>
      <div className="backdrop" onClick={handleCloseAddNote}></div>
      <form onSubmit={handleSubmit} onClick={handleOpenAddNote}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Crie sua  anotação ou lista..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          {editor && <TextEditor editor={editor} />}
          {editor && (
            <OptionsBar editor={editor} onFileAdition={handleFileAdition}>
              <SubmitButton type="submit">Salvar</SubmitButton>
            </OptionsBar>
          )}
        </div>
      </form>
    </Container>
  );
}
