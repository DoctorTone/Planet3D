import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Header from "../components/Header";
import Item from "../components/Item";

const Frameworks = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title="three.js"
              body="The most popular 3D library for the web"
              link="https://threejs.org"
            />
            <Item
              title="Babylon"
              body="The most popular 3D library for the web"
              link="/"
            />
            <Item
              title="Play Canvas"
              body="The most popular 3D library for the web"
              link="/"
            />
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Frameworks;
