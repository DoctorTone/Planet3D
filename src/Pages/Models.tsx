import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Header from "../components/Header";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Models = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="Pmndrs Market"
              body="A collection of low poly free 3D models."
              link="https://market.pmnd.rs/"
              external={true}
            />
            <Item
              title="Sketchfab"
              body="A huge collection of models in many formats and price ranges."
              link="https://sketchfab.com/feed"
              external={true}
            />
            <Item
              title="Turbosquid"
              body="One of the biggest collection of models in many formats and price ranges."
              link="https://www.turbosquid.com/"
              external={true}
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Models;
