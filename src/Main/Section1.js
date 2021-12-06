import { width } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Section1() {
  return (
    <Paper
      elevation={10}
      sx={{
        padding: "15px",
        heigth: "400px",
      }}
    >
      <Typography variant="h4">Section 1</Typography>
    </Paper>
  );
}

export default Section1;
