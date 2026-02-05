
// import type { Blog } from "../types/blog";

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "React Basics",
//     content: "This blog explains React fundamentals.",
//     authorId: 101,
//     authorName: "Souraj",
//   },
//   {
//     id: 2,
//     title: "TypeScript with React",
//     content: "Using TypeScript in React projects.",
//     authorId: 102,
//     authorName: "Amit",
//   },
//   {
//     id: 3,
//     title: "React Router Deep Dive",
//     content: "Everything about React Router.",
//     authorId: 101,
//     authorName: "Souraj",
//   },
// ];

// export const fetchBlogs = async (): Promise<Blog[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(blogs), 500);
//   });
// };


import type { Blog } from "../types/blog";

const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with React",
    content: `
React is a JavaScript library for building user interfaces.

It uses a component-based architecture which makes applications
easy to scale and maintain.

Key concepts:
• Components
• JSX
• Props & State
• Hooks

React is widely used in modern web development.
`,
    authorId: 101,
    authorName: "Souraj Dey",
  },
  {
    id: 2,
    title: "Why TypeScript Matters",
    content: `
TypeScript is a superset of JavaScript that adds static typing.

Advantages:
• Fewer runtime errors
• Better IDE support
• Easier refactoring
• Cleaner code

TypeScript is highly recommended for large React apps.
`,
    authorId: 102,
    authorName: "Souraj Dey",
  },
  {
    id: 3,
    title: "React Router DOM Explained",
    content: `
React Router DOM enables navigation in Single Page Applications.

Key hooks:
• useParams
• useLocation
• useNavigate

It allows dynamic routing without page reloads.
`,
    authorId: 101,
    authorName: "Souraj Dey",
  },
];

export const fetchBlogs = async (): Promise<Blog[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(blogs), 600);
  });
};
