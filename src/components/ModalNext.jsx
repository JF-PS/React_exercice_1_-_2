import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "./Modal";

import { getSeasonDays, getSeasonDaysLeft } from "../utils/seasons";

const ModalNext = (props) => {
  const { season, onToggle, label } = props;
  const { title, picture } = season;
  return (
    <Stack sx={{ maxWidth: 345 }}>
      <Modal picture={picture}>
        <Typography gutterBottom variant="h5" component="div">
          {title} ({getSeasonDays(season)} days)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          in {getSeasonDaysLeft()} days...
        </Typography>
      </Modal>
      <Button variant="outlined" onClick={onToggle}>
        {label}
      </Button>
    </Stack>
  );
};

export default ModalNext;
