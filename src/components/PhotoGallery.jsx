import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Heart } from 'lucide-react';

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Dynamically import all images from the assets/imagenes folder
        const imageModules = import.meta.glob('../assets/imagenes/*.{png,jpg,jpeg,JPG,JPEG}', { eager: true });
        const imagePaths = Object.values(imageModules).map((mod) => mod.default || mod);
        setImages(imagePaths);
    }, []);

    return (
        <section className="mb-24 px-4 overflow-hidden">
            <h2 className="text-3xl font-bold text-center text-red-500 mb-12 flex items-center justify-center gap-2">
                <Camera className="text-red-600" /> <span className="uppercase tracking-widest">Nuestros Momentos</span>
            </h2>

            <div className="relative flex flex-wrap justify-center gap-6 md:gap-10 max-w-6xl mx-auto py-10">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        drag
                        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                        whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{
                            opacity: 0,
                            y: 20,
                            rotate: Math.random() * 20 - 10
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white p-3 pb-10 shadow-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(img)}
                    >
                        <div className="relative overflow-hidden w-32 h-32 md:w-48 md:h-48">
                            <img
                                src={img}
                                alt={`Momento ${idx}`}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-red-950/20 group-hover:opacity-0 transition-opacity" />
                        </div>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                            <Heart size={16} fill="#dc2626" className="text-red-600 opacity-20 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Polaroid frame border */}
                        <div className="absolute inset-0 border-[8px] border-white pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotate: -5 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.8, rotate: 5 }}
                            className="relative max-w-4xl max-h-[90vh] bg-white p-4 pb-16 shadow-[0_0_50px_rgba(220,38,38,0.3)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Momento seleccionado"
                                className="max-w-full max-h-[70vh] object-contain"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black font-serif text-2xl">
                                Te amo ❤️
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PhotoGallery;
