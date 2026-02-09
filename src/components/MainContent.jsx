import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Ticket, Quote, Heart, Gift, Music, Star, Sparkles } from 'lucide-react';
import Timeline from './Timeline';
import Coupon from './Coupon';
import Proposal from './Proposal';
import Letter from './Letter';

const MainContent = () => {
    const [randomMsg, setRandomMsg] = React.useState("Haz clic para un miau-mensaje...");

    const kittenQuotes = [
        "Eres el miau de mi vida. 🐾",
        "Te quiero más que a los sobres de atún. 🐟",
        "Purrr-fectos el uno para el otro. ✨",
        "Mis siete vidas te las daría a ti. ❤️",
        "Eres mi lugar favorito para tomar una siesta. 😴",
        "Contigo todo es más bonito. 🌸",
        "Eres mi notificación favorita. 📱"
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
                    className="text-6xl md:text-8xl font-serif text-rose-600 mb-4 drop-shadow-sm"
                >
                    ¡Feliz San Valentín!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-rose-400 italic text-xl"
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

            {/* Sección: Línea del Tiempo */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center text-rose-500 mb-12 flex items-center justify-center gap-2">
                    <Calendar /> Nuestra Historia
                </h2>
                <div className="flex justify-center mb-8">
                    <img src={gifs[1]} alt="Cuddle" className="w-40 md:w-48 rounded-full shadow-lg border-4 border-white" />
                </div>
                <Timeline />
            </section>

            {/* Sección: Cupones */}
            <section className="mb-24 relative">
                <h2 className="text-3xl font-bold text-center text-rose-500 mb-4 flex items-center justify-center gap-2">
                    <Ticket /> Vales Especiales
                </h2>
                <div className="absolute -top-16 -left-4 md:left-10 transform -rotate-12 pointer-events-none">
                    <img src={gifs[2]} alt="Love" className="w-32 md:w-40 opacity-90 drop-shadow-md" />
                </div>
                <p className="text-center text-gray-500 mb-10">Haz clic en un cupón para reclamarlo</p>
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
            <section className="mb-24 relative max-w-2xl mx-auto">
                <div className="absolute -top-20 right-0 md:-right-16 z-20 pointer-events-none transform rotate-12">
                    <img src={gifs[3]} alt="Sleepy" className="w-36 md:w-44 drop-shadow-lg" />
                </div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-12 rounded-[3rem] shadow-2xl text-center border-4 border-rose-50 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />

                    <Quote className="mx-auto text-rose-300 mb-6 opacity-50" size={48} />

                    <div className="min-h-[100px] flex items-center justify-center">
                        <motion.p
                            key={randomMsg}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-serif text-rose-600 italic leading-relaxed"
                        >
                            "{randomMsg}"
                        </motion.p>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setRandomMsg(kittenQuotes[Math.floor(Math.random() * kittenQuotes.length)])}
                            className="bg-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all shadow-rose-200 shadow-xl flex items-center gap-3"
                        >
                            <Sparkles size={20} /> Generar ternura
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Sección Interactiva: La Pregunta */}
            <Proposal />

            <footer className="mt-20 text-center text-rose-400/60 pb-12">
                <p className="text-sm uppercase tracking-widest font-bold mb-4">
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
