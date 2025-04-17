
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";
import { categories } from "@/data/movies";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Banner />
        
        <div className="netflix-container pb-10 space-y-6 md:space-y-12 mt-0 md:-mt-16 relative z-20">
          {categories.map((category) => (
            <ContentRow 
              key={category.id} 
              title={category.title} 
              movies={category.movies} 
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
