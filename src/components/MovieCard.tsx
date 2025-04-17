
import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Movie } from "@/data/movies";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "content-card aspect-video min-w-[200px] sm:min-w-[240px] md:min-w-[280px]",
        isHovered && "z-50 shadow-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={movie.posterUrl} 
        alt={movie.title}
        className="w-full h-full object-cover rounded-sm"
      />
      
      {isHovered && (
        <div className="absolute inset-0 rounded-sm bg-black/80 p-3 flex flex-col">
          <img 
            src={movie.posterUrl} 
            alt={movie.title}
            className="w-full h-28 object-cover rounded-sm mb-2"
          />
          
          <div className="flex-grow flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="flex items-center justify-center bg-netflix-white rounded-full p-1 hover:bg-opacity-80">
                    <Play fill="black" size={16} />
                  </button>
                  <button className="flex items-center justify-center border-2 border-gray-400 rounded-full p-1 hover:border-white">
                    <Plus size={16} />
                  </button>
                  <button className="flex items-center justify-center border-2 border-gray-400 rounded-full p-1 hover:border-white">
                    <ThumbsUp size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={onClick} 
                  className="flex items-center justify-center border-2 border-gray-400 rounded-full p-1 hover:border-white"
                >
                  <ChevronDown size={16} />
                </button>
              </div>
              
              <div className="text-xs space-x-2">
                <span className="text-green-500 font-bold">{Math.floor(movie.rating * 10)}% Match</span>
                <span className="border border-gray-500 px-1">{movie.duration}</span>
              </div>
              
              <div className="text-xs flex flex-wrap gap-1">
                {movie.genres.slice(0, 3).map((genre, index) => (
                  <span key={index}>{index > 0 ? `• ${genre}` : genre}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
