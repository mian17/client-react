import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const FilterService = (props) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        component="h5"
        variant="subtitle1"
        fontFamily={"Libre Bodoni"}
        sx={{ mt: 2, mb: 1 }}
      >
        {props.title}
      </Typography>
      <Grid spacing={1} container>
        {props.contents.map((content, index) => {
          return (
            <Grid
              key={index}
              lg={6}
              sx={{
                textAlign: "center",
              }}
              item
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                  width: "100%",
                  fontSize: 12,
                  px: 1,
                }}
                variant="outlined"
              >
                {content}
              </Button>
            </Grid>
          );
        })}
        {props.more && (
          <Grid
            lg={6}
            sx={{
              textAlign: "center",
            }}
            item
          >
            <Button
              sx={{
                textTransform: "capitalize",
                width: "100%",
                fontSize: 12,
                px: 1,
              }}
              variant="outlined"
            >
              Xem thêm
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default FilterService;
