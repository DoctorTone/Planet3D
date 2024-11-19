import Header from "../components/Header";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";

const ComingSoon = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h5"
        color="white"
        sx={{ display: "flex", justifyContent: "center", mt: 5 }}
      >
        Coming soon...
      </Typography>
      <Footer />
    </>
  );
};

export default ComingSoon;
