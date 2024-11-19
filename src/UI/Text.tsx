import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Text = () => {
  return (
    <>
      <div id="enter" className="panel centred">
        <Button href="/#main" variant="contained" color="warning">
          Show me the 3D
        </Button>
      </div>
      {/* <div id="sponsor" className="panel">
        <Typography variant="h6" color="orange">
          Sponsored by
        </Typography>
        <img src="./images/drtLogo.png" />
      </div> */}
    </>
  );
};

export default Text;
