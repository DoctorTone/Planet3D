import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Header from "../components/Header";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="3D Models"
              body="A collection of 3D models in all formats and price ranges."
              link="/#models"
            />
            <Item
              title="Textures"
              body="A collection of images and textures for use in your 3D app."
              link="/#textures"
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Resources;
