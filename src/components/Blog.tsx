import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const article = {
    title: "The Future of Web Development",
    date: "March 15, 2024",
    description: "Exploring the latest trends and technologies shaping the future of web development",
    content: `The web development landscape is constantly evolving, bringing new technologies and methodologies 
              that reshape how we build applications. From the rise of AI-powered development tools to the 
              growing importance of performance optimization, staying ahead of these trends is crucial for 
              modern developers.`,
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Latest from the Blog</h2>
          <p className="mt-4 text-lg text-gray-500">
            Thoughts, insights, and perspectives on web development
          </p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{article.title}</CardTitle>
              <CardDescription>{article.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">{article.description}</p>
              <p className="text-gray-700">{article.content}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;