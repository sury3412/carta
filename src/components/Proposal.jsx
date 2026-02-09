import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Music, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

const Proposal = () => {
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [accepted, setAccepted] = useState(false);

    const moveNoButton = () => {
        const x = Math.random() * (200 - (-200)) + (-200);
        const y = Math.random() * (200 - (-200)) + (-200);
        setNoButtonPos({ x, y });
    };

    const handleAccept = () => {
        setAccepted(true);
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#e11d48', '#fb7185']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#e11d48', '#fb7185']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    };

    return (
        <section className="text-center bg-rose-500 text-white py-20 px-8 rounded-[4rem] shadow-2xl relative overflow-hidden mb-12">
            {/* Background decoration circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
                <motion.img
                    key={accepted ? "happy" : "question"}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={accepted
                        ? "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp6bzZpMHB6amV4eXp6bzZpMHB6amV4eXp6bzZpMHB6amV4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K1TQa8wwS8W76/giphy.gif"
                        : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp6bzZpMHB6amV4eXp6bzZpMHB6amV4eXp6bzZpMHB6amV4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S9S2Fm5GjJjTq/giphy.gif"
                    }
                    alt="Gatito pregunta"
                    className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow-lg mb-8 object-cover"
                />

                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-10 leading-tight"
                    layout
                >
                    {accepted ? "¡SABÍA QUE DIRÍAS QUE SÍ! ❤️" : "¿Quieres ser mi San Valentín?"}
                </motion.h2>

                <AnimatePresence mode="wait">
                    {!accepted ? (
                        <motion.div
                            key="actions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-wrap justify-center items-center gap-8 min-h-[100px]"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleAccept}
                                className="px-12 py-5 bg-white text-rose-600 rounded-full font-black text-2xl shadow-xl flex items-center gap-2 hover:shadow-2xl hover:bg-rose-50 transition-all"
                            >
                                <Heart fill="currentColor" /> ¡SÍ!
                            </motion.button>

                            <motion.button
                                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                onMouseEnter={moveNoButton}
                                onClick={moveNoButton}
                                className="px-8 py-3 bg-rose-400/50 text-white rounded-full font-bold shadow-md border-2 border-white/30 backdrop-blur-sm cursor-not-allowed"
                            >
                                No :(
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="celebration"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="space-y-6"
                        >
                            <p className="text-3xl font-serif">¡Eres mi vida entera! 🐱💕</p>
                            <div className="flex justify-center gap-6 text-rose-200">
                                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    <Gift size={48} />
                                </motion.div>
                                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}>
                                    <Music size={48} />
                                </motion.div>
                                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}>
                                    <Star size={48} />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Proposal;
