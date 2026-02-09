import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { date: "Primer Día", title: "Cuando nos conocimos", desc: "Ese día el mundo se volvió un poquito más brillante.", icon: "✨" },
        { date: "Nuestra Cita", title: "La primera salida", desc: "No podía dejar de sonreír (y sigo igual).", icon: "🍦" },
        { date: "Un Momento", title: "Nuestro primer 'Te Quiero'", desc: "El momento en que supe que eras tú.", icon: "❤️" },
        { date: "Hoy", title: "San Valentín", desc: "Un año más de aventuras juntos.", icon: "🐾" },
    ];

    return (
        <div className="relative py-10 px-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-200 rounded-full" />
            {events.map((ev, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className={`relative mb-12 flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                    <div className="w-5/12" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-rose-400 rounded-full z-10 flex items-center justify-center text-sm shadow-md">
                        {ev.icon}
                    </div>
                    <div className="w-5/12 bg-white p-6 rounded-3xl shadow-lg border border-rose-100 hover:shadow-xl transition-shadow">
                        <span className="text-rose-400 font-bold text-xs uppercase tracking-widest">{ev.date}</span>
                        <h3 className="text-lg font-bold text-rose-600 mt-1">{ev.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{ev.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
