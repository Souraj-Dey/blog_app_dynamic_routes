import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blogApi";
import type { Blog } from "../types/blog";
import { Container, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";

const Author = () => {
  const { authorId } = useParams();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const loadAuthorBlogs = async () => {
      const data: Blog[] = await fetchBlogs();

      const filtered = data.filter(
        (b) => b.authorId === Number(authorId)
      );

      setBlogs(filtered);
    };

    loadAuthorBlogs();
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
