import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

const Img = styled("img")({
  display: "block",
  borderRadius: "10px",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Header = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
        <Img src="./images/planet3d.jpg" />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center", color: "yellow" }}
        >
          Welcome to a world of 3D resources.
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
