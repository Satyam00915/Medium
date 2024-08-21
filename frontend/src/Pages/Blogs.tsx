import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const blogs = [
    {
      title: "Introduction to React",
      content:
        "React is a widely-used JavaScript library developed by Facebook for building user interfaces. It allows developers to create interactive UIs with ease using a component-based architecture. Each component in React encapsulates its own structure, style, and logic, promoting reusability and maintainability. React's virtual DOM efficiently updates and renders components, minimizing direct manipulation of the actual DOM and improving performance. With features like hooks and context, React provides powerful tools for managing state and side effects in functional components. It integrates seamlessly with other libraries and frameworks, making it a versatile choice for modern web development. Whether you're building single-page applications or complex, dynamic web apps, React's declarative syntax and robust ecosystem make it a go-to solution for creating engaging and responsive user experiences.",
      author: "John Doe",
      publishedDate: "21 Aug, 2024",
    },
    {
      title: "Understanding JavaScript Closures",
      content:
        "Closures are a fundamental concept in JavaScript that allow functions to retain access to variables from their outer scope, even after the outer function has finished executing. This ability to capture and remember the lexical environment of a function makes closures incredibly useful for creating private variables, implementing data encapsulation, and managing state. Closures are commonly used in scenarios like event handlers, asynchronous programming, and factory functions. They enable patterns such as currying and partial application, enhancing functional programming capabilities in JavaScript. By understanding closures, developers can write more modular, maintainable code and leverage powerful JavaScript features to solve complex problems. Closures form the backbone of many advanced techniques in JavaScript, making them an essential concept for both beginners and experienced developers to master.",
      author: "Jane Smith",
      publishedDate: "20 Aug, 2024",
    },
    {
      title: "A Guide to Node.js",
      content:
        "Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine, designed for building scalable and high-performance network applications. Unlike traditional server-side environments, Node.js uses an event-driven, non-blocking I/O model that makes it efficient and suitable for handling numerous concurrent connections. It allows developers to write server-side code using JavaScript, enabling full-stack development with a unified language. Node.js is known for its extensive package ecosystem available through npm (Node Package Manager), which simplifies adding and managing libraries and tools. Common use cases for Node.js include creating RESTful APIs, real-time applications such as chat systems, and server-side scripting. Its asynchronous nature and single-threaded event loop make it well-suited for applications that require high scalability and responsiveness. By leveraging Node.js, developers can build fast and efficient server-side applications with ease.",
      author: "Alice Johnson",
      publishedDate: "19 Aug, 2024",
    },
  ];

  return (
    <div>
      <Appbar />
      <div className="flex flex-col gap-8 justify-center items-center m-5">
        {blogs.map((blog) => {
          return (
            <BlogCard
              title={blog.title}
              content={blog.content}
              author={blog.author}
              publishedDate={blog.publishedDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
