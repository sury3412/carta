import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { date: "Primer Día", title: "Cuando nos conocimos", desc: "Ese día nació algo especial…", icon: "✨" },
        { date: "Nuestra Cita", title: "Nuestra primera cita", desc: "Un poco extraña, pero ya existía esa conexión especial.", icon: "🍦" },
        { date: "El Gran Momento", title: "La Propuesta", desc: "El día que me pediste ser tu esposa, dije que sí sin dudarlo y hoy te diría que SÍ MIL VECES MÁS.", icon: "💍" },
    ];

    return (
        <div className="relative py-10 px-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-900/30 rounded-full" />
            {events.map((ev, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative mb-12 flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                    <div className="w-5/12" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-zinc-900 border-4 border-red-600 rounded-full z-10 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                        {ev.icon}
                    </div>
                    <div className="w-5/12 bg-zinc-900/50 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-red-900/20 group hover:border-red-600/50 transition-colors">
                        <span className="text-red-500 font-bold text-xs uppercase tracking-[0.2em]">{ev.date}</span>
                        <h3 className="text-lg font-bold text-white mt-1 group-hover:text-red-400 transition-colors">{ev.title}</h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{ev.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
