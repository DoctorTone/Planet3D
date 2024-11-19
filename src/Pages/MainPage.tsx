import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Item from "../components/Item";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title={"Web Frameworks"}
              body={`Frameworks and libraries for building 3D websites/applications for the
        web.`}
              link="/#frameworks"
            />
            <Item
              title="3D Engines"
              body="Applications for building 3D content on the desktop."
              link="/#engines"
            />
            <Item
              title="3D Modellers"
              body="Applications to create 3D models"
              link="/modellers"
            />
          </Grid>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title={"Resources"}
              body={`3D models, textures and other resources to create content.`}
              link="/resources"
            />
            <Item
              title="No code apps"
              body="Applications for building 3D content on the desktop."
              link="engines"
            />
            <Item
              title="Portfolios"
              body="Applications to create 3D models"
              link="/modellers"
            />
          </Grid>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title={"Articles"}
              body={`3D models, textures and other resources to create content.`}
              link="/resources"
            />
            <Item
              title="Virtual Reality"
              body="Applications for building 3D content on the desktop."
              link="engines"
            />
            <Item
              title="Tutorials"
              body="Applications to create 3D models"
              link="/modellers"
            />
          </Grid>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title={"Companies"}
              body={`3D models, textures and other resources to create content.`}
              link="/resources"
            />
            <Item
              title="Physics"
              body="Applications for building 3D content on the desktop."
              link="engines"
            />
            <Item
              title="Development"
              body="Applications to create 3D models"
              link="/modellers"
            />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
