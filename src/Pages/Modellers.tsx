import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Header from "../components/Header";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Modellers = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="Blender"
              body="One of the most popular and versatile modelling packages and free to use."
              link="https://www.blender.org/"
              external={true}
            />
            <Item
              title="3DS Max"
              body="Industry standard modelling application (not free)."
              link="https://www.autodesk.com/uk/products/3ds-max/overview?term=1-YEAR&tab=subscription"
              external={true}
            />
            <Item
              title="Autodesk Maya"
              body="Cross platform industry standard modelling application."
              link="https://www.autodesk.com/uk/products/maya/overview?term=1-YEAR&tab=subscription"
              external={true}
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Modellers;
