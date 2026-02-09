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
            whileTap={{ scale: 0.98 }}
            className={`relative p-6 border-2 border-dashed rounded-2xl transition-all cursor-pointer overflow-hidden group ${used ? 'bg-gray-100 border-gray-300' : 'bg-white border-rose-300 hover:border-rose-400 hover:shadow-md'}`}
            onClick={handleClick}
        >
            <div className="flex justify-between items-start mb-4">
                <Ticket className={used ? 'text-gray-400' : 'text-rose-500'} />
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded transition-colors ${used ? 'bg-gray-200 text-gray-500' : 'bg-rose-100 text-rose-500 group-hover:bg-rose-200'}`}>
                    {used ? 'Canjeado' : 'Válido'}
                </span>
            </div>
            <h4 className={`font-bold transition-colors ${used ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{title}</h4>
            <p className="text-xs text-gray-500 mt-1">{desc}</p>

            {used && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 12 }}
                    className="absolute inset-0 bg-gray-500/5 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
                >
                    <span className="font-bold text-gray-400/40 text-2xl border-4 border-gray-400/30 p-2 rounded-lg -rotate-12">RECLAMADO</span>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Coupon;
