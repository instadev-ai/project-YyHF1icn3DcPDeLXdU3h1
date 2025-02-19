import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "March 15, 2024",
    author: "John Doe",
    category: "Technology",
    readTime: "5 min read",
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>The web development landscape is constantly evolving, bringing new technologies and methodologies that reshape how we build applications. From the rise of AI-powered development tools to the growing importance of performance optimization, staying ahead of these trends is crucial for modern developers.</p>
      
      <h3>1. AI-Powered Development</h3>
      <p>Artificial Intelligence is revolutionizing how we write and debug code. AI assistants can now help with code completion, bug detection, and even architectural decisions. This trend is only going to accelerate in the coming years.</p>
      
      <h3>2. WebAssembly</h3>
      <p>WebAssembly is enabling high-performance code execution in the browser, opening up new possibilities for web applications. From complex calculations to gaming, WebAssembly is pushing the boundaries of what's possible on the web.</p>
      
      <h3>3. Edge Computing</h3>
      <p>The rise of edge computing is changing how we think about deployment and data processing. By moving computation closer to the user, we can achieve better performance and lower latency.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we look to the future, it's clear that web development will continue to evolve at a rapid pace. Staying current with these changes while maintaining focus on fundamentals like performance, accessibility, and user experience will be key to success in this field.</p>
    `,
    tags: ["Web Development", "AI", "Technology Trends", "Edge Computing"]
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1 
            className="text-2xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Post not found
          </motion.h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.article 
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <header className="mb-8">
          <motion.div 
            className="flex items-center space-x-2 text-sm text-gray-500 mb-4"
            variants={fadeIn}
          >
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={fadeIn}
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            className="flex items-center space-x-4"
            variants={fadeIn}
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              <img
                className="h-10 w-10 rounded-full"
                src="https://via.placeholder.com/40"
                alt={post.author}
              />
            </motion.div>
            <div className="text-sm">
              <p className="text-gray-900 font-medium">{post.author}</p>
              <p className="text-gray-500">Web Developer</p>
            </div>
          </motion.div>
        </header>

        <motion.div 
          className="prose prose-lg max-w-none"
          variants={fadeIn}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.footer 
          className="mt-8 pt-8 border-t border-gray-200"
          variants={fadeIn}
        >
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <motion.span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.footer>
      </motion.article>
    </div>
  );
};

export default BlogPostPage;