import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Envelope = ({ onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(onOpen, 1500);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <motion.div
                className="relative cursor-pointer group"
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="relative w-72 h-48 bg-rose-200 shadow-2xl rounded-b-lg border-2 border-rose-300">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-rose-300 origin-top rounded-t-lg shadow-inner z-20"
                        initial={{ rotateX: 0 }}
                        animate={{ rotateX: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ backfaceVisibility: 'hidden', clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}
                    />
                    <motion.div
                        className="absolute top-4 left-4 right-4 bg-white h-36 shadow-md flex flex-col items-center justify-center p-2 rounded-sm z-10"
                        animate={{ y: isOpen ? -100 : 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <img
                            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp6bzZpMHB6amV4eXp6bzZpMHB6amV4eXp6bzZpMHB6amV4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriO0OEd9QIDdllqo/giphy.gif"
                            alt="Gatito con corazón"
                            className="w-16 h-16 object-cover rounded-full mb-2"
                        />
                        <p className="text-[12px] font-serif text-rose-600 font-bold italic">Presiona para abrir mi corazón</p>
                    </motion.div>
                    <div className="absolute inset-0 bg-rose-200 z-0 rounded-b-lg" style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}></div>
                    <div className="absolute inset-0 bg-rose-200 z-0 rounded-b-lg" style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}></div>
                    <div className="absolute inset-0 bg-rose-100 z-0 rounded-b-lg" style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}></div>
                </div>
                {!isOpen && (
                    <motion.div
                        className="mt-12 text-rose-600 font-medium flex flex-col items-center gap-2"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <div className="flex items-center gap-2">
                            <Mail size={18} /> <span className="text-lg">Tienes una carta especial...</span>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Envelope;
