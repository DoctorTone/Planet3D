import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Header from "../components/Header";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Frameworks = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="three.js"
              body="One of the earliest WebGL libraries and one of the most popular."
              link="https://threejs.org"
              external={true}
            />
            <Item
              title="Babylon"
              body="A powerful open source WebGL rendering engine."
              link="https://www.babylonjs.com/"
              external={true}
            />
            <Item
              title="Play Canvas"
              body="Graphics creation platform primarily aimed at game creations."
              link="https://playcanvas.com/"
              external={true}
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Frameworks;
