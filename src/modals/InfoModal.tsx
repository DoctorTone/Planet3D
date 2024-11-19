import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface InfoModalProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#252525",
  color: "grey",
  border: "5px solid orange",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  textAlign: "justify",
};

const InfoModal = ({ open, handleClose }: InfoModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style} className="modalDimensions">
          <Typography variant="h4" color="white">
            Planet 3D
          </Typography>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Thanks to Kinga Kroliczek for the planet model on Sketchfab.
          </Typography>
          <Button onClick={handleClose} variant="contained">
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoModal;
