import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Blog />
            <Contact />
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;