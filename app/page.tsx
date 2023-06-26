"use client";
import CreateArea from "@/components/CreateArea";
import { useState } from "react";
import { Box } from "@mui/material";
import Note from "../components/Note";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [notes, setNotes] = useState([] as any);

  function addNote(newNote: any) {
    setNotes((prevNotes: any) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: number) {
    setNotes((prevNotes: any[]) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Box className="flex justify-center my-10">
        <CreateArea onAdd={addNote} />
      </Box>
      <Box className="p-5">
        <Grid container spacing={3}>
          {notes.map(
            (noteItem: { title: string; content: string }, index: number) => (
              <Grid item lg={3} md={6} xs={12}>
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </>
  );
};
export default Home;
