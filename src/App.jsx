import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import Envelope from './components/Envelope';
import MainContent from './components/MainContent';

function App() {
  const [stage, setStage] = useState('envelope'); // 'envelope' | 'main'

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans selection:bg-rose-200 overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {stage === 'envelope' ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Envelope onOpen={() => setStage('main')} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
