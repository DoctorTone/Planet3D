import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Container sx={{ mt: 5, mb: 3, textAlign: "center" }}>
      <Typography variant="h6" color="grey" sx={{ mb: 1 }}>
        Anything missing - let me know
      </Typography>
      <Button
        href="mailto:tony@drt-software.com?subject=Planet3D"
        variant="contained"
        color="warning"
      >
        Contact
      </Button>
    </Container>
  );
};

export default Footer;
