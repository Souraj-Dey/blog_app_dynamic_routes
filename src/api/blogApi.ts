import type { Blog } from "../types/blog";

const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with React",
    content: `
React is a JavaScript library for building user interfaces.

It uses components which makes apps scalable and maintainable.
`,
    authorId: 101,
    authorName: "Souraj Dey",
  },
  {
    id: 2,
    title: "Why TypeScript Matters",
    content: `
TypeScript adds static typing to JavaScript.

Benefits include fewer bugs, better readability, and safer refactoring.
`,
    authorId: 102,
    authorName: "Souraj Dey",
  },
  {
    id: 3,
    title: "Understanding React Router",
    content: `
React Router enables dynamic routing inside single-page applications
without refreshing the browser.
`,
    authorId: 101,
    authorName: "Souraj Dey",
  },
];

export const fetchBlogs = async (): Promise<Blog[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(blogs), 500);
  });
};
