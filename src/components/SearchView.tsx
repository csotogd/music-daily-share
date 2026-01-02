import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Music2 } from "lucide-react";

const mockResults = [
  { id: "1", title: "Flowers", artist: "Miley Cyrus", albumArt: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop" },
  { id: "2", title: "Anti-Hero", artist: "Taylor Swift", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" },
  { id: "3", title: "As It Was", artist: "Harry Styles", albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop" },
  { id: "4", title: "Unholy", artist: "Sam Smith & Kim Petras", albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop" },
  { id: "5", title: "Calm Down", artist: "Rema & Selena Gomez", albumArt: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop" },
];

const SearchView = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredResults = query.length > 0
    ? mockResults.filter(
        (song) =>
          song.title.toLowerCase().includes(query.toLowerCase()) ||
          song.artist.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen pb-24 pt-4">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 mb-4"
      >
        <h1 className="text-2xl font-bold text-foreground">Search</h1>
      </motion.header>

      {/* Search Bar */}
      <div className="px-5 mb-6">
        <motion.div
          animate={{
            scale: isFocused ? 1.02 : 1,
            borderColor: isFocused ? "hsl(var(--primary))" : "hsl(var(--border))",
          }}
          className="relative bg-secondary rounded-xl border transition-colors"
        >
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Songs, artists, albums..."
            className="w-full bg-transparent py-3.5 pl-12 pr-10 text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
          />
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-muted-foreground/20"
              >
                <X size={14} className="text-muted-foreground" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Results or Empty State */}
      <div className="px-5">
        <AnimatePresence mode="wait">
          {query.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center pt-20 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Music2 size={36} className="text-muted-foreground" />
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Find your song
              </h2>
              <p className="text-sm text-muted-foreground max-w-[240px]">
                Search for songs to share with your friends
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              {filteredResults.length > 0 ? (
                filteredResults.map((song, index) => (
                  <motion.div
                    key={song.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-card/50 hover:bg-card transition-colors animate-spring tap-highlight-none"
                  >
                    <img
                      src={song.albumArt}
                      alt={song.title}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">
                        {song.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {song.artist}
                      </p>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 rounded-full gradient-bg text-primary-foreground text-xs font-semibold"
                    >
                      Select
                    </motion.button>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No results for "{query}"</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchView;
