import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4">404</Typography>
      <Typography>Page Not Found</Typography>
    </Container>
  );
};

export default NotFound;
