import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-center text-gray-500">
            Have a project in mind? Let's work together!
          </p>
          
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1"
                  placeholder="Your message"
                />
              </div>
              
              <div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;