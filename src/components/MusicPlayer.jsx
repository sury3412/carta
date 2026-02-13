import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const audioRef = useRef(null);

    // Using user's local music file
    const TRACK_URL = "/musica/Río Roma - Al Fin Te Encontré (Video) [a7FdUd6ysL0] (1).opus";

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
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-4">
            <audio ref={audioRef} src={TRACK_URL} loop />

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-black/80 backdrop-blur-md p-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)] border border-red-900/50 flex items-center gap-3 group"
            >
                <button
                    onClick={togglePlay}
                    className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg active:scale-90"
                >
                    {playing ? <Music size={24} className="animate-spin-slow" /> : <Music size={24} />}
                </button>

                <div className="flex gap-1 h-8 items-center px-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                height: playing ? [8, 24, 12, 20, 8] : 8
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                delay: i * 0.1
                            }}
                            className="w-1 bg-red-600 rounded-full opacity-60"
                        />
                    ))}
                </div>

                <button
                    onClick={toggleMute}
                    className="p-2 text-red-500 hover:text-red-400 transition-colors"
                >
                    {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            </motion.div>
        </div>
    );
};

export default MusicPlayer;
