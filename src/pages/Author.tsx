import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/BlogApi";
import type { Blog } from "../types/blog";
import { Container, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";

const Author = () => {
  const { authorId } = useParams();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs().then((data) => {
      setBlogs(data.filter(b => b.authorId === Number(authorId)));
    });
  }, [authorId]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Author Blogs</Typography>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Container>
  );
};

export default Author;
