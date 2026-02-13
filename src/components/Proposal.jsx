import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Music, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import proposalImg from '../assets/imagenes/WhatsApp Image 2026-02-13 at 5.05.54 PM (6).jpeg';

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
                colors: ['#dc2626', '#991b1b', '#000000']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#dc2626', '#991b1b', '#000000']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    };

    return (
        <section className="text-center bg-zinc-900 border-4 border-red-950 text-white py-20 px-8 rounded-[4rem] shadow-2xl relative overflow-hidden mb-12">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent)] pointer-events-none" />

            <div className="relative z-10">
                <img
                    src={proposalImg}
                    alt="Nuestro momento"
                    className="w-32 h-32 mx-auto rounded-full border-4 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] mb-8 object-cover"
                />

                <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
                    {accepted ? "¡SABÍA QUE DIRÍAS QUE SÍ! ❤️" : "¿Quieres ser mi San Valentín?"}
                </h2>

                {!accepted ? (
                    <div className="flex flex-wrap justify-center items-center gap-8 min-h-[100px]">
                        <motion.button
                            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(220,38,38,0.5)" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleAccept}
                            className="px-12 py-5 bg-red-600 text-white rounded-full font-black text-2xl shadow-xl flex items-center gap-2 border-2 border-red-500"
                        >
                            <Heart fill="currentColor" /> ¡SÍ!
                        </motion.button>

                        <motion.button
                            animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                            onMouseEnter={moveNoButton}
                            onClick={moveNoButton}
                            className="px-8 py-3 bg-zinc-800 text-gray-400 rounded-full font-bold shadow-md border-2 border-zinc-700 backdrop-blur-sm hover:text-white transition-colors"
                        >
                            No :(
                        </motion.button>
                    </div>
                ) : (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="space-y-6">
                        <p className="text-3xl font-serif text-red-400">¡Eres mi vida entera! 🐱💕</p>
                        <div className="flex justify-center gap-4">
                            <Gift size={40} className="text-red-500 animate-bounce" />
                            <Music size={40} className="text-red-500 animate-bounce delay-75" />
                            <Star size={40} className="text-red-500 animate-bounce delay-150" />
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Proposal;
