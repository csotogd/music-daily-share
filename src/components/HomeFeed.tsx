import { motion } from "framer-motion";
import SongCard from "./SongCard";

const mockSongs = [
  {
    id: "1",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    user: { name: "Emma Wilson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    postedAt: "2h ago",
  },
  {
    id: "2",
    title: "Cruel Summer",
    artist: "Taylor Swift",
    albumArt: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    user: { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    postedAt: "5h ago",
  },
  {
    id: "3",
    title: "Blinding Lights",
    artist: "The Weeknd",
    albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    user: { name: "Jordan Lee", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" },
    postedAt: "1d ago",
  },
  {
    id: "4",
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    user: { name: "Sam Rivera", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    postedAt: "2d ago",
  },
];

const HomeFeed = () => {
  return (
    <div className="min-h-screen pb-24 pt-4">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 mb-6"
      >
        <h1 className="text-3xl font-bold">
          <span className="gradient-text">Music</span>
          <span className="text-foreground">Daily</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          What your friends are listening to
        </p>
      </motion.header>

      {/* Your Pick CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="mx-5 mb-6"
      >
        <div className="gradient-bg rounded-2xl p-4 glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-foreground/80 text-xs font-medium uppercase tracking-wider">
                Today's Pick
              </p>
              <p className="text-primary-foreground font-bold text-lg mt-1">
                Share your song
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-background/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-primary-foreground font-semibold text-sm"
            >
              Add Song
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Feed */}
      <div className="px-5 space-y-4">
        {mockSongs.map((song, index) => (
          <SongCard key={song.id} song={song} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
