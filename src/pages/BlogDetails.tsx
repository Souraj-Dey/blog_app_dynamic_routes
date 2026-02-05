import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blogApi";
import type { Blog } from "../types/blog";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs().then((data) => {
      const found = data.find((b) => b.id === Number(id));
      setBlog(found || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 5, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading blog...</Typography>
      </Container>
    );
  }

  if (!blog) {
    return <Typography sx={{ mt: 5 }}>Blog not found</Typography>;
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3">{blog.title}</Typography>

      <Typography
        sx={{
          mt: 3,
          whiteSpace: "pre-line",
          lineHeight: 1.8,
        }}
      >
        {blog.content}
      </Typography>

      <Button
        component={Link}
        to={`/author/${blog.authorId}`}
        sx={{ mt: 3 }}
        variant="outlined"
      >
        More from {blog.authorName}
      </Button>
    </Container>
  );
};

export default BlogDetails;
