"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Note = (props: any) => {
  interface props {
    title: string;
    content: string;
  }
  return (
    <Card className="bg-white rounded-lg box_shadow_input">
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body1">{props.content}</Typography>
      </CardContent>
      <CardActions className="flex justify-end">
        <IconButton
          onClick={() => props.onDelete(props.id)}
          color="warning"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Note;
