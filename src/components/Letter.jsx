import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';

const Heartdoodle = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-500">
        <path d="M50 80C50 80 10 50 10 30C10 15 25 10 40 20C45 23 50 30 50 30C50 30 55 23 60 20C75 10 90 15 90 30C90 50 50 80 50 80Z" />
    </svg>
);

const Letter = () => {
    const text = `Mi amor,

Desde que llegaste a mi vida, todo tiene más color. Eres mi razón favorita para sonreír cada mañana y mi último pensamiento antes de dormir.

Gracias por cada risa compartida, por cada abrazo que reinicia mi mundo y por ser mi equipo en esta aventura llamada vida. No importa lo que pase, sé que junto a ti todo es posible.

Hoy quiero recordarte lo increíble que eres y cuánto te quiero.
Gracias por elegirme todos los días.

Siempre tuyo/a,
Tu persona especial ❤️`;

    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) clearInterval(interval);
        }, 50); // Speed of typing
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-2xl mx-auto mb-24 p-8 bg-paper-pattern relative transform rotate-1 shadow-xl bg-[#fffdf0]">
            {/* Decorative tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-200/50 transform -rotate-2" />

            <div className="flex items-center justify-center gap-2 text-rose-400 mb-6">
                <PenTool size={20} />
                <span className="uppercase tracking-widest text-xs font-bold">Carta para ti</span>
            </div>

            <div className="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed whitespace-pre-line">
                {displayedText}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-0.5 h-6 bg-rose-500 ml-1 translate-y-1"
                />
            </div>

            {/* Signature area decoration */}
            <div className="absolute bottom-4 right-8 opacity-10">
                <Heartdoodle />
            </div>
        </section>
    );
};



export default Letter;
