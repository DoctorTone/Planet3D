import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Header from "../components/Header";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Textures = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="Poly Haven"
              body="A huge 3D asset library, including seamless textures and HDRI's."
              link="https://polyhaven.com/"
              external={true}
            />
            <Item
              title="textures.com"
              body="A large collection of textures, organised by topic."
              link="https://www.textures.com/"
              external={true}
            />
            <Item
              title="ambientCG"
              body="A collection of seamless textures and materials."
              link="https://ambientcg.com/"
              external={true}
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Textures;
