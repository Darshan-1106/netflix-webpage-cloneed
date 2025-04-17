
import { useState, useEffect } from "react";
import { Play, Info } from "lucide-react";
import { Movie, movies } from "@/data/movies";
import { Button } from "@/components/ui/button";

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // Get a random trending movie for the banner
    const trendingMovies = movies.filter(movie => movie.isTrending);
    const randomMovie = trendingMovies[Math.floor(Math.random() * trendingMovies.length)];
    setMovie(randomMovie);
  }, []);

  if (!movie) return null;

  return (
    <div className="relative h-[80vh] md:h-[90vh] w-full">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${movie.bannerUrl})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/70 to-transparent" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-netflix-black to-transparent" />
      </div>

      {/* Content */}
      <div className="netflix-container relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 lg:pb-24 space-y-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold max-w-xl">{movie.title}</h1>
        
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-green-600 font-semibold">{Math.floor(movie.rating * 10)}% Match</span>
          <span>{movie.year}</span>
          <span className="border border-gray-500 px-1">{movie.duration}</span>
        </div>
        
        <p className="text-sm md:text-base max-w-lg line-clamp-3 md:line-clamp-none">{movie.description}</p>
        
        <div className="flex flex-wrap gap-3">
          <Button className="bg-netflix-white text-netflix-black hover:bg-netflix-white/90 flex items-center gap-1">
            <Play size={18} /> Play
          </Button>
          <Button variant="outline" className="bg-netflix-gray/30 text-netflix-white border-none hover:bg-netflix-gray/40 flex items-center gap-1">
            <Info size={18} /> More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
