import { Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

interface ItemProps {
  title: string;
  body: string;
}

const Item = ({ title, body }: ItemProps) => {
  return (
    <Grid
      size={{ xs: 12, md: 4 }}
      sx={{
        background: "#252525",
        borderRadius: "20px",
        textAlign: "center",
        minHeight: "200px",
        padding: "10px",
      }}
      className="bordered"
    >
      <Box component={"a"} href="/frameworks">
        <Typography variant="h5" color="white">
          {title}
        </Typography>
        <Divider
          variant="middle"
          sx={{ background: "purple", mt: 1, mb: 1, height: "4px" }}
        />
        <Typography variant="h6" color="grey">
          {body}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Item;
