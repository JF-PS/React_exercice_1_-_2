import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Modal = (props) => {
  const { children, picture } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={picture} alt="seasonPicture" />
        <CardContent>{children}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Modal;
