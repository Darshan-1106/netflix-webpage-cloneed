
// Mock data for our Netflix clone
export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  bannerUrl: string;
  year: number;
  rating: number;
  duration: string;
  genres: string[];
  isTrending?: boolean;
  isNetflixOriginal?: boolean;
}

// Movie data with mix of shows and movies
export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    posterUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    bannerUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    year: 2016,
    rating: 8.7,
    duration: "50m",
    genres: ["Sci-Fi", "Horror", "Drama"],
    isTrending: true,
    isNetflixOriginal: true
  },
  {
    id: 2,
    title: "The Crown",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    posterUrl: "https://images.unsplash.com/photo-1571310100246-e0676f359b42",
    bannerUrl: "https://images.unsplash.com/photo-1571310100246-e0676f359b42",
    year: 2016,
    rating: 8.6,
    duration: "58m",
    genres: ["Drama", "History", "Biography"],
    isNetflixOriginal: true
  },
  {
    id: 3,
    title: "Ozark",
    description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    bannerUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    year: 2017,
    rating: 8.4,
    duration: "60m",
    genres: ["Crime", "Drama", "Thriller"],
    isNetflixOriginal: true
  },
  {
    id: 4,
    title: "Money Heist",
    description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    posterUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    bannerUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    year: 2017,
    rating: 8.3,
    duration: "70m",
    genres: ["Action", "Crime", "Mystery"],
    isTrending: true
  },
  {
    id: 5,
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    posterUrl: "https://images.unsplash.com/photo-1594035900144-13110b56c421",
    bannerUrl: "https://images.unsplash.com/photo-1594035900144-13110b56c421",
    year: 2019,
    rating: 8.2,
    duration: "60m",
    genres: ["Action", "Adventure", "Fantasy"],
    isTrending: true,
    isNetflixOriginal: true
  },
  {
    id: 6,
    title: "Dark",
    description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    posterUrl: "https://images.unsplash.com/photo-1536146021566-627ce3c4d813",
    bannerUrl: "https://images.unsplash.com/photo-1536146021566-627ce3c4d813",
    year: 2017,
    rating: 8.8,
    duration: "60m",
    genres: ["Crime", "Drama", "Mystery"],
    isNetflixOriginal: true
  },
  {
    id: 7,
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    posterUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    bannerUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    year: 2008,
    rating: 9.5,
    duration: "49m",
    genres: ["Crime", "Drama", "Thriller"]
  },
  {
    id: 8,
    title: "Peaky Blinders",
    description: "A gangster family epic set in Birmingham, England, in 1919, centered on a gang who sew razor blades in the peaks of their caps.",
    posterUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
    bannerUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
    year: 2013,
    rating: 8.8,
    duration: "60m",
    genres: ["Crime", "Drama"],
    isTrending: true
  },
  {
    id: 9,
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    posterUrl: "https://images.unsplash.com/photo-1634157703493-d63cba6b151d",
    bannerUrl: "https://images.unsplash.com/photo-1634157703493-d63cba6b151d",
    year: 2021,
    rating: 8.1,
    duration: "54m",
    genres: ["Action", "Drama", "Mystery"],
    isTrending: true,
    isNetflixOriginal: true
  },
  {
    id: 10,
    title: "Narcos",
    description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    posterUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    bannerUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    year: 2015,
    rating: 8.8,
    duration: "49m",
    genres: ["Biography", "Crime", "Drama"],
    isNetflixOriginal: true
  },
  {
    id: 11,
    title: "The Queen's Gambit",
    description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.",
    posterUrl: "https://images.unsplash.com/photo-1586165368502-1bad197a6461",
    bannerUrl: "https://images.unsplash.com/photo-1586165368502-1bad197a6461",
    year: 2020,
    rating: 8.6,
    duration: "60m",
    genres: ["Drama"],
    isNetflixOriginal: true
  },
  {
    id: 12,
    title: "Black Mirror",
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    posterUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
    bannerUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
    year: 2011,
    rating: 8.8,
    duration: "60m",
    genres: ["Drama", "Sci-Fi", "Thriller"],
    isNetflixOriginal: true
  }
];

export const categories = [
  {
    id: "trending",
    title: "Trending Now",
    movies: movies.filter(movie => movie.isTrending),
  },
  {
    id: "originals",
    title: "Netflix Originals",
    movies: movies.filter(movie => movie.isNetflixOriginal),
  },
  {
    id: "top-rated",
    title: "Top Rated",
    movies: [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10),
  },
  {
    id: "action",
    title: "Action",
    movies: movies.filter(movie => movie.genres.includes("Action")),
  },
  {
    id: "drama",
    title: "Drama",
    movies: movies.filter(movie => movie.genres.includes("Drama")),
  }
];
