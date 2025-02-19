import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "March 15, 2024",
    description: "Exploring the latest trends and technologies shaping the future of web development",
    content: `The web development landscape is constantly evolving, bringing new technologies and methodologies 
              that reshape how we build applications. From the rise of AI-powered development tools to the 
              growing importance of performance optimization, staying ahead of these trends is crucial for 
              modern developers.`,
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    date: "March 10, 2024",
    description: "A comprehensive guide to using React Hooks effectively in your applications",
    content: `React Hooks have revolutionized how we write components in React. This guide explores best 
              practices, common patterns, and advanced techniques for leveraging hooks in your applications.`,
    readTime: "7 min read",
    category: "React"
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    date: "March 5, 2024",
    description: "Essential practices for creating inclusive web experiences",
    content: `Accessibility is not just a checkbox to tick off - it's a fundamental aspect of web development 
              that ensures your applications are usable by everyone. Learn the key principles and techniques 
              for building truly accessible web applications.`,
    readTime: "6 min read",
    category: "Accessibility"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts, insights, and perspectives on web development, design, and technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-teal-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <button className="text-teal-600 hover:text-teal-700 font-medium">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;