import React from "react";
import { forwardRef } from "react";
import { getCurrentSeason, getNextSeason } from "../utils/seasons";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import useDialog from "../hooks/useDialog";
import ModalCurrent from "../components/ModalCurrent";
import ModalNext from "../components/ModalNext";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Season = () => {
  const { open, onOpen, onClose } = useDialog();

  const seasons = {
    current: getCurrentSeason(),
    next: getNextSeason(),
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ModalCurrent
        season={seasons.current}
        label="Et après ?"
        onToggle={onOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <ModalNext
          season={seasons.next}
          label="Ok, je vais être patient"
          onToggle={onClose}
        />
      </Dialog>
    </Box>
  );
};

export default Season;
