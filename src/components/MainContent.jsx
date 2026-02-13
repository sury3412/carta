import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Ticket, Quote, Heart, Gift, Music, Star, Sparkles } from 'lucide-react';
import Timeline from './Timeline';
import Coupon from './Coupon';
import Proposal from './Proposal';
import Letter from './Letter';
import PhotoGallery from './PhotoGallery';

const MainContent = () => {
    const [randomMsg, setRandomMsg] = React.useState("Haz clic para un mensaje de amor...");

    const romanticQuotes = [
        "Eres lo mejor que me ha pasado en la vida. ❤️",
        "Cada día a tu lado es un regalo que valoro infinitamente. ✨",
        "Gracias por ser mi paz, mi hogar y mi mayor aventura. 🏠",
        "Eres el amor con el que siempre soñé y mucho más. 💍",
        "Amo la vida que estamos construyendo juntos. 🥂",
        "Contigo, el 'para siempre' se queda corto. ♾️",
        "Eres mi persona favorita en todo el universo. 🌌",
        "Gracias por elegirme cada día, te amo inmensamente. 💖"
    ];

    const gifs = [
        "https://media.tenor.com/lnI645QIjMAAAAAj/gatitos-enamorados-besos-de-amor.gif",
        "https://media.tenor.com/9Ns8M_G13a8AAAAM/peachcat-cuddle.gif",
        "https://media.tenor.com/6pFkg0D_3W0AAAAM/cat-couple-cute-cats.gif",
        "https://media.tenor.com/ujmhvYqOKfgAAAAM/mitiaomao-cat.gif",
        "https://media.tenor.com/sBArzakfLQsAAAAM/mochi-%E3%82%82%E3%81%A1%E3%81%AD%E3%81%93.gif"
    ];

    return (
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 pb-32">
            <header className="text-center mb-16">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-serif text-red-600 mb-4 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                >
                    ¡Feliz San Valentín!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-red-500 italic text-xl font-medium tracking-wide"
                >
                    Gracias por ser mi otra mitad ✨
                </motion.p>
            </header>

            <div className="flex justify-center -mt-10 mb-12">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                    <img src={gifs[0]} alt="Cute cat" className="w-48 md:w-64 drop-shadow-xl" />
                </motion.div>
            </div>

            {/* Sección: Carta */}
            <Letter />

            {/* Sección: Galería de Fotos */}
            <PhotoGallery />

            {/* Sección: Línea del Tiempo */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-12 flex items-center justify-center gap-2">
                    <Calendar className="text-red-600" /> <span className="uppercase tracking-widest">Nuestra Historia</span>
                </h2>
                <div className="flex justify-center mb-8">
                    <img src={gifs[1]} alt="Cuddle" className="w-40 md:w-48 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)] border-4 border-red-900" />
                </div>
                <Timeline />
            </section>

            {/* Sección: Cupones */}
            <section className="mb-24 relative">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-4 flex items-center justify-center gap-2">
                    <Ticket className="text-red-600" /> <span className="uppercase tracking-widest">Vales Especiales</span>
                </h2>
                <div className="absolute -top-16 -left-4 md:left-10 transform -rotate-12 pointer-events-none">
                    <img src={gifs[2]} alt="Love" className="w-32 md:w-40 opacity-90 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]" />
                </div>
                <p className="text-center text-gray-400 mb-10">Haz clic en un cupón para reclamarlo</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Coupon title="Cena Romántica" desc="Válido para una cena en tu lugar favorito." />
                    <Coupon title="Maratón de Pelis" desc="Tú eliges todas las películas hoy." />
                    <Coupon title="Vale por un Abrazo" desc="Un abrazo de 10 minutos (o más)." />
                    <Coupon title="Masaje de Pies" desc="Relajación total garantizada." />
                    <Coupon title="Día de Aventuras" desc="Tú decides a dónde vamos." />
                    <Coupon title="Comodín del Perdón" desc="Úsalo cuando gane una discusión." />
                </div>
            </section>

            {/* Sección: Miau-mensajes Mejorada */}
            <section className="mb-24 relative max-w-2xl mx-auto px-4">
                <div className="absolute -top-20 right-0 md:-right-16 z-20 pointer-events-none transform rotate-12">
                    <img src={gifs[3]} alt="Sleepy" className="w-36 md:w-44 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                </div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-zinc-900 p-12 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center border-4 border-red-900/30 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-900 via-red-600 to-red-900" />

                    <Quote className="mx-auto text-red-900 mb-6 opacity-40" size={48} />

                    <div className="min-h-[100px] flex items-center justify-center">
                        <motion.p
                            key={randomMsg}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-serif text-red-500 italic leading-relaxed drop-shadow-sm"
                        >
                            "{randomMsg}"
                        </motion.p>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setRandomMsg(romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)])}
                            className="bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center gap-3 border border-red-500/30"
                        >
                            <Sparkles size={20} className="text-yellow-400" /> Generar amor
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Sección Interactiva: La Pregunta */}
            <Proposal />

            <footer className="mt-20 text-center text-red-900/60 pb-12">
                <p className="text-sm uppercase tracking-widest font-bold mb-4 text-red-800">
                    Para la persona más especial del universo ✨
                </p>
                <div className="flex justify-center mt-6">
                    <img src={gifs[4]} alt="Mochi" className="w-32 md:w-40 hover:scale-110 transition-transform cursor-pointer" />
                </div>
            </footer>
        </div>
    );
};

export default MainContent;
