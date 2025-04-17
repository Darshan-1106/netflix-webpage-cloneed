
import { useRef, useEffect } from "react";
import { Movie } from "@/data/movies";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Plus, ThumbsUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import WatchPartyButton from "./WatchPartyButton";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div 
        ref={dialogRef}
        className="bg-netflix-darkgray rounded-md max-w-3xl w-full max-h-[90vh] overflow-auto"
      >
        {/* Header Image */}
        <div className="relative h-64 md:h-96">
          <img 
            src={movie.bannerUrl} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-darkgray to-transparent" />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-netflix-darkgray rounded-full p-1"
          >
            <X size={24} />
          </button>
          
          {/* Content overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{movie.title}</h2>
            
            <div className="flex flex-wrap gap-3">
              <Button className="bg-netflix-white text-netflix-black hover:bg-netflix-white/90 flex items-center gap-1">
                <Play size={16} fill="black" /> Play
              </Button>
              <Button variant="outline" className="border-white border-2 flex items-center gap-1">
                <Plus size={16} /> My List
              </Button>
              <Button variant="outline" className="border-white border-2 rounded-full px-2">
                <ThumbsUp size={16} />
              </Button>
              <WatchPartyButton />
            </div>
          </div>
        </div>
        
        {/* Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-green-600 font-semibold">{Math.floor(movie.rating * 10)}% Match</span>
            <span>{movie.year}</span>
            <span className="border border-gray-500 px-1">{movie.duration}</span>
            <span className="bg-netflix-red/90 text-xs px-1 py-0.5 rounded">HD</span>
          </div>
          
          <p className="text-sm md:text-base">{movie.description}</p>
          
          <div>
            <span className="text-gray-400 text-sm">Genres: </span>
            <span className="text-sm">{movie.genres.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
