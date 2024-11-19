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
              body="Applications for creating 3D content/games/apps on the desktop."
              link="/#engines"
            />
            <Item
              title="3D Modellers"
              body="Applications to create 3D content, models and scenes."
              link="/#modellers"
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
              body="Applications for building 3D content without having to do any coding."
              link="engines"
            />
            <Item
              title="Portfolios"
              body="A collection of portfolios for inspiration."
              link="/modellers"
            />
          </Grid>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title={"Articles"}
              body={`A collection of 3D graphics-related articles for more in-depth information.`}
              link="/resources"
            />
            <Item
              title="Virtual Reality"
              body="Articles, applications and 3D content related to virtual reality."
              link="engines"
            />
            <Item
              title="Tutorials"
              body="A knowledge base of articles to help you learn something new."
              link="/modellers"
            />
          </Grid>
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Item
              title={"Companies"}
              body={`Organisations directly relevant to the graphics industry.`}
              link="/resources"
            />
            <Item
              title="Physics"
              body="Libraries and frameworks to simulate real-world physics."
              link="engines"
            />
            <Item
              title="Development"
              body="General tools and tips to aid software development."
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
