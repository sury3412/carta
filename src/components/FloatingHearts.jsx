import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const newHeart = {
                id,
                left: Math.random() * 100,
                size: Math.random() * (30 - 10) + 10,
                duration: Math.random() * (10 - 5) + 5,
            };
            setHearts((prev) => [...prev, newHeart]);
            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== id));
            }, 10000);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: '110vh', opacity: 0, x: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 1, 1, 0],
                        x: [0, Math.random() * 50 - 25, 0]
                    }}
                    transition={{ duration: heart.duration, ease: "linear" }}
                    className="absolute text-red-600 opacity-60"
                    style={{ left: `${heart.left}%` }}
                >
                    <Heart size={heart.size} fill="currentColor" />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
