import { motion } from "framer-motion";
import { Settings, Music, Calendar, ChevronRight } from "lucide-react";

const pastPicks = [
  { id: "1", title: "Espresso", artist: "Sabrina Carpenter", date: "Dec 30", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" },
  { id: "2", title: "Birds of a Feather", artist: "Billie Eilish", date: "Dec 23", albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop" },
  { id: "3", title: "Good Luck, Babe!", artist: "Chappell Roan", date: "Dec 16", albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop" },
];

const ProfileView = () => {
  return (
    <div className="min-h-screen pb-24 pt-4">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 mb-6 flex items-center justify-between"
      >
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-secondary"
        >
          <Settings size={20} className="text-foreground" />
        </motion.button>
      </motion.header>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="mx-5 mb-8"
      >
        <div className="glass-card p-6 card-shadow text-center">
          <div className="relative inline-block mb-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/30"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full gradient-bg flex items-center justify-center glow">
              <Music size={14} className="text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground">Jamie Parker</h2>
          <p className="text-sm text-muted-foreground mt-1">@jamieparker</p>

          <div className="flex items-center justify-center gap-8 mt-6 pt-6 border-t border-border/50">
            <div>
              <p className="text-2xl font-bold gradient-text">47</p>
              <p className="text-xs text-muted-foreground">Songs Shared</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">128</p>
              <p className="text-xs text-muted-foreground">Friends</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* This Week's Pick */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-5 mb-8"
      >
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          This Week's Pick
        </h3>
        <div className="glass-card p-4 flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop"
            alt="Current pick"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="flex-1">
            <p className="font-bold text-foreground">APT.</p>
            <p className="text-sm text-muted-foreground">ROSÉ & Bruno Mars</p>
          </div>
          <ChevronRight size={20} className="text-muted-foreground" />
        </div>
      </motion.div>

      {/* Past Picks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-5"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Past Picks
          </h3>
          <button className="text-sm text-primary font-medium">See All</button>
        </div>
        <div className="space-y-2">
          {pastPicks.map((pick, index) => (
            <motion.div
              key={pick.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-card/30 hover:bg-card/50 transition-colors"
            >
              <img
                src={pick.albumArt}
                alt={pick.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">
                  {pick.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {pick.artist}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar size={12} />
                <span className="text-xs">{pick.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileView;
