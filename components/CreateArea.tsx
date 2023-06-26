"use client";

import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { IconButton } from "@mui/material";

const CreateArea = (props: any) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: { preventDefault: () => void }) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="resize-none text-lg outline-none p-1 border-none w-full"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          className="resize-none text-lg outline-none p-1 border-none w-full"
        />
        <Zoom in={isExpanded}>
          <IconButton type="submit" onClick={submitNote} aria-label="Add">
            <AddIcon />
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
