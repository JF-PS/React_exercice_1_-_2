import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "./Modal";

import { getSeasonDaysHowLong } from "../utils/seasons";

const ModalCurrent = (props) => {
  const { season, onToggle, label = "no label" } = props;
  const { title, picture } = season;
  return (
    <Stack sx={{ maxWidth: 345 }}>
      <Modal picture={picture}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {getSeasonDaysHowLong()} days ago...
        </Typography>
      </Modal>
      <Button variant="outlined" onClick={onToggle}>
        {label}
      </Button>
    </Stack>
  );
};

export default ModalCurrent;
