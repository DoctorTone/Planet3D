import Container from "@mui/material/Container";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Engines = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="Unity"
              body="A cross platform game and rendering engine allowing many types of application to be created."
              link="https://unity.com/"
              external={true}
            />
            <Item
              title="Unreal"
              body="A powerful game creation and visualisation engine."
              link="https://www.unrealengine.com/en-US"
              external={true}
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Engines;
