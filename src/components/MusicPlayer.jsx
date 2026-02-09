import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const audioRef = useRef(null);

    // Using user's local music file
    const TRACK_URL = "/musica/Coldplay - Sparks (HQ Audio) [4etiWx3haKI].opus";

    useEffect(() => {
        // Attempt autoplay on mount
        const playAudio = async () => {
            try {
                await audioRef.current.play();
                setPlaying(true);
            } catch (err) {
                console.log("Autoplay blocked by browser policy:", err);
                setPlaying(false);
            }
        };
        playAudio();
    }, []);

    const togglePlay = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio playback failed:", e));
        }
        setPlaying(!playing);
    };

    const toggleMute = () => {
        audioRef.current.muted = !muted;
        setMuted(!muted);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-rose-200"
        >
            <audio ref={audioRef} src={TRACK_URL} loop />

            <button
                onClick={togglePlay}
                className={`p-3 rounded-full transition-all ${playing ? 'bg-rose-500 text-white animate-pulse' : 'bg-gray-100 text-rose-500'}`}
            >
                <Music size={20} className={playing ? 'animate-spin-slow' : ''} />
            </button>

            <div className="flex flex-col gap-1 pr-2">
                <span className="text-xs font-bold text-rose-600">
                    {playing ? "Reproduciendo amor..." : "Dale play ❤️"}
                </span>
                <div className="flex items-center gap-1">
                    <button onClick={toggleMute} className="text-gray-400 hover:text-rose-500">
                        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    <div className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
                        {playing && !muted && (
                            <motion.div
                                className="h-full bg-rose-400"
                                animate={{ width: ["0%", "100%", "50%", "80%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MusicPlayer;
