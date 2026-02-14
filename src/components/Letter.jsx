import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Heartdoodle = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-500">
        <path d="M50 80C50 80 10 50 10 30C10 15 25 10 40 20C45 23 50 30 50 30C50 30 55 23 60 20C75 10 90 15 90 30C90 50 50 80 50 80Z" />
    </svg>
);

const Letter = () => {
    const text = `Amor de mi vida,

Hoy y siempre quiero recordarte lo mucho que TE AMO y lo importante que eres en mi vida. Eres mi persona favorita hoy y siempre. ¿Lo recuerdas? mínimo un par de vidas juntas.

Gracias por cada momento a tu lado, por cada abrazo, por cada sonrisa, por cada una de tus palabras llenas de amor, y por ser mi compañero en esta aventura llamada vida, en la que tú y yo somos los protagonistas.

Te amo con todo mi ser y le pido a Dios que nos permita caminar tomados de la mano toda una eternidad.

Gracias por elegirme todos los días…

Atentamente
El amor de tu vida ♡`;

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
            <motion.div
                initial={{ rotate: -2 }}
                whileInView={{ rotate: 0 }}
                className="bg-stone-50 p-8 md:p-12 rounded-sm shadow-2xl relative mb-24 overflow-hidden border-t-8 border-red-800"
            >
                {/* Paper texture/lines */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative z-10 font-serif text-stone-800 leading-loose text-lg md:text-xl text-center md:text-left">
                    <motion.div className="mb-8">
                        <span className="text-red-700 font-bold text-2xl">Mi amor,</span>
                    </motion.div>

                    <div className="space-y-6">
                        {/* Typewriter content */}
                        {displayedText}
                        <span className="inline-block w-1 h-6 bg-red-600 animate-pulse ml-1" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 text-right"
                    >
                        <p className="text-red-800 italic font-bold text-2xl">Por siempre tuya,</p>
                        <div className="mt-2 flex justify-end">
                            <Heart size={24} fill="#dc2626" className="text-red-600 ml-4 animate-bounce" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};



export default Letter;
