import { useEffect, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import axios from "axios";
import { api } from "../../services/api";

export type Note = {
  title: string;
  text: string;
};

interface AddNoteProps {
  onAddNote: () => void;
}

export function AddNote({ onAddNote }: AddNoteProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const note = {
      title: title,
      text: text,
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <FiCheckSquare />
      </div>
      <div>
        <textarea
          name="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}
