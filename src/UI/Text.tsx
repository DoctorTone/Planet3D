import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Text = () => {
  return (
    <>
      <div id="titleTop" className="panel plus-jakarta-sans-main">
        <Typography variant="h3" sx={{ color: "yellow", textAlign: "center" }}>
          Everything 3D
        </Typography>
      </div>
      <div id="enter" className="panel centred">
        <Button href="./main" variant="contained">
          Show me
        </Button>
      </div>
    </>
  );
};

export default Text;
