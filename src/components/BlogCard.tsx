import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import type { Blog } from "../types/blog";

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 3,
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardContent>
        <Typography variant="h6">{blog.title}</Typography>

        <Button
          component={Link}
          to={`/blog/${blog.id}`}
          sx={{ mt: 1 }}
          variant="contained"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
