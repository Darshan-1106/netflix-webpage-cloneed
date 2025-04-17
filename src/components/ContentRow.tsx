
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/data/movies";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

interface ContentRowProps {
  title: string;
  movies: Movie[];
}

const ContentRow = ({ title, movies }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true);
    
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-2 md:space-y-4 mt-4 md:mt-8">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{title}</h2>
      
      <div className="group relative">
        {/* Left Arrow */}
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        />
        
        {/* Movie Row */}
        <div 
          ref={rowRef}
          className="flex items-center space-x-1 md:space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth py-4"
        >
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={() => setSelectedMovie(movie)} 
            />
          ))}
        </div>
        
        {/* Right Arrow */}
        <ChevronRight 
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
      
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export default ContentRow;
