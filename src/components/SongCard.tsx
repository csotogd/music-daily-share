import { motion } from "framer-motion";
import { Play, Heart } from "lucide-react";
import { useState } from "react";

interface SongCardProps {
  song: {
    id: string;
    title: string;
    artist: string;
    albumArt: string;
    user: {
      name: string;
      avatar: string;
    };
    postedAt: string;
  };
  index: number;
}

const SongCard = ({ song, index }: SongCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card p-4 card-shadow animate-spring"
    >
      {/* User Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={song.user.avatar}
          alt={song.user.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm text-foreground">{song.user.name}</p>
          <p className="text-xs text-muted-foreground">{song.postedAt}</p>
        </div>
      </div>

      {/* Album Art & Song Info */}
      <div className="flex gap-4">
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={song.albumArt}
            alt={song.title}
            className="w-24 h-24 rounded-xl object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-background/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center glow">
              <Play size={18} className="text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <h3 className="font-bold text-foreground text-base leading-tight line-clamp-2">
              {song.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{song.artist}</p>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              whileTap={{ scale: 0.85 }}
              className="tap-highlight-none"
            >
              <Heart
                size={22}
                className={`transition-colors duration-200 ${
                  isLiked ? "text-primary fill-primary" : "text-muted-foreground"
                }`}
              />
            </motion.button>
            <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              Open in Spotify
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SongCard;
