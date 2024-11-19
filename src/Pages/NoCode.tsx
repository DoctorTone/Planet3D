import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Header from "../components/Header";
import Item from "../components/Item";
import Footer from "../components/Footer";

const NoCode = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="Spline"
              body="Design, build and deploy 3D websites."
              link="https://spline.design/"
              external={true}
            />
            <Item
              title="GDevelop"
              body="Cross platform 2D/3D and multiplayer game creation."
              link="https://gdevelop.io/"
              external={true}
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default NoCode;
