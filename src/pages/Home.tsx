import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button } from "@mui/material";

import { fetchBlogs } from "../api/blogApi";
import type { Blog } from "../types/blog";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const sort = query.get("sort");

  useEffect(() => {
    const loadBlogs = async () => {
      const data: Blog[] = await fetchBlogs();

      let sorted = [...data];

      if (sort === "asc") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      }

      if (sort === "desc") {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
      }

      setBlogs(sorted);
    };

    loadBlogs();
  }, [sort]);

  return (
    <Container sx={{ mt: 4 }}>
      <Button onClick={() => navigate("/?sort=asc")} sx={{ mr: 1 }}>
        Sort ASC
      </Button>

      <Button onClick={() => navigate("/?sort=desc")}>
        Sort DESC
      </Button>

      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Container>
  );
};

export default Home;
