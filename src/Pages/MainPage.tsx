import Container from "@mui/material/Container";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Item from "../components/Item";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            <Item
              title={"Web Frameworks"}
              body={`Frameworks and libraries for building 3D websites/applications for the
        web.`}
            />
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                background: "#404040",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" color="#386fc7">
                3D Engines
              </Typography>
              <Typography variant="h6" color="grey">
                Applications for building 3D content on the desktop.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default MainPage;
