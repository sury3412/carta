import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';

const Coupon = ({ title, desc }) => {
    const [used, setUsed] = useState(false);

    const handleClick = () => {
        if (!used) {
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#fb7185', '#fda4af', '#ffe4e6']
            });
        }
        setUsed(!used);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative p-6 border-2 border-dashed rounded-2xl transition-all cursor-pointer overflow-hidden ${used ? 'bg-zinc-800/50 border-zinc-700 opacity-50' : 'bg-zinc-900 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(220,38,38,0.3)]'}`}
            onClick={() => setUsed(!used)}
        >
            <div className="flex justify-between items-start mb-4">
                <Ticket className={used ? 'text-zinc-600' : 'text-red-500'} />
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded tracking-tighter ${used ? 'bg-zinc-700 text-zinc-400' : 'bg-red-950 text-red-400 border border-red-900/50'}`}>
                    {used ? 'Canjeado' : 'Válido'}
                </span>
            </div>
            <h4 className={`font-bold tracking-wide ${used ? 'text-zinc-500 line-through' : 'text-white'}`}>{title}</h4>
            <p className="text-xs text-gray-400 mt-1">{desc}</p>
            {used && <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center font-bold text-red-600/30 rotate-12 text-2xl tracking-tighter">RECLAMADO</div>}
        </motion.div>
    );
};

export default Coupon;
